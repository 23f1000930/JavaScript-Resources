import time
import requests
import json

# WiFi credentials - Not needed for Python 3 as it assumes internet connection is already established.

# Firebase credentials
API_KEY = "AIz"
DATABASE_URL = "https://botcontrolling-default-rtdb.asia-southeast1.firebasedatabase.app/"  # Replace with your Firebase Realtime Database URL
FIREBASE_AUTH = "5lslH"  # Optional for basic security

# Send data to Firebase Realtime Database
def send_data(path, data):
    url = f"{DATABASE_URL}/{path}.json"
    if FIREBASE_AUTH:
        url += f"?auth={FIREBASE_AUTH}"

    headers = {"Content-Type": "application/json"}
    
    try:
        response = requests.put(url, data=json.dumps(data), headers=headers)
        print("Data sent to Firebase")
        print("Response:", response.text)
        response.close()
    except Exception as e:
        print(f"Error sending data: {e}")

# Main function
def main():
    while True:
        count = input("Enter Message:")
        # Send integer data to Firebase
        send_data("Movement", count)
        print(f"Message: {count}")

# Run the main function
if __name__ == "__main__":
    main()
