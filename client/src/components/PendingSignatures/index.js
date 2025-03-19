import "./index.css"

const PendingSignatures = () => {
    return (
        <div className="main-content">
                    <h1>Pending Signatures</h1>
                <div className="pending-container">
                    <div className="pending-card">
                        <div className="document-title">Contract_Agreement.pdf</div>
                        <div className="requested-by">Requested by: John Doe</div>

                        <div className="date-requested">March 5, 2025</div>
                        <div className="action-buttons">
                            <button className="action-btn primary-btn">Approve</button>
                            <button className="action-btn secondary-btn">Reject</button>
                        </div>
                    </div>

                    <div className="pending-card">
                        <div className="document-title">Sales_Report.xlsx</div>
                        <div className="requested-by">Requested by: Mary Smith</div>
                        <div className="date-requested">March 4, 2025</div>
                        <div className="action-buttons">
                            <button className="action-btn primary-btn">Approve</button>
                            <button className="action-btn secondary-btn">Reject</button>
                        </div>
                    </div>

                    <div className="pending-card">
                        <div className="document-title">Project_Proposal.docx</div>
                        <div className="requested-by">Requested by: James Brown</div>
                        <div className="date-requested">March 3, 2025</div>
                        <div className="action-buttons">
                            <button className="action-btn primary-btn">Approve</button>
                            <button className="action-btn secondary-btn">Reject</button>
                        </div>
                    </div>

                    <div className="pending-card">
                        <div className="document-title">Legal_Disclosure.pdf</div>
                        <div className="requested-by">Requested by: Sarah Johnson</div>
                        <div className="date-requested">March 2, 2025</div>
                        <div className="action-buttons">
                            <button className="action-btn primary-btn">Approve</button>
                            <button className="action-btn secondary-btn">Reject</button>
                        </div>
                    </div>
                </div>

            </div>
    )
}

export default PendingSignatures;