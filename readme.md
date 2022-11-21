# Starting repository for group project.

First, make sure you have **nodejs** installed.
Then, run:

```bash
npm install
npm install -g nodemon
```

This will install **nodemon**, a program to run your code immediately after making changes to it.

Then run the **dev-quiet** script from vscode.

Start making changes to your *main.js* file.

# Exercise requirement:

Create a **Person** class that has a "name" attribute.
Create a Student class that extends the Person class. Student class has "year", "onEnroll" and "grade" attributes.
Give the student class default attributes: year is -1, onEnroll is an empty arrow function, grade is -1.
Student class has a getNotified(success) function that console.logs the student name, and then calls the onEnroll() function, if success is equal to true.

Make an **Academy** class that has a "name" attribute, and a "students" attribute. The name by default is "Default", and "students" is an empty array.

Add students in the Academy class using a function called **join(student)**, which adds the student to the students array and calls the ".getNotified(true)" function of the student.

Make a static function in Academy class called "**exam**" that gives all students in a class a random grade from 1 to 10.

Make a static function called "**graduate**" that returns all students that have a score of 6 or higher.

Make a static function called "**studentLevels**" that returns an array that looks like this: ["Failed", "Average", "Above Average", "Great"], where each string is decided if their grade is:
5 - > failed
6 - 7 -> Average
7 - 8 -> Above Average
8 - 10 -> Great.

Make a static function in the Academy class, called "**failedStudents**" that returns all students that failed.

# Create an academy.
Create an arrow function that prints "I'm happy to join!";
Create 10 students, for each student set their onEnroll function to that arrow function. Add students to the academy.

Run the exam() function on this academy, and print the successful students and the failed students.

Make a JSON object of the successful students, and print it.
