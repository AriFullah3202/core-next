import React from 'react';
import { Breadcrumb, Button, Divider, Layout, Menu, theme } from 'antd';
import RootLayout from '@/components/layouts/RootLayout';
import Head from 'next/head';

const { Header, Content, Footer } = Layout;

const Home = () => {

  return (
    <div>
      <Head>
        <title>Next home page</title>
        <meta name='home' description ="this page created by next page"></meta>
      </Head>
     <h1>this is home</h1>
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}
