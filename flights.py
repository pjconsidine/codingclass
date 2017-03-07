# -*- coding: utf-8 -*-
"""
Created on Wed Mar  1 15:10:55 2017

@author: pconsidine
"""


def report_status(scheduled_time, estimated_time):
    ''' (number, number) -> number

    Returns a status message (on time, early, delayed) based on the difference
    between scheduled time and estimated time of arrival.

    Precondition: 0.0 <= scheduled_time, estimated_time < 24

    >>> report_status(14.3, 14.3)
    'on time'
    >>> report_status(14.3, 11.5)
    'early'
    >>> report_status(14.3, 15.3)
    'delayed'
    '''

    if scheduled_time == estimated_time:
        return 'on time'
    elif scheduled_time > estimated_time:
        return 'early'
    else:
        return 'delayed'
