# Problem Description
 
 

You want to buy A candies, there are two candy stores in your town.
The stores sell candies in packets, first store sells B candies for C rupees and the other store sells D candies for E rupees.
Find the minimum cost to buy exactly A candies if you can buy any amount of packets from both stores.
If it is not possible to do so return -1.


Problem Constraints
1 <= A <= 105
1 <= B, C, D, E <= 104


Input Format
Given five input arguments A, B, C, D, E all of them are integers.


Output Format
Return an integer.


Example Input
Input 1:
A = 5
B = 3
C = 3
D = 3
E = 2
Input 2:

A = 7
B = 1
C = 1
D = 3
E = 2


Example Output
Output 1:
-1
Output 2:

5


Example Explanation
Explanation 1:
There no way to buy exactly 5 candies from stores.
Explanation 2:

We buy two packets from second store and 1 packet from first store.
11 + 23 = 7
11 + 22 = 5

