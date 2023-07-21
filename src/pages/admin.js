
import DashboardLayout from '@/components/layouts/DashboardLayout';
import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const AdminHomePage = () => {
    return (
        <div>
            this is admin
        </div>
    );
};

export default AdminHomePage;
AdminHomePage.getLayout = function getLayout(page) {
  return  <RootLayout><DashboardLayout>
  {page}
</DashboardLayout></RootLayout>
}
