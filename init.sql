create table users
(
    id     integer primary key,
    username varchar not null unique,
    email  varchar not null unique,
    message  varchar not null unique
);