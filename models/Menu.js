import mongoose from 'mongoose';

const menuSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},

		description: {
			type: String,
			required: true,
		},

		price: {
			type: Number,
			required: true,
			min: 0,
		},

		category: {
			type: String,
			required: true,
			enum: ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Drinks'],
		},

		isAvailable: {
			type: Boolean,
			default: true,
		},
	},
	{
		timestamps: true,
	},
);

const Menu = mongoose.model('Menu', menuSchema);

export default Menu;
