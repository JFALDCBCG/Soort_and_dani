CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    -- Es lo mismo que hacer: id NOT NULL INT AUTOINCREMENT PRIMARY KEY
    name VARCHAR(100),
    course VARCHAR(5),
    TI INT,
    birth DATE,
    email VARCHAR(100)
);

INSERT INTO student (name, course, TI, birth, email) VALUES (
    'Agudelo Vasquez Diego Alejandro',
    '11A',
    1034400029,
    '2006-05-26',
    'agudelodiego10.a@gmail.com'
);
