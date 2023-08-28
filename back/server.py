#!/usr/bin/python3

# === IMPORTS ===
# Utils
from flask import Flask

# BizBat Dashboard
from blueprints import posts, users

# === GLOBALS ===
app = Flask(__name__)

# live_events.bp_register_views(app)
posts.bp_register_views(app)
users.bp_register_views(app)


# === MAIN ===
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000, threaded=True)  # nosec
