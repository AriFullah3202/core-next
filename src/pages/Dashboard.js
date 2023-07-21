import React from 'react';
import DashboardLayout from '@/components/layouts/DashboardLayout';

const Dashboard = () => {
    return (
        <div>
            this is Dashboard home page
        </div>
    );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page){
    return <DashboardLayout>
    {page}
</DashboardLayout>
}
