const db = require('mongoose');
const Model = require('./model');

const uri =
  'mongodb://127.0.0.1/telegram';

db.Promise = global.Promise;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('[db] Conectada con éxito'))
  .catch(err => console.error('[db]', err));

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  await Model.find();
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get
  // update
  // delete
};
