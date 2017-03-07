def get_length(dna):
    """ (str) -> int

    Return the length of the DNA sequence dna.

    >>> get_length('ATCGAT')
    6
    >>> get_length('ATCG')
    4
    """
    return len(dna)


def is_longer(dna1, dna2):
    """ (str, str) -> bool

    Return True if and only if DNA sequence dna1 is longer than DNA sequence
    dna2.

    >>> is_longer('ATCG', 'AT')
    True
    >>> is_longer('ATCG', 'ATCGGA')
    False
    """
    return len(dna1) > len(dna2)


def count_nucleotides(dna, nucleotide):
    """ (str, str) -> int

    Return the number of occurrences of nucleotide in the DNA sequence dna.

    >>> count_nucleotides('ATCGGC', 'G')
    2
    >>> count_nucleotides('ATCTA', 'G')
    0
    """
    return dna.count(nucleotide)


def contains_sequence(dna1, dna2):
    """ (str, str) -> bool

    Return True if and only if DNA sequence dna2 occurs in the DNA sequence
    dna1.

    >>> contains_sequence('ATCGGC', 'GG')
    True
    >>> contains_sequence('ATCGGC', 'GT')
    False

    """
    return dna2 in dna1


def is_valid_sequence(dna1):
    '''(str) -> bool

    Returns true if dna1 contains only valid nucleotides.

    >>> is_valid_sequence('ATCGAG')
    True
    >>> is_valid_sequence('ATXXX')
    False
    >>> is_valid_sequence('agct')
    False

    '''
    if len(dna1) < 1:
        return True
    else:
        for char in dna1:
            if char not in 'ATCG':
                return False

    return True


def insert_sequence(dna1, dna2, position):
    '''(str, str, int) -> str

    Inserts dna2 at index position of dna1. If either dna1 or dna2 are
    invalid sequences, returns 'Invalid sequence'.

    >>> insert_sequence('CCGG', 'AT', 1)
    'CATCGG'
    >>> insert_sequence('CCGG','XX', 1)
    'Invalid sequence'
    >>> insert_sequence('CCFFGG', 'AT', 0)
    'Invalid sequence'
    '''
    if is_valid_sequence(dna1) and is_valid_sequence(dna2):
        return dna1[:position] + dna2 + dna1[position:]
    else:
        return 'Invalid sequence'


def get_complement(nucleotide1):
    '''(str) -> str

    Returns the complementary nucleotide for nucleotide1.

    >>> get_complement('A')
    'T'
    >>> get_complement('C')
    'G'
    '''
    complement = ''

    if nucleotide1 == 'A':
        complement = 'T'
    elif nucleotide1 == 'T':
        complement = 'A'
    elif nucleotide1 == 'C':
        complement = 'G'
    elif nucleotide1 == 'G':
        complement = 'C'
    else:
        return False

    return complement


def get_complementary_sequence(dna1):
    '''(str) -> str

    Returns the compementary DNA sequence for dna1 if dna1 is a valid
    sequence. Otherwise, returns 'Invalid sequence'.

    >>> get_complementary_sequence('CCGATT')
    'GGCTAA'
    >>> get_complementary_sequence('CCXXTT')
    'Invalid sequence'
    >>> get_complementary_sequence('')
    ''
    '''
    complementary_seq = ''

    if len(dna1) < 1:
        return ''
    elif is_valid_sequence(dna1):
        for char in dna1:
            complementary_seq = complementary_seq + get_complement(char)
    else:
        return 'Invalid sequence'

    return complementary_seq
