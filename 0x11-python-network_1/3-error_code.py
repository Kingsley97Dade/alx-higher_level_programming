#!/usr/bin/python3
"""Takes in a URL, sends a request to the URL and displays the body of the response (decoded in utf-8)"""
import urllib.request
import urllib.error
import sys

if __name__ == '__main__':
    req = Request(argv[1])
    try:
        with urlopen(req) as response:
            r = response.read()
            print(r.decode('utf-8'))
    except HTTPError as e:
        print('Error code:', e.code)
