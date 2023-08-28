#!/usr/bin/env python3

# === IMPORTS ===
# Utils
from flask import Blueprint

# BizBat Dashboard
from .users_views import UsersTopFollowers, UsersPremium


# === GLOBALS ===
blueprint = Blueprint("bp_users", __name__)


# === FUNCTIONS ===
def bp_register_views(app, basepath="/users"):
    blueprint.add_url_rule(
        "/top_followers/", view_func=UsersTopFollowers.as_view("users_top_followers")
    )
    blueprint.add_url_rule(
        "/premiums/", view_func=UsersPremium.as_view("users_premiums")
    )
    app.register_blueprint(blueprint, url_prefix=basepath)
