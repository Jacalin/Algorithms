'''

Given the string, check if it is a palindrome.
A palindrome is a string that reads the same left-to-right and right-to-left.

'''

def checkPalindrome(inputString):

    # list comprehension that creates lists for the inputString both forward and backwards.
    f = [i for i in inputString]
    b = [i for i in inputString[::-1]]

    #init count
    count = 0

    #loop through both lists, and check if they are they are same char. If same char add 1 to count.
    for f,b in zip(f,b):
        if f == b:
            count +=1
        else:
            continue

    # chck if the length of input string matches the count. If it's equal , return True.
    if count == len(inputString):
        return True
    else:
        return False




