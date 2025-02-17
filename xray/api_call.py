import frappe
import requests

def make_pan_api_request(doc, method):
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

    except Exception as e:
        frappe.log_error(f"API Call Failed: {str(e)}", "API Integration")

def get_custom_list(doctype, **kwargs):
    if doctype == "PanCard Verification":
        data = frappe.get_list(doctype, **kwargs)
        custom_data = []

        for item in data:
            doc = frappe.get_doc(doctype, item.name)
            custom_data.append({
                "id": doc.name,
                "pan_card_number": doc.pan_card_number,
                "request_id": doc.request_id,
                "pan_number": doc.pan_number,
                "pan_type": doc.pan_type,
                "aadhaar_number": doc.aadhaar_number,
                "aadhaar_linked": doc.aadhaar_linked,
                "date_of_birth": doc.date_of_birth,
                "pan_status": doc.pan_status,
                "pan_allotment_date": doc.pan_allotment_date,
                "full_name": doc.full_name,
                "first_name": doc.first_name,
                "middle_name": doc.middle_name,
                "last_name": doc.last_name,
                "gender": doc.gender,
                "is_sole_proprietor": doc.is_sole_proprietor,
                "is_director": doc.is_director,
                "is_salaried": doc.is_salaried,
                "building_name": doc.building_name,
                "locality": doc.locality,
                "street_name": doc.street_name,
                "city": doc.city,
                "state": doc.state,
                "country": doc.country,
                "pin_code": doc.pin_code,
            })
        return custom_data
    else:
        return frappe.get_list(doctype, **kwargs)

def get_custom_doc(doctype, name, **kwargs):
    if doctype == "PanCard Verification":
        doc = frappe.get_doc(doctype, name)
        return {
            "id": doc.name,
            "pan_card_number": doc.pan_card_number,
            "request_id": doc.request_id,
            "pan_number": doc.pan_number,
            "pan_type": doc.pan_type,
            "aadhaar_number": doc.aadhaar_number,
            "aadhaar_linked": doc.aadhaar_linked,
            "date_of_birth": doc.date_of_birth,
            "pan_status": doc.pan_status,
            "pan_allotment_date": doc.pan_allotment_date,
            "full_name": doc.full_name,
            "first_name": doc.first_name,
            "middle_name": doc.middle_name,
            "last_name": doc.last_name,
            "gender": doc.gender,
            "is_sole_proprietor": doc.is_sole_proprietor,
            "is_director": doc.is_director,
            "is_salaried": doc.is_salaried,
            "building_name": doc.building_name,
            "locality": doc.locality,
            "street_name": doc.street_name,
            "city": doc.city,
            "state": doc.state,
            "country": doc.country,
            "pin_code": doc.pin_code,
        }
    else:
        return frappe.get_doc(doctype, name)