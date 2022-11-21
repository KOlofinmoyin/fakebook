-- Create users table
CREATE TABLE users (
id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
email VARCHAR(100),
telephone VARCHAR(20),
firstname VARCHAR(100),
lastname VARCHAR(150),
password VARCHAR(200),
UNIQUE(email)
);

INSERT INTO users (id,email,telephone,firstname,lastname, password) VALUES ('joe@example.com', '07950443335', 'Joe', 'Folawiyo', 'pa55w0rd');