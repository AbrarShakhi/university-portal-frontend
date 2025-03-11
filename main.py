import requests


def main():
    # PORT is 8000 might be different for.
    response = requests.get(f"http://localhost:8000/api/debug/login", cookies=None)
    students = response.json()
    # students is a list
    # every student has a disctionary
    for std in students:
        id = std["id"]
        first_name = std["first_name"]
        last_name = std["last_name"]
        print(id, first_name + " " + last_name)


if __name__ == "__main__":
    main()
