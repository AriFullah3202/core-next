import RootLayout from '@/components/layouts/RootLayout';
import React from 'react';

const about = () => {
  return (
    <div>
      
    </div>
  );
};

export default about;

about.getLayout = function getLayout(page){
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}