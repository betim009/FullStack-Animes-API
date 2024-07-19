DROP DATABASE IF EXISTS dbDevAnimes;

CREATE DATABASE dbDevAnimes;

USE dbDevAnimes;

CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE
    favorite_animes (
        user_id INT,
        anime_id VARCHAR(255),
        poster_url VARCHAR(255),
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id, anime_id),
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );