import React, {useEffect, useState } from 'react';
import './index.css';
import { getDocuments } from '../../api/documentApi';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { baseUrl } from '../../Config/constants';

const Documents = () => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const userId = jwtDecode(Cookies.get('jwtToken')).id;
    
        const fetchDocuments = async () => {
            try {
                const documentsData = await getDocuments(userId);
                if (Array.isArray(documentsData)) {
                    setDocuments(documentsData);
                } else {
                    console.error("Unexpected API response format:", documentsData);
                }
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };    
    
        fetchDocuments();
    }, []);

    const getDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const handleView = (filePath) => {
        window.open(`${baseUrl}/${filePath}`, '_blank');
    };
    

    return (
        <section className="recent-documents">
            <h2 className="documents-title">Documents</h2>
            <table className="documents-table">
                <thead className="documents-thead"> 
                    <tr className="documents-header-row">
                        <th className="documents-header documents-name">Document Name</th>
                        <th className="documents-header documents-status">Status</th>
                        <th className="documents-header documents-date">Date</th>
                        <th className="documents-header documents-action">Action</th>
                    </tr>
                </thead>
                <tbody className="documents-tbody">
                    {documents.map((document) => (
                        <tr key={document.id} className={`documents-row ${"status-" + document.status}` }>
                            <td className="documents-data documents-name">{document.title}</td>
                            <td className="documents-data documents-status">{document.status}</td>
                            <td className="documents-data documents-date">{getDate(document.created_at)}</td>
                            <td className="documents-data documents-action">
                                <button onClick={() => handleView(document.file_path)} className="view-btn">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Documents;
