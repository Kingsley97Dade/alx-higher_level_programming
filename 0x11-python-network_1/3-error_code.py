#!/usr/bin/python3
"""Takes in a URL, sends a request to the URL and displays the body of the response (decoded in utf-8)."""
import urllib.request
import urllib.error
import sys

if len(sys.argv) != 2:
    print("Usage: python script.py <URL>")
    sys.exit(1)

url = sys.argv[1]

try:
    with urllib.request.urlopen(url) as response:
        content = response.read().decode('utf-8')

        print("Body response:")
        print("\t- type:", type(content))
        print("\t- content:", content)

except urllib.error.HTTPError as e:
    print("Error code:", e.code)
