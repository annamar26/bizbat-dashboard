# === IMPORTS ===
import os
import json
from enum import Enum
import firebase_admin
from firebase_admin import credentials as firebase_credentials, firestore


# === GLOBALS ===
class RelevantFields(Enum):
    def __init__(self, collection_name, fields):
        self.collection_name = collection_name
        self.fields = fields


class Collections(RelevantFields):
    users = (
        "users",
        (
            "language",
            "profileType",
            "username",
            "email",
            "name",
            "hire",
            "totalFollowers",
            "createdAt",
            "freePremium",
            "isPremium",
            "totalActivePosts",
            "totalInactivePosts",
            "country",
            "city",
            "musicalGenres",
        ),
    )
    posts = (
        "posts",
        (
            "type",
            "id",
            "url",
            "user",
            "totalLikes",
            "isBlocked",
            "isActive",
            "totalViews",
            "location",
            "createdAt",
        ),
    )
    live_events = (
        "live-events",
        (
            "eventOwner",
            "id",
            "price",
            "currency",
            "artists",
            "title",
            "genres",
            "location",
            "date",
        ),
    )

    @staticmethod
    def get_collection_names():
        collection_names = []
        for collection in Collections:
            collection_names.append(collection.collection_name)

        return collection_names

    @staticmethod
    def get_relevant_fields(collection_name):
        for collection in Collections:
            if collection.collection_name == collection_name:
                return collection.fields

        raise ValueError("Collection {} not found on ENUM".format(collection_name))


# === FUNCTIONS ===
def get_credentials_path():
    script_directory = os.path.dirname(os.path.abspath(__file__))
    credentials_path = os.path.join(
        script_directory, "credentials/service_account.json"
    )

    return credentials_path


def get_firestore_client():
    credentials_path = get_credentials_path()
    credentials = firebase_credentials.Certificate(credentials_path)
    firebase_admin.initialize_app(credentials)
    return firestore.client()


def write_data_from_collection(db, collection_name, file_name):
    collection_ref = db.collection(collection_name)
    documents = collection_ref.stream()  # Get all documents in the collection

    data = []
    for doc in documents:
        document = doc.to_dict()
        result = {}
        for key in document:
            if key in Collections.get_relevant_fields(collection_name):
                result[key] = document[key]
        data.append(result)  # Convert each document to a dictionary

    file_name = f"blueprints/{collection_name}/{file_name}"
    with open(file_name, "w") as json_file:
        json.dump(data, json_file, indent=4, default=str)


def main():
    db = get_firestore_client()
    for collection_name in Collections.get_collection_names():
        file_name = collection_name + ".json"
        write_data_from_collection(db, collection_name, file_name)


# === MAIN ===
if __name__ == "__main__":
    main()
