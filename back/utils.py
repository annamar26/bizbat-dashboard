#!/usr/bin/env python3

# === IMPORTS ===
# Utils
from flask import request, jsonify, Response



# === FUNCTIONS ===
# Convert the list to json for return
def convert_data(data, content_type):
    if isinstance(data, str):  #If the data is a string, don't try to jsonify it
        return Response(data, mimetype='text/plain')
    if content_type == 'application/json':
        return jsonify(data)