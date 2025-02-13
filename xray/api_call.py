import frappe
import requests

def make_api_request(doc, method):
    """
    This function is triggered when a document is updated or inserted.
    It makes an API call and saves the response in another doctype.
    """
    try:
        # API endpoint (replace with actual)
        url = "https://x.gromybiz.com/webhook/pan"

        # API payload (modify as per requirement)
        payload = {
            "client_ref_num":doc.reference_id,
            "pan":doc.pan_card_number
        }

        # Headers if needed
        headers = {
            # "Authorization": "Basic NzExNjk2NTY6MlRUUUFoeTczRkF0VnR2UnJZQnFkMlZlNzZyTVBUczA=",
            "Content-Type": "application/json"
        }

        # Make API call
        response = requests.post(url, json=payload, headers=headers)
        response_data = response.json()

        # Create a new record in the target doctype
        new_doc = frappe.get_doc({
            "doctype": "User Pan Card Details",
            "source_docname": doc.name,
            "request_id": response_data.get("request_id"),
            "client_ref_id": response_data.get("client_ref_num")
        })

        new_doc.insert(ignore_permissions=True)

        frappe.db.commit()  # Ensure changes are saved
    except Exception as e:
        frappe.log_error(f"API Call Failed: {str(e)}", "API Integration")
