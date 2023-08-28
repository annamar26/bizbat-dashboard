#!/usr/bin/env python3

# === IMPORTS ===
# Utils
from flask import Blueprint

# BizBat Dashboard
from .posts_views import PostsTopViews, PostsTopLikes, PostsTopWriters


# === GLOBALS ===
blueprint = Blueprint("bp_posts", __name__)


# === FUNCTIONS ===
def bp_register_views(app, basepath="/posts"):
    blueprint.add_url_rule(
        "/top_views/", view_func=PostsTopViews.as_view("posts_top_views")
    )
    blueprint.add_url_rule(
        "/top_likes/", view_func=PostsTopLikes.as_view("posts_top_likes")
    )
    blueprint.add_url_rule(
        "/top_writers/", view_func=PostsTopWriters.as_view("posts_top_writers")
    )
    app.register_blueprint(blueprint, url_prefix=basepath)
