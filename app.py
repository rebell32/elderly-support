# from flask import Flask, jsonify
# from google.oauth2 import service_account
# from google.analytics.data_v1beta import BetaAnalyticsDataClient
# from google.analytics.data_v1beta.types import RunReportRequest

# app = Flask(__name__)

# SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
# KEY_FILE_LOCATION = 'C:/Users/thend/Downloads/log-in-log-out-af6df-e878a7ebf14e.json' # Update with the path to your JSON file
# PROPERTY_ID = '440894157 '  # Replace with your GA4 Measurement ID

# def initialize_analyticsreporting():
#     credentials = service_account.Credentials.from_service_account_file(KEY_FILE_LOCATION, scopes=SCOPES)
#     client = BetaAnalyticsDataClient(credentials=credentials)
#     return client

# def get_report(client):
#     request = RunReportRequest(
#         property=f"properties/{PROPERTY_ID}",
#         date_ranges=[{'start_date': '30daysAgo', 'end_date': 'today'}],
#         metrics=[{'name': 'sessions'}],
#         dimensions=[{'name': 'date'}]
#     )
#     response = client.run_report(request=request)
#     return response

# @app.route('/api/analytics', methods=['GET'])
# def analytics_data():
#     client = initialize_analyticsreporting()
#     response = get_report(client)
#     rows = response.rows
#     data = {
#         'dates': [row.dimension_values[0].value for row in rows],
#         'sessions': [row.metric_values[0].value for row in rows]
#     }
#     return jsonify(data)

# if __name__ == '__main__':
#     app.run(debug=True, port=5001)

# import os
# import json
# from flask import Flask, jsonify
# from google.oauth2 import service_account
# from google.analytics.data_v1beta import BetaAnalyticsDataClient
# from google.analytics.data_v1beta.types import RunReportRequest

# app = Flask(__name__)

# SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
# PROPERTY_ID = '440894157'  # Replace with your GA4 Property ID

# def initialize_analyticsreporting():
#     key_json = os.getenv('GOOGLE_APPLICATION_CREDENTIALS_JSON')
#     key_dict = json.loads(key_json)
#     credentials = service_account.Credentials.from_service_account_info(key_dict, scopes=SCOPES)
#     client = BetaAnalyticsDataClient(credentials=credentials)
#     return client

# def get_report(client):
#     request = RunReportRequest(
#         property=f"properties/{PROPERTY_ID}",
#         date_ranges=[{'start_date': '30daysAgo', 'end_date': 'today'}],
#         metrics=[{'name': 'sessions'}],
#         dimensions=[{'name': 'date'}]
#     )
#     response = client.run_report(request=request)
#     return response

# @app.route('/api/analytics', methods=['GET'])
# def analytics_data():
#     client = initialize_analyticsreporting()
#     response = get_report(client)
#     rows = response.rows
#     data = {
#         'dates': [row.dimension_values[0].value for row in rows],
#         'sessions': [row.metric_values[0].value for row in rows]
#     }
#     return jsonify(data)

# if __name__ == '__main__':
#     app.run(debug=True, port=5001)
import os
import json
from flask import Flask, jsonify
from google.oauth2 import service_account
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import RunReportRequest

app = Flask(__name__)

SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
PROPERTY_ID = '440894157'  # Replace with your GA4 Property ID

def initialize_analyticsreporting():
    key_json = os.getenv('GOOGLE_APPLICATION_CREDENTIALS_JSON')
    if not key_json:
        raise EnvironmentError("GOOGLE_APPLICATION_CREDENTIALS_JSON environment variable is not set.")
    print("Environment variable found.")
    key_dict = json.loads(key_json)
    print(f"JSON parsed successfully: {key_dict}")
    credentials = service_account.Credentials.from_service_account_info(key_dict, scopes=SCOPES)
    client = BetaAnalyticsDataClient(credentials=credentials)
    return client

def get_report(client):
    request = RunReportRequest(
        property=f"properties/{PROPERTY_ID}",
        date_ranges=[{'start_date': '30daysAgo', 'end_date': 'today'}],
        metrics=[{'name': 'sessions'}],
        dimensions=[{'name': 'date'}]
    )
    response = client.run_report(request=request)
    return response

@app.route('/api/analytics', methods=['GET'])
def analytics_data():
    client = initialize_analyticsreporting()
    response = get_report(client)
    rows = response.rows
    data = {
        'dates': [row.dimension_values[0].value for row in rows],
        'sessions': [row.metric_values[0].value for row in rows]
    }
    print(f"Report data: {data}")  # Print the report data
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
