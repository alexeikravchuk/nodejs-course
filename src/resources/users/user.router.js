const { OK, NO_CONTENT } = require('http-status-codes');
const router = require('express').Router();
const User = require('./user.model');
const userService = require('./user.service');
const wrapAsync = require('../../utils/wrapAsync');

router.get(
  '/',
  wrapAsync(async (req, res) => {
    const users = await userService.getAll();
    await res.status(OK).json(users.map(User.toResponse));
  })
);

router.get(
  '/:id',
  wrapAsync(async (req, res) => {
    const userEntity = await userService.get(req.params.id);
    res.status(OK).send(User.toResponse(userEntity));
  })
);

router.delete(
  '/:id',
  wrapAsync(async (req, res) => {
    await userService.remove(req.params.id);
    res.sendStatus(NO_CONTENT);
  })
);

router.post(
  '/',
  wrapAsync(async (req, res) => {
    const userEntity = await userService.save(User.fromRequest(req.body));
    res.status(OK).send(User.toResponse(userEntity));
  })
);

router.put(
  '/:id',
  wrapAsync(async (req, res) => {
    const userEntity = await userService.update(
      req.params.id,
      User.fromRequest(req.body)
    );
    res.status(OK).send(User.toResponse(userEntity));
  })
);

module.exports = router;
