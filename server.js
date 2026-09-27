import express from 'express';
import connectDB from './config/db.js';
import menuRoutes from './routes/menuRoutes.js';

const app = express();

const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Database
await connectDB();

// Routes
app.use('/api/menu', menuRoutes);

// Default route
app.get('/', (req, res) => {
	res.json({
		message: 'Menu API is running',
	});
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
