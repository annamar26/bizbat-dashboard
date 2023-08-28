#!/usr/bin/env python3

# === IMPORTS ===
# Utils
from flask import Blueprint

# BizBat Dashboard
from .posts_views import PostsTopViews


# === GLOBALS ===
blueprint = Blueprint('bp_posts', __name__)


# === FUNCTIONS ===
def bp_register_views(app, basepath='/posts'):
    blueprint.add_url_rule('/top_views/', view_func=PostsTopViews.as_view('logs_view'))

    app.register_blueprint(blueprint, url_prefix=basepath)
