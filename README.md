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
  firstName VARCHAR(255) NULL,
  lastName VARCHAR(255) NULL,
  age INT NULL,
  sex VARCHAR(1) NULL,
  phoneNumber VARCHAR(255) NULL,
  PRIMARY KEY (id)
);
```

## Create `.env` File

```console
cd server
touch .env
```

#### .env file config

- HOST=_HOST_
- USER=_USER_
- PASSWORD=_PASSWORD_
- DATABASE=_DATABASE_

## Install Dependencies

```console
npm install
```

## Run the Server

#### Development Build

```console
npm run dev
```

#### Production Build

```console
npm run build
npm run preview
```
