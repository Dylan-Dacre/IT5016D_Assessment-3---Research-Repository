# Cat-Couture

## Introduction

This project is a website for a fictional cat clothing company called Cat Couture. The website is a dynamic website that uses HTML, CSS, JavaScript and a Postgres SQL database. It was the final project I developed at Developers Institute.

The backend uses a repository design pattern to access the database. The backend is written in Node.js and uses Express.js as the web framework and PostgreSQL as the database.

The frontend uses HTML, CSS and JavaScript. The frontend uses React.js as the web framework.

This project was the first time I experimented with creating button animations which was a lot of fun. I used CSS to create the animations. I also used CSS to create the responsive design of the website. I also experimented with using absolute positioning to position elements on the page outside their containing div.

## Design Principles

- RDP

This project implements the RDP principle by separating the frontend and backend into their own folders. The frontend is in the client folder and the backend is in the server folder.

Furthermore the backend functions for accessing the database are separated into their own files. Having a repository for database queries and a router for the API endpoints. This means that if the database needs to be changed then only the repository needs to be changed. The API endpoints will not need to be changed.

- DRY

The project implements the DRY principle by creating functions for repeated code. For example, when transitioning between pages a function is called to scroll back to the top of the page. This function is called every time the user navigates to a new page. Similarly, the page controls are contained in their own components and imported into the pages that need them.

- Clean Code > Clever Code

This project implements the Clean Code > Clever Code principle by keeping the code simple and easy to understand. There is no unnecessary code. Functions are kept short and only do one thing. The code is also well commented.

## Viewing the Project

**To run the app:**

1. Clone the repository
2. `docker-compose up --build`
