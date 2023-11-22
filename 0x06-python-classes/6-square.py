#!/usr/bin/python3

'''A Square class'''


class Square:
    '''Represents a Square'''

    '''constructor for square class'''
    def __init__(self, size=0, position=(0, 0)):
        if not isinstance(size, int):
            raise TypeError('size must be an integer')
        if (size < 0):
            raise ValueError('size must be >= 0')
        self.__size = size
        self.__position = position
