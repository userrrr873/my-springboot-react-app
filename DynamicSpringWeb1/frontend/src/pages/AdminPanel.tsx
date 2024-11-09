import React from 'react';

const AdminPanel: React.FC = () => {
    return (
        <div className="admin-panel">
            <h1>Admin Panel</h1>
            <ul>
                <li><a href="/manage-users">Կառավարել օգտատերերը</a></li>
                <li><a href="/manage-orders">Կառավարել պատվերները</a></li>
                <li><a href="/settings">Կարգավորումներ</a></li>
            </ul>
        </div>
    );
};

export default AdminPanel;
