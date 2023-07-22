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







