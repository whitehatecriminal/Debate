CREATE TABLE if NOT exists users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users(id, username, email,  password_hash) values
    (8239690566, 'shubham', '23tec2cs274@vgu.ac.in', '1234');

    SELECT * FROM users;
