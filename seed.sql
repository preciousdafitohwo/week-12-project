--- seed document for createing and populating our StayActive Daatabase tables ---

CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    clerk_id TEXT,
    username TEXT,
    age INT,
    goals TEXT
);

CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  profile_id INT REFERENCES profiles(id),
  name TEXT,
  email TEXT,
  date DATE,
  time TIME,
  trainer TEXT
  
);

CREATE TABLE IF NOT EXISTS enquiries (
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  subject TEXT,
  message TEXT
);
