import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

// Setup DB
const adapter = new FileSync('db.json');
const db = low(adapter);

// * Clear everything!
// db.unset('online').write();
// db.unset('members').write();
// db.unset('visitors').write();

// Set default values
db.defaults({ online: [], members: [], visitors: [] }).write();

export default db;
