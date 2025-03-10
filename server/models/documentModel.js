const db = require('../config/db');

const Document = {
    upload: (ownerId, fileName, filePath) => {
        return new Promise((resolve, reject) => {
            db.query(
                `INSERT INTO documents (owner_id, file_name, file_path) VALUES (?, ?, ?)`,
                [ownerId, fileName, filePath],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    addSigners: (documentId, signerIds) => {
        return new Promise((resolve, reject) => {
            const values = signerIds.map(id => [documentId, id, 'pending']);
            db.query(
                `INSERT INTO document_signers (document_id, signer_id, status) VALUES ?`,
                [values],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    getDocumentsByUser: (userId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM documents WHERE owner_id = ?`,
                [userId],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    getDocumentById: (documentId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `SELECT * FROM documents WHERE id = ?`,
                [documentId],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result[0]);
                }
            );
        });
    },

    updateStatus: (documentId, status) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE documents SET status = ? WHERE id = ?`,
                [status, documentId],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    },

    markSignerAsSigned: (documentId, signerId) => {
        return new Promise((resolve, reject) => {
            db.query(
                `UPDATE document_signers SET status = 'signed', signed_at = NOW() WHERE document_id = ? AND signer_id = ?`,
                [documentId, signerId],
                (err, result) => {
                    if (err) reject(err);
                    resolve(result);
                }
            );
        });
    }
};

module.exports = Document;
