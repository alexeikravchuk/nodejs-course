const { OK, NO_CONTENT } = require('http-status-codes');
const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');
const wrapAsync = require('../../utils/wrapAsync');

router.get(
  '/',
  wrapAsync(async (req, res) => {
    console.log('hi');
    const boards = await boardService.getAll();
    await res.status(OK).json(boards);
  })
);

router.get(
  '/:id',
  wrapAsync(async (req, res) => {
    const board = await boardService.get(req.params.id);
    res.status(OK).send(board);
  })
);

router.delete(
  '/:id',
  wrapAsync(async (req, res) => {
    await boardService.remove(req.params.id);
    res.sendStatus(NO_CONTENT);
  })
);

router.route('/').post(
  wrapAsync(async (req, res) => {
    const board = await boardService.save(Board.fromRequest(req.body));
    res.status(OK).send(board);
  })
);

router.put(
  '/:id',
  wrapAsync(async (req, res) => {
    const board = await boardService.update(
      Board.fromRequest({ ...req.body, id: req.params.id })
    );
    res.status(OK).send(board);
  })
);

module.exports = router;
