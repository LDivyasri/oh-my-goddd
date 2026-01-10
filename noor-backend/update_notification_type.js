const db = require('./config/db');

async function updateNotificationType() {
    try {
        console.log('Modifying type column in notifications table to VARCHAR(50)...');
        await db.query(`ALTER TABLE notifications MODIFY COLUMN type VARCHAR(50) NOT NULL`);
        console.log('Notification type column updated to VARCHAR(50)');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

updateNotificationType();
