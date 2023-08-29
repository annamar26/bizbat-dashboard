#!/usr/bin/env python3

# === IMPORTS ===
from flask import Blueprint

# BizBat Dashboard
from .live_events_views import LiveEventsTopMostExpensive


# === GLOBALS ===
blueprint = Blueprint("bp_live_events", __name__)


# === FUNCTIONS ===
def bp_register_views(app, basepath="/live_events"):
    blueprint.add_url_rule("/top_expensive/", view_func=LiveEventsTopMostExpensive.as_view("live_events_most_expensive"))

    app.register_blueprint(blueprint, url_prefix=basepath)
