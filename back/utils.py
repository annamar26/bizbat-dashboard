#!/usr/bin/env python3

# === IMPORTS ===
# Utils
from flask import jsonify, Response


# === FUNCTIONS ===
# Convert the list to json for return
def convert_data(data, content_type):
    if isinstance(data, str):
        return Response(data, mimetype="text/plain")
    if content_type == "application/json":
        return jsonify(data)
