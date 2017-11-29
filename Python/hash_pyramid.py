'''
Implement a program that prints out a double half-pyramid of a specified height, per the below.
The num must be between 1 - 23.

Height: 4
   #  #
  ##  ##
 ###  ###
####  ####

'''

def hash_pyramid():

    # request user input, must be num bewtween 1 - 23
    n = int(input("please type in a number between 1 - 23: "))

    # check if num is in bounds
    if n > 23 or n < 1:

        n = int(input("please type in a number between 1 - 23: "))

    # if num in bounds, loop through usernum(n), and print properly formated pyramid.
    else:

        for i in range(1,n+1):

            print (((" " * ((n - (i-1)) - 1)) + ("#" * i) ) , " " , ("#" * i) )

