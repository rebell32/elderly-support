# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import pymysql

# app = Flask(__name__)
# CORS(app, resources={r"/*": {"origins": "*"}})

# # Database configuration
# db_config = {
#     'host': 'localhost',
#     'user': 'root',
#     'password': '12345',
#     'database': 'dbmsproject'
# }

# class Database:
#     def __init__(self):
#         self.connection = pymysql.connect(
#             host=db_config['host'],
#             user=db_config['user'],
#             password=db_config['password'],
#             database=db_config['database']
#         )
#         self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)  # DictCursor for dictionary results

#     def select(self, query, params=None):
#         try:
#             self.cursor.execute(query, params)
#             result = self.cursor.fetchall()
#             return result
#         except pymysql.MySQLError as e:
#             print(f"Error: {e}")
#             return None

#     def update(self, query, params):
#         try:
#             self.cursor.execute(query, params)
#             self.connection.commit()
#             return self.cursor.lastrowid
#         except pymysql.MySQLError as e:
#             print(f"Error: {e}")
#             self.connection.rollback()
#             return None

#     def close(self):
#         self.cursor.close()
#         self.connection.close()

# @app.route('/get_hospitals', methods=['GET'])
# def get_hospitals():
#     db = Database()
#     query = "SELECT * FROM hospitals_final"
#     result = db.select(query)
#     db.close()
#     return jsonify(result)

# @app.route('/get_hospital/<int:id>', methods=['GET'])
# def get_hospital(id):
#     db = Database()
#     # Ensure the query uses the correct column names
#     query = "SELECT * FROM hospitals_final WHERE `Master ID` = %s"
#     params = (id,)
#     result = db.select(query, params)
#     db.close()
#     return jsonify(result[0]) if result else jsonify({'error': 'Hospital not found'}), 404

# @app.route('/update_hospital', methods=['POST'])
# def update_hospital():
#     data = request.get_json()
#     hospital_name = data['hospital_name']
#     new_locality = data['new_locality']
    
#     db = Database()
#     # Ensure the query uses the correct column names
#     query = "UPDATE hospitals_final SET Locality = %s WHERE `Hospital Name` = %s"
#     params = (new_locality, hospital_name)
#     rows_affected = db.update(query, params)
#     db.close()
#     return jsonify({'rows_affected': rows_affected})

# # New route for fetching hospices data
# @app.route('/get_hospices', methods=['GET'])
# def get_hospices():
#     try:
#         db = Database()
#         query = "SELECT * FROM Hospice_Care_CentresFinal"
#         result = db.select(query)  # Assuming `select` method returns a list of dictionaries
#         db.close()
#         return jsonify(result)
#     except Exception as e:
#         print(e)
#         return jsonify({'error': 'Failed to fetch data'}), 500

# @app.route('/get_hospice/<int:id>', methods=['GET'])
# def get_hospice(id):
#     db = Database()
#     query = "SELECT * FROM Hospice_Care_CentresFinal WHERE `Master ID` = %s"
#     params = (id,)
#     result = db.select(query, params)
#     db.close()
#     return jsonify(result[0]) if result else jsonify({'error': 'Hospice not found'}), 404

# @app.route('/update_hospice', methods=['POST'])
# def update_hospice():
#     data = request.get_json()
#     hospice_name = data['hospice_name']
#     new_locality = data['new_locality']
    
#     db = Database()
#     query = "UPDATE Hospice_Care_CentresFinal SET Locality = %s WHERE `Hospice Care Centre Name` = %s"
#     params = (new_locality, hospice_name)
#     rows_affected = db.update(query, params)
#     db.close()
#     return jsonify({'rows_affected': rows_affected})

# @app.route('/get_nursing_homes', methods=['GET'])
# def get_nursing_homes():
#     try:
#         db = Database()
#         # Fetch data from the correct table and include the required fields
#         query = " SELECT * FROM Nursing_Care_Centers_Final "
#         result = db.select(query)  # Ensure this returns a list of dictionaries
#         db.close()
#         return jsonify(result)
#     except Exception as e:
#         print(e)
#         return jsonify({'error': 'Failed to fetch data'}), 500

# @app.route('/get_companions', methods=['GET'])
# def get_companions():
#     try:
#         db = Database()
#         # Fetch data from the Elderly_Care_Services_Final table
#         query = " SELECT * FROM Elderly_Care_Services_Final "
#         result = db.select(query)  # Ensure this returns a list of dictionaries
#         db.close()
#         return jsonify(result)
#     except Exception as e:
#         print(e)
#         return jsonify({'error': 'Failed to fetch data'}), 500

# @app.route('/get_pharmacies', methods=['GET'])
# def get_pharmacies():
#     try:
#         db = Database()
#         # Fetch data from the Pharmacies_Final table
#         query = "SELECT * FROM Pharmacies_Final"
#         result = db.select(query)  # Ensure this returns a list of dictionaries
#         db.close()
#         return jsonify(result)
#     except Exception as e:
#         print(e)
#         return jsonify({'error': 'Failed to fetch data'}), 500

# @app.route('/get_volunteers', methods=['GET'])
# def get_volunteers():
#     db = Database()
#     query = "SELECT * FROM volunteers"
#     result = db.select(query)
#     db.close()
#     return jsonify(result)

# @app.route('/add_volunteers', methods=['POST'])
# def add_volunteer():
#     data = request.get_json()
#     name = data['name']
#     email = data['email']
#     phone = data['phone']
#     availability = data['availability']
    
