#!/usr/bin/env python3

# === IMPORTS ===
# Utils
import os
import json


# === FUNCTIONS ===
def obtain_json_data():
    file_directory = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(file_directory, "users.json")
    with open(json_path, "r") as json_file:
        data = json.load(json_file)
    return data


# === CLASSES ===
class LiveEvent:

    def __init__(self, language, profileType, username, email, name, hire, totalFollowers,
                 createdAt, freePremium, isPremium, totalActivePosts, totalInactivePosts, country,
                 city, musicalGenres):
        self.language = language
        self.profileType = profileType
        self.username = username
        self.email = email
        self.name = name
        self.hire = hire
        self.totalFollowers = totalFollowers
        self.createdAt = createdAt
        self.freePremium = freePremium
        self.isPremium = isPremium
        self.totalActivePosts = totalActivePosts
        self.totalInactivePosts = totalInactivePosts
        self.country = country
        self.city = city
        self.musicalGenres = musicalGenres

    def __str__(self):
        return f"{self.profileType}: {self.hire}"


class LiveEvents:

    def __init__(self):
        data = obtain_json_data()
        self.events = [LiveEvent(
            item.get("language"), item.get("profileType"), item.get("username"),
            item.get("email"), item.get("name"), item.get("hire"),
            item.get("totalFollowers"), item.get("createdAt"),
            item.get("freePremium"), item.get("isPremium"), item.get("totalActivePosts"),
            item.get("totalInactivePosts"), item.get("country"), item.get("city"),
            item.get("musicalGenres")) for item in data
        ]

    # Function to get the top N objects based on a specified field
    def get_top_n(objects, field, n):
        # Sort the objects based on the specified field in descending order
        sorted_objects = sorted(objects, key=lambda x: getattr(x, field), reverse=True)
        
        # Return the top N objects
        return sorted_objects[:n]

    def get_test(self):
        return self.events


if __name__=="__main__":
    events = LiveEvents().get_test()
    print(events)
