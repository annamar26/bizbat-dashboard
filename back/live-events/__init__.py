#!/usr/bin/env python3

# === IMPORTS ===
from flask import Blueprint


# === GLOBALS ===
blueprint = Blueprint('bp_live-events', __name__)


# === FUNCTIONS ===
def bp_register_views(app, basepath='/live-events/'):
    blueprint.add_url_rule('/', view_func=LogsView.as_view('logs_view'))

    app.register_blueprint(blueprint, url_prefix=basepath)
