**Project Name: Dockerized Full Stack Application**

---

## Overview

This repository contains a Dockerized full stack application comprising a backend, frontend, and Nginx as a reverse proxy server. The application is structured to enable easy setup and deployment using Docker Compose.

### Components:

1. **Nginx**: Acts as a reverse proxy server, directing incoming requests to the appropriate backend or frontend service.
2. **Backend**: Node.js application using Express.js framework. It communicates with the MSSQL database.
3. **Frontend**: React application that provides a user interface interacting with the backend APIs.

---

## Setup and Usage

Before running any commands, make sure to set up your environment variables. Take the provided `example.env` file and rename it to `.env`, then set the appropriate values for your environment.

To run the application in development mode, execute the following command in your terminal:

```bash
docker-compose --file docker-compose.dev.yml up --build
```

To run the application in production mode, execute the following command in your terminal:

```bash
docker-compose --file docker-compose.yml up --build
```

These commands will start all the services defined in the respective Docker Compose files, ensuring they are built and running.

---

## Project Structure

### `./backend`

Contains the source code for the backend Node.js application. It's built using Express.js framework and communicates with the MSSQL database.

### `./frontend`

Contains the source code for the frontend React application. It interacts with the backend APIs to fetch and display data.

### `./proxy/nginx.conf`

Nginx configuration file defining the reverse proxy settings. Adjustments can be made here as per specific requirements.

### `.env`

Environment variables file containing configuration settings for the application. Make sure to provide necessary variables like `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_HOST`, `DB_PORT`, `PORT`, and `BASE_URL`.

---

## Demo

A small demo showcasing a list of movies is included to demonstrate the APIs and database connection in action. Explore the provided APIs and the frontend interface to understand how the application functions.

### Demo Instructions:

1. Navigate to `http://localhost:$PORT` in your web browser to access the frontend interface.
2. Use the provided features in the frontend to interact with the backend APIs and view the demo movie list.

---

Feel free to reach out if you have any questions or need further assistance!

**Happy coding!**