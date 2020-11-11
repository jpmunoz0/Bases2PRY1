const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

const app = express();

// Middleware
app.use(cors());

app.use(
	express.urlencoded({
		extended: true
	})
);
app.use(express.json());

mongoose.connect(
	process.env.DB_CONNECTION,
	{ useUnifiedTopology: true, useNewUrlParser: true },
	() => {
		console.log('connected to DB');
	}
);

// Routes imports
const userRoute = require('./Routes/users');
const schemeRoute = require('./Routes/schemes');
const approvalRouteRoute = require('./Routes/approvalRoutes');

app.use('/users', userRoute);
app.use('/schemes', schemeRoute);
app.use('/approvalRoutes', approvalRouteRoute);

// Server start
app.listen(3000, () => console.log('Server started on port 3000'));
