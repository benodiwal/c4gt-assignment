# C4GT-Assignment

# Employee Query System

## Project Overview
This project is a full-stack application designed to track employee attendance data. It features a frontend where users can input natural language queries to find out about employee attendance within specific time frames. The backend interprets these queries into SQL, executes them against a Postgres database, and returns the results to the frontend.

## Features
- **Database**: Utilizes Postgres to store employee data such as name, email, and check-in/check-out times.
- **Query Interface**: A user-friendly frontend where arbitrary queries can be entered (e.g., "Tell me which employees were online between 10 AM and 12 PM").
- **NLP Interpretation**: A Python-based NLP parser that interprets user input and generates corresponding SQL queries (only SELECT queries for now).
- **Results Display**: The frontend displays the query results dynamically.

## Technologies Used
- **Frontend**: React with Next.js for server-side rendering.
- **Backend**: Node.js with Express framework, enhanced with TypeScript for type safety.
- **Database**: PostgreSQL, managed with Prisma ORM for efficient database interactions.
- **NLP Service**: A custom Python service that parses natural language to SQL.

## Why This Tech Stack?

### React and Next.js
- **React** is chosen for its robust ecosystem and its ability to efficiently handle dynamic content updates, which is crucial for displaying real-time query results. Its component-based architecture makes it scalable and maintainable.
- **Next.js** enhances React by providing server-side rendering, which improves the initial load time and SEO friendliness of the application. This framework also simplifies routing and page composition, which are essential for the modular design of our frontend.

### Node.js and Express
- **Node.js** offers a high-performance, non-blocking I/O model that is ideal for handling data-intensive real-time applications that operate across distributed devices. It's also beneficial to use JavaScript across both the frontend and backend, reducing context switching and increasing development efficiency.
- **Express** framework simplifies the setup of our server by providing a lightweight layer to handle our server requests easily. It is not only minimal and flexible but also robust enough to manage our application’s routes and APIs.

### TypeScript
- **TypeScript** is used to bring strong typing to our JavaScript code, reducing the likelihood of runtime errors and enhancing code quality and maintainability. It provides powerful tools for large applications and integrates well with both Node.js and React.

### PostgreSQL and Prisma
- **PostgreSQL** is a powerful, open-source object-relational database system known for its proven architecture, reliability, data integrity, robust feature set, and extensibility. This makes it an ideal choice for applications requiring complex queries and vast amounts of data.
- **Prisma** serves as the ORM (Object Relational Mapping) layer that facilitates easy and secure database operations. It provides a clean and straightforward way to communicate with the PostgreSQL database, ensuring that database queries are efficient and scalable.

### Python
- **Python** is utilized for its simplicity and the powerful libraries it supports for natural language processing tasks. It's instrumental in developing the NLP service that parses user queries into SQL. Python's extensive support for AI and NLP with libraries like NLTK makes it the best fit for this part of the project.

### Docker
- **Docker** is used to containerize our application, ensuring consistency across various development and production environments. This aids in eliminating the "it works on my machine" syndrome, making our application easy to deploy and scale across any platform.

This tech stack not only ensures high performance and scalability but also enhances the development experience by leveraging modern tools that streamline the development process from coding to deployment.
