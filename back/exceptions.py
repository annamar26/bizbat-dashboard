#!/usr/bin/python3

# === IMPORTS ===
import logging
from flask import abort, request

# === CLASSES ===
class InvalidDataException(Exception):
    pass


class ExceptionHandler():

    def __init__(self):
        self.logger = logging.getLogger(type(self).__name__)

    def handle(self, ex):
        self.logger.debug(ex)

        if type(ex) is InvalidDataException:
            abort(400, description=str(ex))

        abort(500, description=str(ex))