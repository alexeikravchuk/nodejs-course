const User = require('../resources/users/user.model');

const db = {
  Users: [],
  Boards: [],
  Tasks: [],
  fixUsersStructure: user => {
    if (user) {
      db.Tasks.filter(task => task).forEach(
        task => (task.userId = task.userId === user.id ? null : task.userId)
      );
    }
  },
  fixBoardsStructure: board => {
    if (board) {
      db.Boards.filter(task => task && task.boardId === board.id).forEach(
        task => (db.Tasks[db.Tasks.indexOf(task)] = undefined)
      );
    }
  }
};

(() => {
  for (let i = 0; i < 3; i++) {
    db.Users.push(new User());
  }

  // const board = new Board();
  // db.Boards.push(board);
  // db.Tasks.push(
  //   new Task({ boardId: board.id }),
  //   new Task({ boardId: board.id })
  // );
})();

const getAllEnries = tableName => db[tableName].filter(entity => entity);

const getEntity = (tableName, id) => {
  const entries = db[tableName]
    .filter(entity => entity)
    .filter(entity => (entity.id = id));

  if (entries.length > 1) {
    console.error(
      `The DB data is damaged. Table: ${tableName}. Entity ID: ${id}`
    );
    throw Error('The DB data is wrong');
  }

  return entries[0];
};

const removeEntity = (tableName, id) => {
  const entity = getEntity(tableName, id);
  if (entity) {
    db[`fix${tableName}Structure`](entity);
    const index = db[tableName].indexOf(entity);
    db[tableName] = [
      ...db[tableName].slice(0, index),
      ...(db[tableName].length > index + 1
        ? db[tableName].slice[index + 1]
        : [])
    ];
  }

  return entity;
};

const saveEntity = (tableName, entity) => {
  db[tableName].push(entity);
  return getEntity(tableName, entity.id);
};

const updateEnrity = async (tableName, id, entity) => {
  const oldEntity = getEntity(tableName, id);
  if (oldEntity) {
    db[tableName][db[tableName].indexOf(oldEntity)] = { ...entity };
  }

  return getEntity(tableName, id);
};

module.exports = {
  getAllEnries,
  getEntity,
  removeEntity,
  saveEntity,
  updateEnrity
};
