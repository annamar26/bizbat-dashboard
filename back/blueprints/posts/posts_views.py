#!/usr/bin/env python3

# === IMPORTS ===
# Utils
import logging
from flask import request, make_response
from flask.views import MethodView

# BizBat Dashboard
from blueprints.posts.posts_controller import Posts
from exceptions import ExceptionHandler, InvalidDataException
from utils import convert_data


# === CLASSES ===
# /top-views/
class PostsTopViews(MethodView):
    def __init__(self):
        super().__init__()
        self.logger = logging.getLogger(type(self).__name__)

    def get(self):
        # Grab the logs and push to a controller.
        controller = Posts()
        try:
            items = int(request.args.get("items")) if request.args.get("items") else 10
            users = controller.get_top_n_of_total_views(items)
            response = make_response(convert_data(users, "application/json"), 200)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except ValueError as ex:
            eh = ExceptionHandler()
            return eh.handle(
                InvalidDataException("'items' parameter must be an integer.")
            )
        except Exception as ex:
            eh = ExceptionHandler()
            return eh.handle(ex)


# /top-likes/
class PostsTopLikes(MethodView):
    def __init__(self):
        super().__init__()
        self.logger = logging.getLogger(type(self).__name__)

    def get(self):
        # Grab the logs and push to a controller.
        controller = Posts()
        try:
            items = int(request.args.get("items")) if request.args.get("items") else 10
            users = controller.get_top_n_of_total_likes(items)
            response = make_response(convert_data(users, "application/json"), 200)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except ValueError as ex:
            eh = ExceptionHandler()
            return eh.handle(
                InvalidDataException("'items' parameter must be an integer.")
            )
        except Exception as ex:
            eh = ExceptionHandler()
            return eh.handle(ex)


# /top-writers/
class PostsTopWriters(MethodView):
    def __init__(self):
        super().__init__()
        self.logger = logging.getLogger(type(self).__name__)

    def get(self):
        # Grab the logs and push to a controller.
        controller = Posts()
        try:
            items = int(request.args.get("items")) if request.args.get("items") else 10
            users = controller.get_top_n_of_writers(items)
            response = make_response(convert_data(users, "application/json"), 200)
            response.headers.add('Access-Control-Allow-Origin', '*')
            return response
        except ValueError as ex:
            eh = ExceptionHandler()
            return eh.handle(
                InvalidDataException("'items' parameter must be an integer.")
            )
        except Exception as ex:
            eh = ExceptionHandler()
            return eh.handle(ex)
