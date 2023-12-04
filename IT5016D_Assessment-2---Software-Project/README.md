# IT5016D_Assessment 2 - Software Project

## Introduction

This project is a basic helpdesk application developed using Python. The application was made for the purpose of IT5016D Assessment 2 - Software Project. This was my first time using Python and was how I learned the basics of the language.

I had fun creating this project and learned a lot about Python. I enjoyed adding colour to the text with ANSI escape codes to add some style to the application.

When I first created the project it was very basic and after having it working correctly I kept going back and adding more input validation and error handling to make the application more robust. I maybe did that a few to many times but I enjoyed the process of making the application more robust and learning more about Python.

## Design Principles

- DRY

I applied the DRY principle to my code by creating functions for repeated code. For example, I created a function to validate the user input for the menu options. This function is called every time the user is asked to enter a menu option. This function checks if the user input is a number and if it is within the range of the menu options. If the user input is not a number or is not within the range of the menu options then the user is asked to enter a valid menu option.

- Avoid Premature Optimization

I applied the Avoid Premature Optimization principle to my code by not trying to optimize the code before it was working correctly. I made sure the code was working correctly before I started to optimize it. I did this by using the DRY principle and creating functions for repeated code. I also made sure to use the correct data types for the variables and functions.

- Refactor, Refactor, Refactor

I applied the Refactor, Refactor, Refactor principle to my code by going back and refactoring the code after I had it working correctly. I did this by adding more input validation and error handling to make the application more robust. I also added more comments to the code to make it easier to read and understand.

- Single Responsibility Principle

I applied the Single Responsibility Principle to my code by making sure each function only had one responsibility. Each menu option has it's own function and each function only does what it is supposed to do. For example, the function for the menu option to add a ticket only adds a ticket and does not do anything else.

## Viewing the Project

It's recommended to use an application that supports ANSI escape codes othwrwise the text formatting will not be displayed correctly. The application has been tested using Python 3.11.3 in the following applications:

- PyCharm 2023.2.3
- Visual Studio Code 1.84.2

Download the repository, open Pycharm or Visual Studio Code, navigate to the project folder, and open the Software_Project.py file. Run the file to start the application.
