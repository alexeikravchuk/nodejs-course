const DB = require('../../utils/inMemoryDb');
const TABLE_NAME = 'Users';

const getAll = async () => {
  return DB.getAllEnries(TABLE_NAME);
};

const get = async id => {
  const user = await DB.getEntity(TABLE_NAME, id);
  if (!user) {
    throw new Error(`Couldn't find a user with id: ${id}`); // TODO: error type
  }

  return user;
};

const remove = async id => {
  if (!(await DB.removeEntity(TABLE_NAME, id))) {
    throw new Error(`Couldn't find a user with id: ${id}`); // TODO: error type
  }
};

const save = async user => {
  return DB.saveEntity(TABLE_NAME, user);
};

const update = async (id, user) => {
  const entity = await DB.updateEnrity(TABLE_NAME, id, user);
  if (!entity) {
    throw new Error(`Couldn't find a user with id: ${id}`); // TODO: error type
  }
};

module.exports = { getAll, get, remove, save, update };
