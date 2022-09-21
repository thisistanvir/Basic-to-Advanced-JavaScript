/**
 * JS Comparison Operators
 *
 * Comparison and Logical operators are used to test for true or false.
 */

/**
 * Given that x = 5, the table below explains the comparison operators:
 
 ==	equal to	
 x == 8	false	
 x == 5	true	
 x == "5"	true	

===	equal value and equal type	
 x === 5	true	
 x === "5"	false	

!=	not equal	
 x != 8	true	

!==	not equal value or not equal type	
 x !== 5	false	
 x !== "5"	true	
 x !== 8	true	

>	greater than	
 x > 8	false	

<	less than	
 x < 8	true	

>= greater than or equal to	
 x >= 8	false	

<=less than or equal to	
 x <= 8	true
 */

/**
 * Logical Operators
 *
 * Logical operators are used to determine the logic between variables or values.
 * Given that x = 6 and y = 3, the table below explains the logical operators:
 * 
 
&&	and	(x < 10 && y > 1) is true	
||	or	(x == 5 || y == 5) is false	
!	not	!(x == y) is true	
 */

/**
 * Conditional (Ternary) Operator
 *
 * JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
 *
 * variablename = (condition) ? value1:value2
 */
{
	let voteable = age < 18 ? "Too young" : "Old enough";
}
