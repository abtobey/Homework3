# Homework3

The javascript file attached will generate a random password using the following method:

1) Initialize 4 arrays that contain lowercase letters, uppercase letters, numbers and special characters

2) initialize a blank string for password and a blank array which will contain the characters that have been selected for use

3) Prompt the user to enter a number of characters and check they entered a number, and that number is between 8 and 128 (inclusive) and return an error message if not.

4) use confirm prompts to ask the user whether they want to use lowercase letters. If they selected yes, add the array of lowercase letters to the available arrays and add a lowercase letter to the password

5) repeat step 4 for uppercase letters, numbers and special characters

6) check that the user selected at least one character type. If not, return an error message. 

7) use a for loop where i starts at the current length of the password (I had it add one character of each selected type to ensure the password would contain all types selected)

8) inside the for loop, select an array at random, and then select a character from that array at randon

9) return the password