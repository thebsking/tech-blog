DROP DATABASE IF EXISTS blog_db;

CREATE DATABASE blog_db;

/*
Posts
    ID
    title
    contents
    author *user.ID
    date
    comments *comment.ID
Users
    ID
    name
    username
    password
Comments
    ID
    author *user.ID
    post *blog.ID
    content
    date
*/