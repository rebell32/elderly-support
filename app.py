from flask import Flask, jsonify
from google.oauth2 import service_account
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import RunReportRequest

app = Flask(__name__)

SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
KEY_FILE_LOCATION = 'C:/Users/thend/Downloads/log-in-log-out-af6df-e878a7ebf14e.json' # Update with the path to your JSON file
PROPERTY_ID = '440894157 '  # Replace with your GA4 Measurement ID

def initialize_analyticsreporting():
    credentials = service_account.Credentials.from_service_account_file(KEY_FILE_LOCATION, scopes=SCOPES)
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
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
