#!/usr/bin/python3

# === IMPORTS ===
import os
from flask import Flask


# === GLOBALS ===
app = Flask(__name__)

@app.route('/users/most-followed/')
def endpoint1():
    return 'This is endpoint 1'

@app.route('/users/')
def endpoint2():
    return 'This is endpoint 2'


# === MAIN ===
if __name__ == '__main__':
    os.environ['DEBUG'] = 'true'
    os.environ['AUTHLIB_INSECURE_TRANSPORT'] = 'true'
    os.environ['FLASK_DEBUG'] = '1'
    os.environ['INO_DEBUG'] = 'true'

    app.run(debug=True, host='0.0.0.0', port=5000, threaded=True)  # nosec
