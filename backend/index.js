const express = require("express");
const app = express();
const cors = require('cors')
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

var admin = require("firebase-admin");

var serviceAccount = require("./config/friends-food-uv-firebase-adminsdk-l6pjo-62527fb0c0.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
// 
app.use(cors());
app.use(express.json())

dotenv.config({path: './config.env'});

const foodRoutes = require("./routes/foodRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const orderRoutes = require("./routes/orderRoutes");
const superAdmin = require("./routes/superAdminRoute");
const cartRoutes = require("./routes/cartRoutes");
const reservationRoutes = require("./routes/reservationRoutes")

// routes
app.use('/api/food', foodRoutes);
app.use('/api/review', reviewRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/superAdmin', superAdmin);
app.use('/api/cart', cartRoutes);
app.use('/api/reserv', reservationRoutes);

// Connect with database
connectDatabase();

app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`)
});