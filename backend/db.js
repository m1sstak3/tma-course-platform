const Database = require('better-sqlite3');
const path = require('path');

// Initialize database file in the backend directory
const dbPath = path.resolve(__dirname, 'users.db');
const db = new Database(dbPath);

console.log(`[DB] Database initialized at: ${dbPath}`);

// Initialize schema
try {
    db.prepare(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY,
            username TEXT,
            first_name TEXT,
            last_name TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            is_paid INTEGER DEFAULT 0,
            last_seen DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `).run();
    console.log('[DB] Users table is ready.');
} catch (err) {
    console.error('[DB] Failed to initialize table:', err);
}

// Helper functions
const saveUser = (user) => {
    const { id, username, first_name, last_name } = user;

    // UPSERT: Insert or update last_seen
    const stmt = db.prepare(`
        INSERT INTO users (id, username, first_name, last_name)
        VALUES (?, ?, ?, ?)
        ON CONFLICT(id) DO UPDATE SET
            last_seen = CURRENT_TIMESTAMP,
            username = excluded.username,
            first_name = excluded.first_name,
            last_name = excluded.last_name
    `);

    return stmt.run(id, username, first_name, last_name);
};

const getAllUsers = () => {
    return db.prepare('SELECT * FROM users ORDER BY created_at DESC').all();
};

const getUserCount = () => {
    return db.prepare('SELECT COUNT(*) as count FROM users').get().count;
};

module.exports = {
    saveUser,
    getAllUsers,
    getUserCount
};
