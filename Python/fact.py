'''

Implement a program that prints the factorial of n.

'''


def fact(n):
    if n < 1:
        return 1
    else:
        return n * fact(n-1)

print(fact(3))
