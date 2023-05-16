db = db.getSiblingDB('StudentsDb');

// Check if the 'students' collection already exists
if (!db.getCollectionNames().includes('students')) {
    // If not, create the 'students' collection and insert some data
    db.createCollection('students');
    db.students.insertMany([
        {
            firstname: 'Brinsil',
            lastname: 'Elias',
            email: 'brinsilelias01@gmail.com',
            gender: 'MALE',
            _class: 'com.example.demo.Student'
        },
        {
            firstname: 'Aravind',
            lastname: 'Suresh',
            email: 'aravindsuresh@gmail.com',
            gender: 'MALE',
            _class: 'com.example.demo.Student'
        },
        {
            firstname: 'Hari',
            lastname: 'Shankar',
            email: 'harishankar@gmail.com',
            gender: 'MALE',
            _class: 'com.example.demo.Student'
        },
        {
            firstname: 'Shruthi',
            lastname: 'Ramesh',
            email: 'shruthuramesh@gmail.com',
            gender: 'FEMALE',
            _class: 'com.example.demo.Student'
        }
    ]);
}