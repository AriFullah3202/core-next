* [lets start Our Journey with Next.js](#lets-start-our-journey-with-nextjs)
* [Clear concept of pre-rendering and client-side-render](#clear-concept-of-pre-rendering-and-client-side-render)
* [crate Next js app foler stractur](#crate-next-js-app)
* [next js with file system route and dynamic route ](#next-js-with-file-system-route)
* [Catch all route](#catch-all-routes)
* [custom 404 file not found](#custom-404-file-create)
* [second most popular ant design setup](#ant-design-setup)
* [Automatic home when 404 page](#automatic-home-after-5-second)
* [Using head component , Image component , Import alias , and Moudle Summary](#using-head-components-for-better-seo--image-component--import-alias)
  * [Seo](#seo)
  * [image optimazation](#image-optimization)
### [Data Fatching Module 25 . please read README.md file](https://github.com/AriFullah3202/core-next/blob/data-fetching/README.md)

   - [Getting Started and install some packages](#getting-started-and-install-some-packages)
    - [Folder structure](#folder-structure)
    - [run json server](#run-json-server)
    - [Data fatching with getStaticProps](#data-fatching-with-getstaticprops)
    - [Responsive design for antDesign card](#responsive-design-for-antdesign-card)
    - [Note and issus in getStaticProps](#note-and-issus-in-getstaticprops)
    - [why we save image in public folder in next.js](#why-we-save-image-in-public-folder-in-nextjs)
    - [when we use static side generated and server side rendering](#when-we-use-server-side-rendering-and-static-side-‌generation)
    - [Technical Breakdown of Clients side data faching usin RTK Query](#technical-breakdown-of-clients-side-data-faching-usin-rtk-query)
    - [Dynamic import ( lazy loading) No SSR](#dynamic-import--lazy-loading-no-ssr)
    - [Install mongodb create database insert json data into mongodb database and connect to mongodb](#install-mongodb-create-database-insert-json-data-into-mongodb-database-and-connect-to-mongodb)
    - [Get and post data into mongodb](#get-and-post-data-into-mongodb)
    - [Css Module support in next js](#css-module-support-in-next-js)





## Lets Start our journey with Nextjs
এখানে আমাদের জানতে হবে । next js কি ? কেন ব্যবহার করতে হয় ।

Next js হচ্ছে react এর framework . React with supper power . যা React এর সাথে combine করে হয়েছে । 

##### Super Power এর মধ্যে কি আছে ।
- Built In Optimization
   - React এ Image , Font , icon এর ফলে react এর পারফরমেন্স হবি হয়ে যেতো । 
   - Next js এ built in optimization থাকার কারণে সে নিজে থেকে এগুলো optimize করে নে । 
   - যার কারণে ফাস্ট হয় । 
- Pre-render(SSG + SSR)
   - Next js তার performance কে optimize করতে SSG + SSR কনসেপ্ট ব্যবহার করেচে । 
   - এজন্য ফাস্ট হয় । 
- Next level Data Fetching
   - রিয়েক্ট client side ডাটা fatching করে । 
   - নেকস্ট জেস server side data fatiching ডাটা নিয়ে আসে ্ 
- Powerful Routing and Layouts 
   - আমরা react এ routing টা dependency আকারে install করেত হয় । 
   - Next js এটা অটোমেটিক করে দে ,
   - আরো আছে nested route . যা আমরা পরে দেখব ।
- API Routes 
   - আমরা React এ সাভারেব জন্য express , node ব্যবহারে করে র্সাভার করতে হতো ।
   - next এ এগোলো সব দিয়ে দেয়া আছে । 
#### Next js কেন ইউজ করব । 
##### React হচ্ছে library এবং Next js হচ্ছ একটি framework
##### আর next documantaion এ বলছে full stack করতে চাইলৈ next js ইউজ করতে । আর library হচ্চে ছোটা তিনিস framework হচ্ছে বড় তিনিস । 
##### আমরা রিযেক্টে fulll stack project করতে thired party লাইব্রেরি ইউজ করতে হতৌ । যেমণ : firebase , react router , express
##### next js এর মধ্যে Built in Routing System , Api Routes  , Next Auth আছে । 
##### next js 
  - next js preRenderg
    - Static side Generation (SSG)
    - Server side Rendering (SSR)
  - react js Client side Rendering
  ##### এবার বলা যায় Rendering কি 
##### html , css , javaScript কে convert করে একটা ইউজার জন্য দৃশ্যমান layout make করা 

## Clear concept of pre-rendering and client side rendering 
React এ client side rending 

Next jas re-rnder এ server side rendering and 


pre reander এবু কি 
যেমন : next এর default url বা শরুর website, right click করে  view souce book গেলে বুজা যায় । 

এবার জানতে হবে = Static side Generation টা কেন কলা হয় । 
##### এটা build time এ তৈরি হচ্ছে । 
##### server side rendering টা user এর requst অনুসারে হচ্ছে । 

## Getting Started and install some packages
Clone This Starter File

Then, run 
```bash
npm install
#or
npm i
npm i json server
npm install @reduxjs/toolkit react-redux
After that, run the development server:

```bash
npm run dev
```

## How to create Next js appS
```bash
npx crate-next app@latest my-app
cd my-app
npm run dev
npm install antd -save
```
then no

yes 

no

yes

no

then cd my-add

then npm run dev

## folder structur e সবচেয়ে গুরুত্বপূর্ণ হচ্ছে _app.js
## যেখান থেকে component গুলো generate হয়ে ui তে দেখাচ্ছে । এটা না থাকলে হবে না ।
#### তারপর _app.js এরপর index.js এটা সেকেন্ড মেইন ফাইল । 
pages ফোল্ডারে _app.js and index.js টা অবশ্যই লাগবে ।

docuent.js টা ডিলিট করে দিলাম ।

## Key featucre of next js with file system routing
এবার একটা file create করতে হবে ।

about.js
```js
import React from 'react'

export default function () {
  return (
    <div>this is about page</div>
  )
}

```
এবার যদি আমরা hit করি 

http://localhost:3000/about

### মনে রাখা প্রয়োজন এটা file এর নাম অনুসারে লিখতে হবে । যেমন : about
আগে আমরা রিযেক্টে , এভাবে লিখতাম , এখন next js জাস্ট ফাইলের নাম ধরে ডাক দিলাম 
```js
const route = [
   {
      path : "/home",
      component : home
   }
]
```
## Nested route and dynamic route
#### first Nested route
একটা folder create করতে হবে । তারপর একটা file ক্রিয়েট করা ।
* article
  * news.js

```js
import React, { Component } from 'react'

export class newws extends Component {
  render() {
    return (
      <div>this is news </div>
    )
  }
}

export default newws
```
তাহলে রাউট হবে 
http://localhost:3000/article/news

#### এখন কথা হল , article home page কিভাবে করব ?
জাস্ট ariticle folder e গিয়ে index.js নামে file create করতে হবে ।
```js
import React from 'react';

const index = () => {
    return (
        <div>
            this is home page 
        </div>
    );
};

export default index;
```
#### মনে রাখতে হবে index.js নামে দিতে হবে ।

তাহলে url হবে ।
http://localhost:3000/article/

##### এভাবে আমরা nested folder create করতে পাবি ।
* article
  * post 
    * post.js
```js
import React from 'react';

const post = () => {
    return (
        <div>
          this is post inside article folder and inside post folder   
        </div>
    );
};

export default post;
```

তাহলে url হবে ।
http://localhost:3000/article/post/post
আবার আমরা post folder এর মথ্যে home route করতে পারি ।
###### জাস্ট index.js file create করতে পারি
## dynamic route 

### dynamic route করতে কি করতে হবে । 
###### প্রথমে একটা  ফোল্ডার create করি ।  নাম দিলাম product 
###### [productId].js দিতে হবে 
### মনে রাখতে হবে [] braket দিতে হবে ।
### rsc দিয়ে file create করার সাথে সাথে নাম চেন্জ করতে হবে ।
### এবং import করতে হবে useRouter hook
### ui তে যদি দেখাতে চাই তাহলে router.query.productId দিতে হবে । এখানে query দিলাম , কারণ এট url থেকে নিতে হবে । productId দিলাম কেন ? কারণ এটা file name .
```js
import { useRouter } from 'next/router';
import React from 'react';
const productDetails = () => {
    const router = useRouter()
    return (
        <div>
            this is dynamic page of product {router.query.productId}
        </div>
    );
};

export default productDetails;
```
## Catch all route 
##### catch all route মানে হল , 
```js
http://localhost:3000/news/3-04-20023/manday/abc
http://localhost:3000/news/2-3-2023/java/jjsj

```
##### এই url এ dynamic date এর পরে আরও route থাকতে পারে । এই dynamic date এর পরে data search করা যেতে পারে ।
### এটাকে বলা হয় next js এর ভাষায় catch all route
### এখানে অনেক route দিলে কাজ করবে 
### এটা কিভাবে করব?
### এজন্য ফাইলের দিতে হবে 
## [...slug].js এখানে তিনটা ডট দিতে হবে ।
for example

* news 
  * [...slug].js
```js
import React from 'react';

const FilterIng = () => {
    return (
        <div>
             this the filter ing
        </div>
    );
};

export default FilterIng;
```
## Custom 404 file create
এতন্য file name দিতে হবে 
* page 
  * 404.js
##### অবশ্যই 404.js লিখতে হবে । এট name convention

## Ant design setup

```js
npm install antd --save
```
##### navigate to home
```js
import { Button } from 'antd';
import Link from 'next/link';
import React from 'react';

const home = () => {
    return (
        <Button type="primary">
            <Link href = "/"> Home</Link>

      </Button>
    );
};

export default home;
```
## Automatic home after 5 second 
#### এটা useRouter hook দিয়ে করা হচ্ছে । 
#### setTimeout function এ বলে দিছি , ২ সেকেন্ড পরে কোথায় যাবে ।
```js
import { useRouter } from 'next/router';
import React from 'react';

const eror = () => {
    const router = useRouter();
    setTimeout(() => {
        router.push("/")
    }, 2000);
    return (
        <div>
          <img src='https://www.nicepng.com/png/detail/373-3734776_404-banner-http-404.png' width="100%"></img>  
        </div>
    );
};

export default eror;
```
## Explore simple layout system
#### প্রথমে একটা component বানাতে হবে , এখানে header , navbar , footer আছে ।
* src
  *  components
    * RootLayout

```js
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const RootLayout = ({children}) => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <Layout className="layout">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </Header>
        <Content
          style={{
            padding: '0 50px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-content"
            style={{
              background: colorBgContainer,
              height: '100vh'
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    );
};

export default RootLayout;
```
_app.js

**এখানে আমাদের app `getLayout` যদি থাকে বসাই দিবে । নিচে কল করা হয়েছে ।**

```js
import '@/styles/globals.css'
export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}
```
### যে component আমরা header , footer , navbar দিতে চাই । সে component এর নিচে 
### নিচের ফাইলটা দিতে হবে ।

**এখানে আমরা `getLayout` ‌`property` কে এবং funcion কে `assign` করে দিচ্ছি , যার নাম হচ্ছে `getLayout` ফাংশন । 
```js

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}
```
## Explore Dashboard layout and Nested layout system

```js

import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            Bill is a cat.
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;
```
#### Nested layout
**এখানে আমরা admin page এ নেস্টেট লেআউট তৈরি করব । যেমন এখানে header and footer থাকনে এবং sidebar থাকবে ।**
```js

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
  return  <RootLayout>
            <DashboardLayout>
              {page}
            </DashboardLayout>
          </RootLayout>
}

```

## Using Head components for better SEO , Image Component , Import alias

#### Import Alias
**নেক্সট জেএস `import` দুইভাবে করা যায় ।**
**একটা @ দিয়ে , এটা হচ্ছে `absulute path` আরেকটা আছে ../component ../ দিয়ে ।**
### A relative path describes the location of a file relative to the current (working) directory*. An absolute path describes the location from the root directory 


```js
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

```
#### Seo
**Seo friendly use করার জন্য আমরা  হেড কম্পোনেন্ট ইউজ করি ।**
**এভাবে আমরা উপরে টাইটলটা সেট করতে পারি**
‌‌```js
 <Head>
        <title>Next home page</title>
      </Head>
```

**আমরা `meta tag` ইউজ করতে পারি এবং description এড করে দিতে পারি**
**এভাবে আমরা রলে দিতে পারি কোন পেইজে কি আছে । এটা দেখতে চাইলে `right click` করে `view source page` এ গিয়ে ‌`wrap` ক্লিক করতে হবে**

```js
  return (
    <div>
      <Head>
        <title>Next home page</title>
        <meta name='home' description ="this page created by next page"></meta>
      </Head>
     <h1>this is home</h1>
    </div>
  );
```
## image optimization

**ইমেজ দুইভাবে দেখা যায় । তবে next এর image component ব্যবহার করা যায় , এটা খুব স্পীড হয় ।**
**তবে মনে রাখতে হবে width , height , layout , এট্রিবিউট ইউজ করতে হবে ।**
```js
import Image from 'next/image';
import React from 'react';

const Album = () => {
    return (
        <div>
           <img src='https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp' alt=''></img>
           
           <Image src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" width={400} height={300} layout='responsive'></Image>
        </div>
    );
};

export default Album;

```

## Local image uses , downloaded image
**ষবকিছু সেইম , জাস্ট এটা download করা**
```js
import Image from 'next/image';
import React from 'react';
import NextImage from '../assets/nextjs3.webp'

const Album = () => {
    return (
        <div>
           <img src='https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp' alt=''></img>
           
           <Image src="https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp" width={400} height={300} layout='responsive'></Image>
           <Image src={NextImage} width={400} height={300} layout='responsive'></Image>
        </div>
    );
};

export default Album;

```

## Folder structure
* public **এখানে ইমেজ**
  * images **এই ফোল্ডারের ভিতরে ডাউনলোয করা ইমেজ রাখা আছে ।**
    * image 1 
    * image 2
    * image 3
* src **নিচের গুলো src folder এর ভিতরে**
  * assets
    * images
      * banner_images
      *  image1
  * components
    * layout
      * RootLayout.js **এখানে হেডার এবং ফোটার আছে ।**
    * UI
      * Banner.js **এখানে banner slider দেয়া আছে**
  * pages
    * index.js **এখানে home দেয়া আছে ।** 
    * about.js
    * contact.js

## run json server 
**এই নেক্সট জেএস এর মধ্যে একটা কায়েন্ট এবং সাভার রান হয় ।**
**কায়েন্ট সাইড রান করতে হয় `npm run dev` দিয়ে ।**
**সাভার সাইড রান করতে হয় `npm run json-server` দিয়ে** 
**এখন json server install করতে `npm i json-server`**

**এখন `package.json` লিখতে হবে `"json-server": "json-server --watch db.json --port 5000",` এটা নিচে দেয়া হল**
**এখানে একটা বিষয় লক্ষ রাখতে হবে ‌`db.json` `port 5000` এই দুইটা অবশ্যই দিতে হবে । `db.json` মানে হচ্ছে এই প্রজেক্টে এই নামে একটা ফাইল আছে**

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "json-server": "json-server --watch db.json --port 5000",
    "lint": "next lint"
  }
```
এখন কি কি ভাবে `server access` করা যায়
```js

http://localhost:5000/news
ডাটা আছে এরকম
    {
            "id": 1,
            "title": "New Study Reveals Benefits of Regular Exercise",
            "description": "A recent study conducted by experts in the field suggests that regular exercise can have numerous health benefits, including improved cardiovascular function and increased mental well-being.",
            "author": "Healthline",
            "release_date": "June 10, 2023",
            "category": "Health",
            "comment_count": 5,
            "image_url": "/images/exercise_image.jpg"
        },

মজার কথা হচ্ছে এভাবে একসেস করা যায় । ১ লিখে একসেস করা যায় ।
http://localhost:5000/news/1
```




## Data fatching with getStaticProps

**আমরা জানি রিয়েক্টে ডাটা ফেস করার জন্য `useEffect` ইউজ করতাম । এটা `client side` কাজ করত । তাছাড়া এটা `side effect` কাজ করত ।**
**নেক্সটা জেএস `pre render` হয় `server side` কাজ করার জন্য কিছু built in function দিয়ে দিয়েছে**
**তারা মধ্যে একটা হল `getStaticProps`, নিচে এ সম্পকে আলোচনা করা হবে**
**নিচের কোডটি যে পেইজে ডাটা ফেস করব ওই পেইজে দিতে হবে**
**মনে রাখতে হবে এখানে `console.log` করা যাবে না ।**
* **এটা `async fucntion`একটা `promise` রির্টান করবে**

```js
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/news")
  const data = await res.json()
  console.log(data) // ekhne console.log hobe na
  return {
    props : {
      allNews: data
    }
  }
}
```
**`console.log` করা যাবে `client side` কোডের ভিতরে**
**নিচের কোডে ডাটা ফেস হচ্ছে । এখন `HomePage` কম্পোনেন্টের ভিতেরে আমরা ডাটা পাচ্ছি ।**

```js

const HomePage = ({allNews}) => {
  console.log(allNews , "this is news")
  return (
    <>
      <Head>
        <title>PH-News Portal</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/news")
  const data = await res.json()
  return {
    props : {
      allNews : data
    }
  }
}


```
## Responsive design for antDesign card
```js
import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllNews = ({ allNews }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        #TODAY HIGHLIGHT
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allNews?.map((news) => (
          <Col key={news.id} className="gutter-row" xs={24} sm={24}  md={12 } lg={6} >
            <Card
              hoverable
              cover={
                <Image
                  src={news?.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt="news image"
                />
              }
            >
              <Meta title={news?.title} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <span>
                  <CalendarOutlined /> {news?.release_date}
                </span>
                <span>
                  <CommentOutlined /> {news?.comment_count} COMMENTS
                </span>
                <span>
                  <ProfileOutlined /> {news?.category}
                </span>
              </p>

              <p style={{ fontSize: "15px" }}>
                {news?.description.length > 100
                  ? news?.description.slice(0, 70) + "..."
                  : news?.description}
              </p>
              <Link href={`/news/${news?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  Keep Reading <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
```
## Note and issus in getStaticProps
**যখন আমরা `production` এ যাবো** ,যেমন : 
```bash
npm run build
npm start
```
**তখন `db.json` এ কিছু চেন্জ করলে `rebuild` ছাড়া এটা দেখাবে না**
**এটার সমাধান হচ্ছে ঐই পেইজে `getStaticProps` কে `revalidate` করা এটা ১০ সেকেন্ড পর হবে**
```js
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/news")
  const data = await res.json()
  return {
    props : {
      allNews : data
    },
    revalidate : 10
  }
}
```


## why we save image in public folder in next.js
**আমরা `root` ডাইরেক্টরি থেকে  `image` এর লোকেশন বলে দিতে হবে । সুতারাং `public` ফোল্ডার হচ্ছে রোট directory যদি আমরা src ফোল্ডার থেকে assets ফোল্ডারে লোকেশন দিলে image দেখাব না যেমন :** 

```js
             "id": 1,
            "title": "New Study Reveals Benefits of Regular Exercise",
            "description": "A recent study conducted by experts in the field suggests that regular exercise can have numerous health benefits, including improved cardiovascular function and increased mental well-being.",
            "author": "Healthline",
            "release_date": "June 10, 2023",
            "category": "Health",
            "comment_count": 100,
            "image_url": "/assets/images/404_Error_Page.png"
```

**` "image_url": "/assets/images/404_Error_Page.png"` এটা আসবে না । যেহেতু এটা assests folder  থেকে**


## Specific data form json
**এখানে `getStaticProps` হলো সব ডাটা গুলো নিয়ে আসতেছে । এখান থেকে map করে শুধুমাত্র `id` নিয়ে নিচ্ছি ।**
**তারপর getStaticProps হলো `params` গুলো নিয়ে নিবে ।**
**এখানে ‌`getStaticPaths` এর মধ্যে `fallback : false` দ যদি id না থাকে তাহলে 404 not found বলবে**
**এখানে ‌`getStaticPaths` এর মধ্যে `fallback : true`যখন `large data` থাকবে যদি id না থাকে তাহলে লোডিং বলবে**
**এখানে ‌`getStaticPaths` এর মধ্যে `fallback : blocking`যখন `large data` থাকবে যদি id না থাকে তাহলে লোডিং বলবে**
**এখানে যে `newsId` দিয়েছি কারণ filename এরকম দিয়েছি**



```js
export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5000/news/`);
    const data = await res.json();

    const paths = data.map((news) => ({
      params: {
       newsId: news.id
     }
    }))
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const {params} = context;
    
    const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
        const data = await res.json();

   return {
    props : {
        news : data,
    }
   }
}
```
**এই যে আমরা `getStaticProps` and `getStaticPaths` ব্যবহারা করে ডাইনামিক পেইজটা করেছি এটাকে বলা হয় SSG (static side generation) অথাৎ `build` টাইমে আমাদের ডাটা create হচ্ছে । কিন্তু ্‌এখানে একটা ইস্যু আছে । আমাদের ডাটা প্রতিসেকেন্ডে আপডেট হচ্ছে । যার ফলে একজন ইউজার আপডেট দেখতে পাবে না । এখন প্রশ্ন আসতে পারে । ভাই আমরা `revalidate` ইউজ করি , কিন্তু তখন ও সেকেন্ড দিতে হয় ।** 

**তাই এজন্য আমরা ইউজ করবো `SSR`(Server side rendering) এখানে request টাইমে আমরা ডাটা পেয়ে যাবো ।**
**এখন আমরা `index.js and [nextid].js` চেন্জ করে নিচের মতো করে দিয়েছি ।**

```js
export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/news")
  const data = await res.json()
  return {
    props : {
      allNews : data
    }
  }
}
```
**এখানে ইউজারের রিকোয়েস্টের অনুসারে ইনস্টেন্ট সাভার থেকে ডাটা নিয়ে আসছি । এবং ডাইনামিক কনটেন্টটা পেয়ে যাচ্ছি । এটা static data তৈরি হচ্ছে না , পুরোটা server side data তৈরি হচ্ছে । যার ফলে SEO friendly হচ্ছে ।** 

### এই same কাজটা useEffect দিয়ে করতে পারতাম , client side rendering হয়ে যতো , যার কারণে seo friendly behavior টা পেতাম না ।

## when we use server side rendering and static side ‌generation 


**এটা প্রজেক্টা উপর ডিপেন্ড করে । প্রতিনিয়ত পোস্ট আপডেট হবে তখন আমরা server side rendering ইউজ করতে হবে । আর যখন আমরা ১০ সেকেন্ড পর পর বা ২০ সেকেন্ড পর পর আপডেট হবে তখন আমরা static side generation ইউজ করব ।**
**`Dashboard` and `user dashboar , admin dashborad` এখানে server side rendering প্রয়োজন নেই । `client side generation` ইউজ করব ।**



## Technical Breakdown of Clients side data faching usin RTK Query
##### [download redux](#getting-started-and-install-some-packages)

* src
  * redux
    * store.js
  * page
    * _app.js
#### Store.js
```js
import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/api'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiSlice.middleware),
})
```

#### _app.js

**এখানে store , provider কে কানেক্ট করে দিছি ।**

```js
import { store } from '@/redux/store';
import '@/styles/globals.css'
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);

  return <Provider store={store}>
    { getLayout(<Component {...pageProps} />)}
  </Provider>;
}


```
## Create api slice
- api
  - apiSlice
- [Rtk query link](#https://redux-toolkit.js.org/tutorials/rtk-query)


```js
// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
  getNewes: builder.query({
    query: () => ({
          url: '/news',
        }),
  })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewesQuery  } = apiSlice
```
**তারপর এই hook টাকে কল করলাম । এই hook চারটা ডাটা রিটান করে ।‌‌**
**মনে রাখতে হবে এটা initially ডাটা undefine**
```js
  const { data , isError , isLoading , error } = useGetNewesQuery();
  console.log(data)
```


## Dynamic import ( lazy loading) No SSR
**আমাদের `website performance` বৃদ্ধি করতে । কোন content যেটা আসতে সময় লাগছে । আমরা চাচ্ছি ওই time টাতে একটা `Loading state` দেখাবে । তখন আমরা `Dynamic import` or `lazy loading` বলে থাকি**

**আমরা যে কম্পোনেন্টে loading দেখানে সেই component এর লোকেশন দিবো । তারপর তার নাম দিতে হবে**

```js
  const DynamicLoading = dynamic(
    () => import('@/components/UI/Banner'),
    {
      loading: () => <h1>Loading...</h1>,
    }
  )
 <DynamicLoading />
```
## Install mongodb create database insert json data into mongodb database and connect to mongodb
**Install mongodb**

```bash
npm i mongodb
```
**create database**
**প্রথমে `mongodb` তে লগইন করতে হবে । তারপর `database access` গিয়ে `create new database user` এ ক্লিক দিতে হবে । তারপর ডাটাবেজ নেম এবং পাসওযাড় দিতে হবে । `ডাটাবেজ নেম ও পাসওর্য়াড় মনে রাখতে হবে` তারপর `database` ক্লিক দিতে হবে । তারপর `browse Collection` এ গিয়ে `create database` গিয়ে ডিবিনেম, কালেকশন নেম দিতে হবে ।** 
**`database` ক্লিক দিয়ে `connect` এ ক্লিক দিয়ে `drivers` তারপর নিচের কোড কপি করতে হবে ।**
**insert json data এখানে browse collection এ গিয়ে insert document এ ক্লিক করে array আকারে insert করতে হবে**

```js

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.wg8wdsp.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

```
## Get and Post data into mongodb
```js

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://news:arif123@cluster0.wg8wdsp.mongodb.net/news?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req ,res) {
  
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
   console.log("connection established")
  const newsConnection = client.db("news").collection("news");
  if(req.method === "GET"){
    const news  = await  newsConnection.find({}).toArray()
 res.send({message:'success',status: 200,  data :  news});
  }
  if (req.method === "POST") {
    const news = req.body;
    const result = await newsCollection.insertOne(news);
    res.json(result);
  }


}
export default run;

```
## Using React hook to post data

in create.js
```js
import { useForm } from "react-hook-form";
import styles from "@/styles/Create.module.css";

const CreateNews = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("/api/news", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("News Successfully Created");
        }
      });
  };
  return (
    <div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        name="form_item_path"
        layout="vertical"
        style={{
          width: "50%",
          margin: "50px auto",
        }}
      >
        <input
          {...register("id")}
          placeholder="Id"
          style={{ marginBottom: "10px" }}
        />
        <input {...register("title")} placeholder="Title" />

        <input
          {...register("description")}
          placeholder="Description"
          style={{ margin: "10px 0px" }}
        />

        <input {...register("author")} placeholder="Author" />
        <input
          {...register("release_date")}
          placeholder="Release Date"
          type="date"
          style={{ margin: "10px 0px" }}
        />
        <input {...register("category")} placeholder="Category" />
        <input
          {...register("comment_count")}
          placeholder="Number of Comments"
          type="number"
          style={{ margin: "10px 0px" }}
        />
        <input {...register("image_url")} placeholder="Image URL" />
        <input
          type="submit"
          value="Create News"
          style={{ margin: "10px 0px", width: "100%" }}
        />
      </form>
    </div>
  );
};

export default CreateNews;
```
## Css Module support in next js
**আমরা `react` এর মধ্যে যখন কোন কম্পোনেন্টের জ্ন্য `css` এপ্লাই করতাম  তখন ওই style টা সব কম্পোনেন্টে apply হয়ে যেতো আথাৎ overflow হয়ে যতো । এটা থামানোর জন্য next js এ আছে `css module support`**

* styles
  * About.Modules.css
  * Contact.Modules.css
in About.Modules.css
```css
.heading{
    font-size: 50;
    background-color: brown;
}
```
in Contact.Modules.css
```css
.heading{
    font-size: 50;
    background-color: green;
}
```
**কিভাবে এপ্রাই করব**
```js
import styles from "@/styles/Contact.modules.css"
      <h1 className={styles.heading}> Developer is sleeping....! Contact Us page coming soon....!</h1>

```








