import express from 'express';
import Menu from '../models/Menu.js';

const router = express.Router();

//Create a POST Request
router.post('/', async (req, res) => {
	try {
		const menu = await Menu.create(req.body);

		res.status(201).json({
			message: 'Menu created successfully',
			menu,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
});

//Create A GET Request
router.get('/', async (req, res) => {
	try {
		const menus = await Menu.find();

		res.status(200).json(menus);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

//Get One menu Item
router.get('/:id', async (req, res) => {
	try {
		const menu = await Menu.findById(req.params.id);

		if (!menu) {
			return res.status(404).json({
				message: 'Menu item not found',
			});
		}

		res.status(200).json(menu);
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

//PUT - Update
router.put('/:id', async (req, res) => {
	try {
		const menu = await Menu.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!menu) {
			return res.status(404).json({
				message: 'Menu item not found',
			});
		}

		res.status(200).json({
			message: 'Menu updated successfully',
			menu,
		});
	} catch (error) {
		res.status(400).json({
			message: error.message,
		});
	}
});

//Delete - DELETE
router.delete('/:id', async (req, res) => {
	try {
		const menu = await Menu.findByIdAndDelete(req.params.id);

		if (!menu) {
			return res.status(404).json({
				message: 'Menu item not found',
			});
		}

		res.status(200).json({
			message: 'Menu deleted successfully',
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

export default router;