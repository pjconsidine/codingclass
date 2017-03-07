# -*- coding: utf-8 -*-
import math


def area(base, height):
    ''' (number, number) -> number

    returns the area of a triangle with given base and height
    '''
    return base * height / 2


def perimeter(side1, side2, side3):
    '''(number, number, number) -> number

    Returns the perimeter of a triangle with sides of length side1, side2, and
    side3.'''
    return side1 + side2 + side3


def semiperimeter(side1, side2, side3):
    '''(number, number, number) -> number

    Returns the semiperimeter of a triangle with sides of length side1, side2,
    and side3.'''

    return perimeter(side1, side2, side3) / 2


def convert_to_minutes(num_hours):
    '''(int) -> int
    Return the number of minutes in num_hours hours.
    >>> convert_to_minutes(2)
    120
    '''
    result = num_hours * 60
    return result


def area_hero(s1, s2, s3):
    ''' (number, number, number) -> float

    Return the area of a triangle with sides of length s1, s2, and s3.
    '''
    semi = semiperimeter(s1, s2, s3)
    area = math.sqrt(semi * (semi - s1) * (semi - s2) * (semi - s3))
    return area
