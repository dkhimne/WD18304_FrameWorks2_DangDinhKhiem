import React from "react";

const ApprovalCardComponent = ({ children }) => {
    return (
        <div className="container mt-4 p-3 border rounded bg-light w-50">
            <div className="mb-3">
                {children}
            </div>
            <button className="btn btn-outline-success">Approve</button>
            <button className="btn btn-outline-danger">Reject</button>
        </div>
    );
};

export default ApprovalCardComponent;