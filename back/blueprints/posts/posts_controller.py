#!/usr/bin/env python3

# === IMPORTS ===
# Utils
import os
import json


# === FUNCTIONS ===
def obtain_json_data():
    file_directory = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(file_directory, "posts.json")
    with open(json_path, "r") as json_file:
        data = json.load(json_file)
    return data


# === CLASSES ===
class Post:
    def __init__(
        self,
        type,
        id,
        url,
        user,
        totalLikes,
        isBlocked,
        isActive,
        totalViews,
        location,
        date,
    ):
        self.type = type
        self.oid = id
        self.url = url
        self.user = user
        self.totalLikes = totalLikes
        self.isBlocked = isBlocked
        self.isActive = isActive
        self.totalViews = totalViews
        self.location = location
        self.date = date

    def __str__(self):
        return f"{self.oid}: {self.user}"

    def to_dict(self):
        return {
            "type": self.type,
            "id": self.oid,
            "url": self.url,
            "user": self.user,
            "totalLikes": self.totalLikes,
            "isBlocked": self.isBlocked,
            "isActive": self.isActive,
            "totalViews": self.totalViews,
            "location": self.location,
            "date": self.date,
        }


class Posts:
    def __init__(self):
        data = obtain_json_data()
        self.posts = [
            Post(
                type = item.get("type"),
                id = item.get("id"),
                url = item.get("url"),
                user = item.get("user"),
                totalLikes = item.get("totalLikes"),
                isBlocked = item.get("isBlocked"),
                isActive = item.get("isActive"),
                totalViews = item.get("totalViews"),
                location = item.get("location"),
                date = item.get("date"),
            )
            for item in data
        ]

    def get_top_n_of_total_likes(self, n=None):
        posts_with_likes = [post for post in self.posts if post.totalLikes is not None]
        sorted_objects = sorted(
            posts_with_likes, key=lambda x: getattr(x, "totalLikes"), reverse=True
        )
        result = [post.to_dict() for post in sorted_objects]

        return result[:n]

    def get_top_n_of_total_views(self, n: int):
        posts_with_views = [post for post in self.posts if post.totalViews is not None]
        sorted_objects = sorted(
            posts_with_views, key=lambda x: getattr(x, "totalViews"), reverse=True
        )
        top_list = [post.to_dict() for post in sorted_objects[:n]]

        return top_list

    def get_top_n_of_writers(self, n: int):
        posts_with_user = [post for post in self.posts if post.totalViews is not None]
        result = {}
        for post in posts_with_user:
            if post.user in result:
                result[post.user] += 1
            else:
                result[post.user] = 1
        sorted_items = sorted(result.items(), key=lambda x: x[1], reverse=True)
        top_list = [{"id": key, "total": value} for key, value in sorted_items[:n]]

        return top_list
