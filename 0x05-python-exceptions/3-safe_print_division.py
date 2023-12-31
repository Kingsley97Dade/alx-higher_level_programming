#!/usr/bin/python3

def safe_print_division(a, b):
    """divides two integers and prints the result"""
    div = None
    try:
        div = a / b
    except Exception:
        return
    finally:
        if div is not None:
            print('Inside result: {:.1f}'.format(div))
        else:
            print('Inside result: ', div)
    return div
