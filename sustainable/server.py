from flask import Flask, json, jsonify, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def client_request():
    _request = request.json

if __name__ == '__main__':
    app.run(debug = True)

#http://127.0.0.1:5000