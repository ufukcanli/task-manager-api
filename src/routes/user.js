const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

const auth = require('../middlewares/auth');
const upload = require('../middlewares/upload');
const error = require('../middlewares/error');

router.post('/', userController.postSignupUser);

router.post('/login', userController.postLoginUser);

router.post('/logout', auth, userController.postLogoutUser);

router.post('/logoutAll', auth, userController.postLogoutAll);

router.get('/me', auth, userController.getReadProfile);

router.patch('/me', auth, userController.patchUpdateUser);

router.delete('/me', auth, userController.deleteUser);

router.post(
  '/me/avatar',
  auth,
  upload.single('avatar'),
  userController.uploadAvatar,
  error
);

router.delete('/me/avatar', auth, userController.deleteAvatar);

router.get('/:id/avatar', userController.getAvatar);

module.exports = router;
