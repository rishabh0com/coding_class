def min_moves(a, b):
    # Calculate the absolute difference
    diff = abs(b - a)
    
    # Calculate the number of moves
    moves = diff // 10  # Number of full moves of 10
    if diff % 10 != 0:  # If there's a remainder, we need one more move
        moves += 1
    
    return moves

# Input and Output handling
# t = input("enter a and b : ").split(" ");
# a = int(t[0])
# b = int(t[1])# Number of test cases
# print(min_moves(a, b))
print(min_moves(13, 42))

""" 
Approach:
Difference Calculation: The first step is to calculate the absolute difference between a and b. This will tell us how far a is from b.

diff = abs(b - a)

Number of Moves: Since we can use any integer from 1 to 10 in each move, the optimal strategy is to use the largest possible value (i.e., 10) as often as possible to minimize the number of moves.

The number of moves can be calculated by:

Dividing the difference by 10 to get the number of times we can apply the move +10 or -10.
If there's a remainder after dividing by 10, we'll need an additional move to cover the remainder.
Formula:
If diff % 10 == 0, then the exact number of moves is diff // 10.
If diff % 10 != 0, then we need one more move to cover the remainder, so the total moves are (diff // 10) + 1.

For each test case, the difference between a and b is calculated.
The number of moves is determined based on the difference.
The result is printed for each test case.

Explanation of the Example:
The difference between 13 and 42 is |42 - 13| = 29.
We can move by 10 three times (10 + 10 + 9) to get from 13 to 42, so it requires 3 moves.
Time Complexity:
The time complexity of this approach is O(1) per test case because we're performing constant-time arithmetic operations.
"""
