const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
    createUser: async (name, email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', 
                [name, email, hashedPassword], 
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    findByEmail: (email) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
                if (err) reject(err);
                resolve(result[0]);
            });
        });
    }
};

module.exports = User;
