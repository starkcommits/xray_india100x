import frappe
import requests
import json
import time
from frappe.utils.response import build_response

def make_pan_api_request(doc,method=None):
    """
    This function is triggered when a document is updated or inserted.
    It makes an API call and saves the response in another doctype.
    """

    # url = "https://x.gromybiz.com/webhook/pan"
    url="https://svc.digitap.ai/validation/kyc/v1/pan_details_plus"
    payload = {
        "client_ref_num":doc.name,
        "pan":doc.pan_card_number
    }
    # headers = {"Content-Type": "application/json"}
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Basic NzExNjk2NTY6MlRUUUFoeTczRkF0VnR2UnJZQnFkMlZlNzZyTVBUczA="
    }
    try:
        
        response = requests.post(url, json=payload, headers=headers, timeout=30)
        if response.status_code == 200:
            api_response = response.json()
            frappe.logger().info(f"✅ API Success Response: {api_response}")
            frappe.logger().info(f"🔍 Script is Running as User: {frappe.session.user}")

            doc.request_id = api_response.get("request_id")
            doc.client_ref_id = api_response.get("client_ref_num")
            doc.pan_number = api_response.get("result", {}).get("pan")
            doc.pan_type = api_response.get("result", {}).get("pan_type")
            doc.aadhaar_number = api_response.get("result", {}).get("aadhaar_number")
            doc.aadhaar_linked = 1 if api_response.get("result", {}).get("aadhaar_linked") else 0
            doc.date_of_birth = frappe.utils.get_datetime_str(frappe.utils.get_datetime_str(api_response.get("result", {}).get("dob"))),
            doc.mobile_number = api_response.get("result", {}).get("mobile")
            doc.email_id = api_response.get("result", {}).get("email")
            doc.pan_status = api_response.get("result", {}).get("pan_status")
            doc.pan_allotment_date = frappe.utils.get_datetime_str(api_response.get("result", {}).get("pan_allotment_date")),
            doc.full_name = api_response.get("result", {}).get("fullname")
            doc.first_name = api_response.get("result", {}).get("first_name")
            doc.middle_name = api_response.get("result", {}).get("middle_name")
            doc.last_name = api_response.get("result", {}).get("last_name")
            doc.gender = api_response.get("result", {}).get("gender")
            doc.is_sole_proprietor = 1 if api_response.get("result", {}).get("is_sole_proprietor") == "Y" else 0
            doc.is_director = 1 if api_response.get("result", {}).get("is_director") == "Y" else 0
            doc.is_salaried = 1 if api_response.get("result", {}).get("is_salaried") == "Y" else 0
            
            # Address fields
            address = api_response.get("result", {}).get("address", {})
            doc.building_name = address.get("building_name")
            doc.locality = address.get("locality")
            doc.street_name = address.get("street_name")
            doc.city = address.get("city")
            doc.state = address.get("state")
            doc.country = address.get("country")
            doc.pin_code = address.get("pincode")

            doc.save(ignore_permissions=True)
            frappe.db.commit()
            
            return doc
    except Exception as e:
        frappe.log_error(f"API Call Failed: {str(e)}", "API Integration")


def make_adhar_api_request(doc, method):
    """
    This function is triggered when a document is updated or inserted.
    It makes an API call and saves the response in another doctype.
    """

    # url = "https://x.gromybiz.com/webhook/pan"
    url="https://svc.digitap.ai/validation/kyc/v1/aadhaar"
    payload = {
        "client_ref_num":doc.name,
        "aadhaar":doc.aadhaar_card_number
    }
    # headers = {"Content-Type": "application/json"}
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Basic NzExNjk2NTY6MlRUUUFoeTczRkF0VnR2UnJZQnFkMlZlNzZyTVBUczA="
    }
    try:
        
        response = requests.post(url, json=payload, headers=headers, timeout=30)
        if response.status_code == 200:
            api_response = response.json()
            frappe.logger().info(f"✅ API Success Response: {api_response}")
            frappe.logger().info(f"🔍 Script is Running as User: {frappe.session.user}")

            doc.request_id = api_response.get("request_id")
            doc.aadhaar_age_band = api_response.get("result", {}).get("aadhaar_age_band")
            doc.aadhaar_state = api_response.get("result", {}).get("aadhaar_state")
            doc.aadhaar_gender = api_response.get("result", {}).get("aadhaar_gender")
            doc.aadhaar_phone = api_response.get("result", {}).get("aadhaar_phone")
            doc.aadhaar_result = api_response.get("result", {}).get("aadhaar_result")

            doc.save(ignore_permissions=True)
            frappe.db.commit()
            return doc
    except Exception as e:
        frappe.log_error(f"API Call Failed: {str(e)}", "API Integration")



@frappe.whitelist()
def pan_card_verification(pan_card_number):
    if frappe.db.exists("PanCard Verification", {"pan_card_number": pan_card_number}):
        pan_card_doc = frappe.get_doc("PanCard Verification", {"pan_card_number": pan_card_number})
    else:
        # Create a new document
        pan_card_doc = frappe.get_doc({
            "doctype": "PanCard Verification",
            "pan_card_number": pan_card_number
        })
        pan_card_doc.insert(ignore_permissions=True)
        
        # Make API request after insert
        result = make_pan_api_request(pan_card_doc)
        if not result:
            return {"error": "API request failed. Could not fetch PAN details."}
        pan_card_doc = result

    # Convert to dict and remove unwanted metadata fields
    response_data = pan_card_doc.as_dict()
    metadata_fields = [
        "name", "owner", "creation", "modified", "modified_by",
        "docstatus", "idx"
    ]
    
    # Remove metadata fields
    for field in metadata_fields:
        response_data.pop(field, None)

    return response_data


@frappe.whitelist()
def aadhar_card_verification(aadhaar_card_number):
    if frappe.db.exists("AadharCard Verification", {"aadhaar_card_number": aadhaar_card_number}):
        aadhaar_card_doc = frappe.get_doc("AadharCard Verification", {"aadhaar_card_number": aadhaar_card_number})
    else:
        # Create a new document
        aadhaar_card_doc = frappe.get_doc({
            "doctype": "AadharCard Verification",
            "aadhaar_card_number": aadhaar_card_number
        })
        aadhaar_card_doc.insert(ignore_permissions=True)
        
        # Make API request after insert
        result = make_adhar_api_request(aadhaar_card_doc,None)
        if not result:
            return {"error": "API request failed. Could not fetch PAN details."}
        aadhaar_card_doc = result
    # aadhaar_card_doc.set_data("id") = aadhaar_card_doc.get_data("name")
    # Convert to dict and remove unwanted metadata fields
    response_data = aadhaar_card_doc.as_dict()
    metadata_fields = [
        "name", "owner", "creation", "modified", "modified_by",
        "docstatus", "idx"
    ]
    
    # Remove metadata fields
    for field in metadata_fields:
        response_data.pop(field, None)

    return response_data