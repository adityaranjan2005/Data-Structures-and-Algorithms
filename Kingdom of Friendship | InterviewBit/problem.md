Problem Description
 
 

In the Kingdom of friendship, There live N people, Each person is a friend with every other person.
The Queen wanted to know the best friend of each person
(Note that best-friendship is considered a uni-directional relationship here).
So, She conducted a survey where each person i replied A[i] as his/her best friend.

The Queen was shocked to see there were people who were not the best friend of their best friends.
The Queen thinks all pair who have each other as the best friend, should be given a prize.
Can you tell us how many gifts the queen will distribute?


Note: If a person is best friend of himself he/she should not be awarded.



**Problem Constraints**
1 <= N <= 200000
1 <= A[i] <= N


**Input Format**
First and only argument contains a single integer array A


**Output Format**
Return a single integer denoting number of prize distributed.


**Example Input**
Input 1:
    A = [3, 1, 2]
Input 2: 

    A = [2, 1, 1]


**Example Output**
Output 1:
    0
Output 2:

    1


**Example Explanation**
Explanation 1:
    In this example there is a triangle of friendship and thus no prize is distributed.
                    1  --> 3
                    ^     /
                     \   /
                      2 <
Explanation 2:

    Since 1 think 2 is his best friend and 2 think 1 is best friend. the pair is given a single prize.
