import React from 'react';
import './index.css';

const Documents = () => {
    return (
        <section className="recent-documents">
            <h2 className="documents-title">Signatures</h2>
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
                    <tr className="documents-row status-signed">
                        <td className="documents-data documents-name">Contract_XYZ.pdf</td>
                        <td className="documents-data documents-status">Signed</td>
                        <td className="documents-data documents-date">March 1, 2025</td>
                        <td className="documents-data documents-action">
                            <button className="view-btn">View</button>
                        </td>
                    </tr>
                    <tr className="documents-row status-pending">
                        <td className="documents-data documents-name">proposal_ABC.pdf</td>
                        <td className="documents-data documents-status">Pending</td>
                        <td className="documents-data documents-date">March 3, 2025</td>
                        <td className="documents-data documents-action">
                            <button className="view-btn">View</button>
                        </td>
                    </tr>
                    <tr className="documents-row status-expired">
                        <td className="documents-data documents-name">Service_Agreement.pdf</td>
                        <td className="documents-data documents-status">Expired</td>
                        <td className="documents-data documents-date">March 5, 2025</td>
                        <td className="documents-data documents-action">
                            <button className="view-btn">View</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default Documents;