#     db = Database()
#     query = "INSERT INTO volunteers (name, email, phone, availability) VALUES (%s, %s, %s, %s)"
#     params = (name, email, phone, availability)
#     volunteer_id = db.insert(query, params)
#     db.close()
#     return jsonify({'id': volunteer_id}), 201


# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': '12345',
    'database': 'dbmsproject'
}

class Database:
    def __init__(self):
        self.connection = pymysql.connect(
            host=db_config['host'],
            user=db_config['user'],
            password=db_config['password'],
            database=db_config['database']
        )
        self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)  # DictCursor for dictionary results

    def select(self, query, params=None):
        try:
            self.cursor.execute(query, params)
            result = self.cursor.fetchall()
            return result
        except pymysql.MySQLError as e:
            print(f"Error: {e}")
            return None

    def update(self, query, params):
        try:
            self.cursor.execute(query, params)
            self.connection.commit()
            return self.cursor.lastrowid  # Return the last inserted ID
        except pymysql.MySQLError as e:
            print(f"Error: {e}")
            self.connection.rollback()
            return None

    def insert(self, query, params):
        try:
            self.cursor.execute(query, params)
            self.connection.commit()
            return self.cursor.lastrowid  # Return the last inserted ID
        except pymysql.MySQLError as e:
            print(f"Error: {e}")
            self.connection.rollback()
            return None

    def close(self):
        self.cursor.close()
        self.connection.close()

@app.route('/get_hospitals', methods=['GET'])
def get_hospitals():
    db = Database()
    query = "SELECT * FROM hospitals_final"
    result = db.select(query)
    db.close()
    return jsonify(result)

@app.route('/get_hospital/<int:id>', methods=['GET'])
def get_hospital(id):
    db = Database()
    query = "SELECT * FROM hospitals_final WHERE `Master ID` = %s"
    params = (id,)
    result = db.select(query, params)
    db.close()
    return jsonify(result[0]) if result else jsonify({'error': 'Hospital not found'}), 404

@app.route('/update_hospital', methods=['POST'])
def update_hospital():
    data = request.get_json()
    hospital_name = data['hospital_name']
    new_locality = data['new_locality']
    
    db = Database()
    query = "UPDATE hospitals_final SET Locality = %s WHERE `Hospital Name` = %s"
    params = (new_locality, hospital_name)
    rows_affected = db.update(query, params)
    db.close()
    return jsonify({'rows_affected': rows_affected})

@app.route('/get_hospices', methods=['GET'])
def get_hospices():
    try:
        db = Database()
        query = "SELECT * FROM Hospice_Care_CentresFinal"
        result = db.select(query)
        db.close()
        return jsonify(result)
    except Exception as e:
        print(e)
        return jsonify({'error': 'Failed to fetch data'}), 500

@app.route('/get_hospice/<int:id>', methods=['GET'])
def get_hospice(id):
    db = Database()
    query = "SELECT * FROM Hospice_Care_CentresFinal WHERE `Master ID` = %s"
    params = (id,)
    result = db.select(query, params)
    db.close()
    return jsonify(result[0]) if result else jsonify({'error': 'Hospice not found'}), 404

@app.route('/update_hospice', methods=['POST'])
def update_hospice():
    data = request.get_json()
    hospice_name = data['hospice_name']
    new_locality = data['new_locality']
    
    db = Database()
    query = "UPDATE Hospice_Care_CentresFinal SET Locality = %s WHERE `Hospice Care Centre Name` = %s"
    params = (new_locality, hospice_name)
    rows_affected = db.update(query, params)
    db.close()
    return jsonify({'rows_affected': rows_affected})

@app.route('/get_nursing_homes', methods=['GET'])
def get_nursing_homes():
    try:
        db = Database()
        query = "SELECT * FROM Nursing_Care_Centers_Final"
        result = db.select(query)
        db.close()
        return jsonify(result)
    except Exception as e:
        print(e)
        return jsonify({'error': 'Failed to fetch data'}), 500

@app.route('/get_companions', methods=['GET'])
def get_companions():
    try:
        db = Database()
        query = "SELECT * FROM Elderly_Care_Services_Final"
        result = db.select(query)
        db.close()
        return jsonify(result)
    except Exception as e:
        print(e)
        return jsonify({'error': 'Failed to fetch data'}), 500

@app.route('/get_pharmacies', methods=['GET'])
def get_pharmacies():
    try:
        db = Database()
        query = "SELECT * FROM Pharmacies_Final"
        result = db.select(query)
        db.close()
        return jsonify(result)
    except Exception as e:
        print(e)
        return jsonify({'error': 'Failed to fetch data'}), 500

@app.route('/get_volunteers', methods=['GET'])
def get_volunteers():
    db = Database()
    query = "SELECT * FROM volunteers"
    result = db.select(query)
    db.close()
    return jsonify(result)

@app.route('/add_volunteer', methods=['POST'])
def add_volunteer():
    data = request.get_json()
    name = data['name']
    email = data['email']
    phone = data['phone']
    availability = data['availability']
    
    db = Database()
    query = "INSERT INTO volunteers (name, email, phone, availability) VALUES (%s, %s, %s, %s)"
    params = (name, email, phone, availability)
    volunteer_id = db.insert(query, params)  # Use the `insert` method for insert as well
    db.close()
    if volunteer_id:
        return jsonify({'id': volunteer_id}), 201
    else:
        return jsonify({'error': 'Failed to add volunteer'}), 500

@app.route('/test_post', methods=['POST'])
def test_post():
    return jsonify({'message': 'POST request successful!'})

if __name__ == '__main__':
    app.run(debug=True)

