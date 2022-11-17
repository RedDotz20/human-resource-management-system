# HRMS System - IM24 Final Project

### **_Human Resource Management_** System Using Node.js and MySQL

A project requirement in accordance with IM24 Subject

## Getting Started

Use `git clone` to clone this repository:

```
git clone https://github.com/RedDotz20/IM24_db_HRMS_System.git
```

or

Click `Clone or download` and `Download ZIP` to get this repo.

## Create / Select MySQL Database

```
CREATE DATABASE databasename;
USE databasename;
```

## Create employees Table

```
CREATE TABLE employees (
  id INT NOT NULL,
  firstName VARCHAR(45) NULL,
  lastName VARCHAR(45) NULL,
  age INT NULL,
  sex VARCHAR(1) NULL,
  phoneNumber INT NULL,
  PRIMARY KEY (id)
);
```

## Create `.env` File

```console
cd client
touch .env
```

```console
cd server
touch .env
```

#### .env file config

- **`Client`**
  - VITE*PORT=\_PORT*
- **`Server`**
  - PORT=_PORT_
  - HOST=_HOST_
  - USER=_USER_
  - PASSWORD=_PASSWORD_
  - DATABASE=_DATABASE_

## Install Dependencies

Open a terminal then go to `client` and `server` folder then run `npm install`

```console
npm install
```

## Run the Server

#### Development Server

```console
npm run dev
```

#### Preview Server

```console
npm run build
npm run preview
```
