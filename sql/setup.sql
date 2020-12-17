DROP TABLE IF EXISTS books;

CREATE TABLE books (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    cover_image TEXT,
    rating TEXT,
    price TEXT,
    in_stock BOOLEAN
);
