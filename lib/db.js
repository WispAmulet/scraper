import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

// Setup DB
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ online: [], members: [], visitors: [] }).write();
// db.unset('online').write();
// db.unset('members').write();
// db.unset('visitors').write();

export default db;
