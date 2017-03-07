# -*- coding: utf-8 -*-
"""
Created on Tue Feb 28 12:48:16 2017

@author: pconsidine
"""


def convert_to_celsius(fahrenheit):
    '''(number) -> number  **describes the types for input and output

    Return the number of Celsius degrees equivalent to fahrenheit degrees
    ** describes what the function does

    >>> convert_to_celsius(32)    ** examples of expected output
    0.0
    >>> convert_to_celsius(212)
    100.0
    '''
    return (fahrenheit - 32) * 5 / 9
