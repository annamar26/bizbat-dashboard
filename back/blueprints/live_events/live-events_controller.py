#!/usr/bin/env python3

# === IMPORTS ===
# Utils
import os
import json


# === FUNCTIONS ===
def obtain_json_data():
    file_directory = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(file_directory, "live-events.json")
    with open(json_path, 'r') as json_file:
        data = json.load(json_file)
    return data


# === CLASSES ===
class LiveEvent:

    def __init__(self, eventOwner, id, price, currency, artists, title, genres, location, date):
        self.eventOwner = eventOwner
        self.oid = id
        self.price = price
        self.currency = currency
        self.artists = artists
        self.title = title
        self.genres = genres
        self.location = location
        self.date = date

    def __str__(self):
        return f"{self.oid}: {self.title}"


class LiveEvents:

    def __init__(self):
        data = obtain_json_data()
        self.events = [LiveEvent(
            item.get('eventOwner'), item.get('id'), item.get('price'),
            item.get('currency'), item.get('artists'), item.get('title'),
            item.get('genres'), item.get('location'), item.get('date')) for item in data
        ]


    # Function to get the top N objects based on a specified field
    def get_top_n(objects, field, n):
        # Sort the objects based on the specified field in descending order
        sorted_objects = sorted(objects, key=lambda x: getattr(x, field), reverse=True)
        
        # Return the top N objects
        return sorted_objects[:n]
