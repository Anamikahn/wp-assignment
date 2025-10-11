from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Demo events
events = [
    {"id":1, "title":"Hackathon", "category":"Tech", "date":"2025-10-15", "seats_total":100, "seats_booked":30},
    {"id":2, "title":"Cultural Fest", "category":"Cultural", "date":"2025-10-20", "seats_total":50, "seats_booked":20}
]

@app.route('/api/events')
def get_events():
    return jsonify(events)

@app.route('/api/analytics')
def analytics():
    labels = [e['title'] for e in events]
    values = [e['seats_booked'] for e in events]
    return jsonify({"labels":labels, "values":values})

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    # Demo: accept any login
    return jsonify({"username": username, "token": "demo_token"})

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    return jsonify({"status":"registered"})

@app.route('/api/book', methods=['POST'])
def book():
    data = request.json
    return jsonify({"status":"booked"})

if __name__ == "__main__":
    app.run(debug=True)
