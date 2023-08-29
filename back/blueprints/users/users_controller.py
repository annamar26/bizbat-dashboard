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
class User:
    def __init__(
        self,
        language,
        profileType,
        username,
        email,
        name,
        hire,
        totalFollowers,
        createdAt,
        freePremium,
        isPremium,
        totalActivePosts,
        totalInactivePosts,
        country,
        city,
        musicalGenres,
    ):
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

    def to_dict(self):
        return {
            "language": self.language,
            "profileType": self.profileType,
            "username": self.username,
            "email": self.email,
            "name": self.name,
            "hire": self.hire,
            "totalFollowers": self.totalFollowers,
            "createdAt": self.createdAt,
            "freePremium": self.freePremium,
            "isPremium": self.isPremium,
            "totalActivePosts": self.totalActivePosts,
            "totalInactivePosts": self.totalInactivePosts,
            "country": self.country,
            "city": self.city,
            "musicalGenres": self.musicalGenres
        }

    def to_dict_followers(self):
        return {
            "id": self.username,
            "total": self.totalFollowers,
        }


class Users:
    def __init__(self):
        data = obtain_json_data()
        self.users = [
            User(
                language=item.get("language"),
                profileType=item.get("profileType"),
                username=item.get("username"),
                email=item.get("email"),
                name=item.get("name"),
                hire=item.get("hire"),
                totalFollowers=item.get("totalFollowers"),
                createdAt=item.get("createdAt"),
                freePremium=item.get("freePremium"),
                isPremium=item.get("isPremium"),
                totalActivePosts=item.get("totalActivePosts"),
                totalInactivePosts=item.get("totalInactivePosts"),
                country=item.get("country"),
                city=item.get("city"),
                musicalGenres=item.get("musicalGenres"),
            )
            for item in data
        ]

    def get_top_n_of_total_followers(self, n: int):
        users_with_followers = [user for user in self.users if user.totalFollowers is not None]
        sorted_objects = sorted(
            users_with_followers, key=lambda x: getattr(x, "totalFollowers"), reverse=True
        )
        top_list = [post.to_dict_followers() for post in sorted_objects[:n]]

        return top_list

    def get_premiums(self):
        users_with_premium = len([user for user in self.users if user.isPremium])
        users_with_free_premium = len([user for user in self.users if user.freePremium])
        users_without_premium = len([user for user in self.users if not user.isPremium])
        result = [
            {
                "id": "users_with_premium",
                "total": users_with_premium
            },
            {
                "id": "users_with_free_premium",
                "total": users_with_free_premium
            },
            {
                "id": "users_without_premium",
                "total": users_without_premium
            },
        ]

        return result