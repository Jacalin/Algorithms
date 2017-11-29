'''
Implement a program that determines whether a provided credit card number is valid according to Luhn’s algorithm.

$ ./credit
Number: 378282246310005
Valid
'''

def luhns(cc):

    # split cc into single ints, excluding the last position.
    ccsplit = [int(i) for i in str(cc)[:-1]]

    # mulitply every second int by 2
    ccmult = [i * 2 for i in ccsplit[1::2]]

    ccstring = []

    # typecast ints into strings
    for i in ccmult:
        ccstring.append(str(i))

    # concat individual strings into one string
    ccconcat = ''.join(ccstring)

    # init count
    count = 0

    # cast str back into int at ith position. add to count.
    for i in ccconcat:
        count += int(i)

    # split cc into single ints, including the last position.
    ccsplit2 = [int(i) for i in str(cc)[::2]]

    # init final count
    finalcount = count

    #loop and add ith int to finalcount
    for i in ccsplit2:
        finalcount += i

    # Check for cc Validity
    if (len(str(cc)) == 13 or 15 or 16) and finalcount%10 == 0:
        print("Valid")
    else:
        print("Invalid")


luhns()