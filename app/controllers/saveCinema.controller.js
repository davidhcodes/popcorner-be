const { db } = require("../../firebase");
const { ref, set } = require("firebase/database");
const { getCinemas } = require("./getCinemas.controller");
const { initializeApp } = require("firebase/app");
const { getDatabase } = require("firebase/database");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};
const app = initializeApp(firebaseConfig);


const saveCinemasToFirebase = async (location, radius) => {
    const cinemas = await getCinemas(location, radius);
    const cinemaCollection = ref(db, "cinemas");

    cinemas.forEach(async (cinema) => {
    try {
        await set(cinemaCollection, {
        name: cinema.name,
        address: cinema.vicinity,
        location: cinema.geometry.location,
        place_id: cinema.place_id,
    });
        console.log(`Cinema ${cinema.name} added successfully!`);
    } catch (error) {
        console.error("Error adding cinema: ", error);
    }
});
};

module.exports = saveCinemasToFirebase
