BEGIN;
    DROP TABLE IF EXISTS users,articles,bookings,services CASCADE;
CREATE TABLE services(
        service_id SERIAL PRIMARY KEY,
        service_name VARCHAR(100) NOT NULL,
        description TEXT,
        service_cost INTEGER NOT NULL DEFAULT 0,
        service_duration INTEGER NOT NULL DEFAULT 30
    );
    CREATE TABLE bookings(
        booking_id SERIAL PRIMARY KEY,
        booking_date VARCHAR(100) NOT NULL,
        booking_time VARCHAR(100) NOT NULL,
        customer_name VARCHAR(100) NOT NULL,
        customer_email VARCHAR(100),
        customer_phone VARCHAR(100) NOT NULL,
        service_id INTEGER DEFAULT 1,
        FOREIGN KEY (service_id) REFERENCES services(service_id)
        );

    


INSERT INTO services (service_name,description,service_cost,service_duration) VALUES ('Regular haircut','Regular haircut <br /> shampoo',40,30);
INSERT INTO bookings (booking_date,booking_time,customer_name,customer_phone,service_id) VALUES ('20191124','0900','Itay','0544791675',1);

COMMIT;