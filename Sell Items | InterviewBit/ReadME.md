Problem Description

A shopkeeper sells daily A units of item and his shop remains closed on weekends(Saturday and Sunday).

Find the number of weeks it will take to sell B units of item.

Assume first day to be Monday and return the ceil value of number of weeks. For eg: If it takes 9 days to sell all units then return 2 weeks.



Problem Constraints
1 <= A, B <= 109



Input Format
First argument is an integer A dentoing the daily units sold by the shopkeeper.

Second argument is an integer B denoting the total units of item.



Output Format
Return an integer denoting the required numbers of weeks.



Example Input
Input 1:

 A = 3
 B = 17
Input 2:

 A = 1
 B = 1


Example Output
Output 1:

 2
Output 2:

 1


Example Explanation
Explanation 1:

 On the first 5 days, shopkeeper can sell 15 units. On next 2 days shop remains closed(weekends). 
 On 8th day sold remaining 2 units. Number of weeks will be 2.
Explanation 2:

 On 1st day, shopkeeper can sell 1 unit. Nothing is remaining. Answer will be 1 week.
