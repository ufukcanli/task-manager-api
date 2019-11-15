const express = require('express');

const router = express.Router();

const taskController = require('../controllers/task');

const auth = require('../middlewares/auth');

router.post('/', auth, taskController.postCreateTask);

// GET /tasks?completed=false
// GET /tasks?limit=10&skip=20
// GET /tasks?sortBy=createdAt:desc
router.get('/', auth, taskController.getReadAllTasks);

router.get('/:id', auth, taskController.getReadTask);

router.patch('/:id', auth, taskController.patchUpdateTask);

router.delete('/:id', auth, taskController.deleteTask);

module.exports = router;
