#!/usr/bin/env python3

# === IMPORTS ===
# Utils
import os
import json


# === FUNCTIONS ===
def obtain_json_data():
    file_directory = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(file_directory, "live_events.json")
    with open(json_path, "r") as json_file:
        data = json.load(json_file)
    return data


# === CLASSES ===
class LiveEvent:
    def __init__(
        self, eventOwner, id, price, currency, artists, title, genres, location, date
    ):
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

    def to_dict_price_custom(self, field):
        return {"id": self.oid, "total": self.price[field]}


class LiveEvents:
    def __init__(self):
        data = obtain_json_data()
        self.events = [
            LiveEvent(
                eventOwner=item.get("eventOwner"),
                id=item.get("id"),
                price=item.get("price"),
                currency=item.get("currency"),
                artists=item.get("artists"),
                title=item.get("title"),
                genres=item.get("genres"),
                location=item.get("location"),
                date=item.get("date"),
            )
            for item in data
        ]

    def get_top_n_more_expensive(self, n):
        events_with_max_price = [
            event for event in self.events if event.price and event.price.get("to")
        ]
        sorted_objects = sorted(
            events_with_max_price, key=lambda x: x.price["to"], reverse=True
        )
        top_list = [event.to_dict_price_custom("to") for event in sorted_objects[:n]]

        return top_list

    def get_top_n_cheaper(self, n):
        events_with_max_price = [
            event for event in self.events if event.price and event.price.get("from")
        ]
        sorted_objects = sorted(events_with_max_price, key=lambda x: x.price["from"])
        top_list = [event.to_dict_price_custom("from") for event in sorted_objects[:n]]

        return top_list
