This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- [Getting Started nextAuth](#getting-started-next-auth)
- [Implement Github authentication with Next Auth](#implement-github-authentication)
- [User in Sessions](#user-in-sessions)
- [Sign out](#sign-out-user)
- [Redirect after login](#redirect-after-login)
- [show user in profile](#show-user-in-profile)
- [implement email and passoword authenticaion](#implementations-email-and-password-based-authentication-with-firebase-authentication)
  - [Using react hook form](#using-react-hook-form)
  - [Integration the firebase](#now-integrate-the-firebase)
  - [Multi cursor , copy text and alignment](#multi-cursor-alignment)



## Getting Started Next Auth

First, run the development server:

```bash
npm i
npm install next-auth
npm install firebase
npm i react-firebase-hooks
npm run dev
# or
yarn dev
# or
pnpm dev
```
**Next js এর প্রৌভাইড করা অথেনটিকেশন সিস্টেম আছে [https://next-auth.js.org/getting-started/example](https://next-auth.js.org/getting-started/example)**

**এই লিংক থেকে next-auth install করার পর নিচ থকে কোড কপি করে ।** 

**`folder` `auth` and `[...nextauth].js` spread operator দিয়ে `catch all route` file সেইম দিতে হবে**  
* page 
  * api
    * auth
      * [...nextauth].js

```js
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    
  ],
}

export default NextAuth(authOptions)
```
**এখানে _app.js এর সাথে কানেক্ট করতে হবে ।**

import { SessionProvider } from "next-auth/react"

**এখানে SessionProvider `wrap` করে দিতে হবে । এবং session এট্রিভিউট এর ভিতর `pageProps` থেকে পাওয়া `session` কে পাস করে দিতে হবে ।**
```js
import '@/styles/globals.css'
import Navbar from "@/components/Layout/Navbar";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }) {
  return (
   <SessionProvider session={pageProps.session}>
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
   </SessionProvider>
  );
}

```
## Implement Github authentication
**প্রথমে এই লিংকে গিয়ে [https://next-auth.js.org/providers/github](https://next-auth.js.org/providers/github) `provider` এর ভিতরে `github`** 


**তারপর `github` প্রোফাইলে গিয়ে `setting => development setting => OAuth apps`অথবা [https://github.com/settings/developers](https://github.com/settings/developers)** 


**এখানে `regiser app` এ ক্লিক দিয়ে ‌application name এটা যে কোন কিছু , application url এর মধ্যে http://localhost:3000/, application callback এ দিতে হবে  http://localhost:3000/,** 


**দিয়ে রেজিস্টার করে `client id and client secret` নিয়ে `.env` file create বসাতে হবে ।**

```js
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
  ],
}

export default NextAuth(authOptions)
```
**এখন login.js এর মথ্যে কল করতে হবে  ।** 

```js
import { signIn } from "next-auth/react";
 <GithubOutlined onClick={() => signIn("github")}/>

```
## User in Session 
**।এবার লগইন হয়ে গেলে ওটা `session` এ রাখতে হবে**

* commponent 
  * layout
    * Navbar.js
```js
import { useSession, signOut } from "next-auth/react"
const Navbar = () => {
  const { data: session } = useSession()
  console.log("from header", session)

  {session?.user? <items>
          <Button type="primary" danger>
            Logout
          </Button>
        </items> :
        <Link style={{ textDecoration: "none", color: "white" }} href="/login">
          <items>Login</items>
        </Link>}
}
```
## Sign out user
**জাস্ট signOut ফাংশনকে কল করতে হবে**

* in Navber.js

```js
  import { useSession, signOut } from "next-auth/react"
  <Button onClick={() => signOut()} type="primary" danger>
            Logout
          </Button>
          
```
## Redirect after sign in

**জাস্ট `sign in` এর ভিতরে একটা `object` এর আকরে callback টা দিতে হবে ।**

* in login page
```js
  <GithubOutlined onClick={() => signIn("github" , {
            callbackUrl: "http://localhost:3000/"
          })}/>
```
## Show user in profile
**এখানে name , email সব দেখা যাবে**
```js
import { useSession } from "next-auth/react"
const HomePage = () => {
  const {data : session} = useSession();
   <h1 style={{ textAlign: "center" }}>Logged in user : { session?.user?.name}</h1>
}
```
## Google authentication in next 
[https://next-auth.js.org/providers/google](https://next-auth.js.org/providers/google)

**প্রথমে এই লিংকে [https://console.developers.google.com/apis/credentials](https://console.developers.google.com/apis/credentials) গিয়ে প্রজেক্ট ক্রিয়েট করতে হবে ।** 

**তারপর `auth constant screen` configure করতে হবে ।** 

**তারপর `create credentials` করতে হবে ।** 

**client id and client secret কপি করতে হবে । `.env` file সেট করতে হবে**

* api
  * auth
    * [...nextauth].js
```js
 GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
```
* page
  * login.js
```js
 <GoogleOutlined onClick={() => signIn("google" , {
            callbackUrl: "http://localhost:3000/"
          })}/>
```

## Protect a route from unauthorized user using middleware

**আমরা যখন `react` private route করতাম তখন কম্পোনেন্ট wrap করতে হতো ।**


**এখন আমরা next js এ মাত্র দুই লাইন কোড লিখে `private route` করতে পারি ।**

**[https://next-auth.js.org/configuration/nextjs#middleware](https://next-auth.js.org/configuration/nextjs#middleware) এ যেতে হবে আথবা `middleware` সার্চ করে যেতে হবে ।** 

* src
  * middleware.js

**এখানে যত `ROUTE` আমরা প্রটেক্ট করতে চাই , তত গুলো `array` এর ভিতরে রাখবো**

```js
export { default } from "next-auth/middleware"

export const config = { matcher: ["/profile"] }
```
**এখন যদি আমরা `login` করা বা না করা থাকলে ও `profile` যাই তাহলে `internal server error` দিবে**

**এটা যদি আমরা `login` url এ দেখতে চাই তাহলে** 

```js
NEXTAUTH_URL = http://localhost:5000
NEXTAUTH_SECRET = abc
```
**এখনো হবে না , তাদের `login` ui টা দেখাবে ।**
```js
  pages : {
    signIn : "/login"
  }
```
**এখন আমাদের ui তে দেখাচ্ছে যদি `profile` ক্লিক করি তাহলে `authorized`না হলে লগইনে নিয়ে যাবে ।** 

## Implementations email and password based authentication with firebase authentication

## Using React hook form
```bash
npm install react-hook-form
```

```js
// এটা import করতে হবে 
import { useForm } from "react-hook-form"
// এটা রিটানের উপরে দিতে হবে 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


//এটা রিটানের ভিতরে দিতে হবে --------------------------------
 <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input type="email" {...register("email",  { required: true })}/>
          {errors.email && <p style={{color : "red"}}>this field is required</p>}
          <label htmlFor="">Your Password</label>
          <input type="password" {...register("password" ,  { required: true })}/>
          {errors.password && <p style={{color : "red"}} >this field is required</p>}
          <button type="submit">Login</button>
        </form>
```
## Now integrate the firebase

**রথমে firebase গিয়ে [https://console.firebase.google.com/](https://console.firebase.google.com/) new project ক্রিয়েট করতে হবে । web এর জন্য প্রজেক্ট করতে হবে । ২০ সেকেন্ড সময় লাগে ।**

**তারপর `authentication` এ ক্লিক দিয়ে `get started` এ ক্লিক দিয়ে `Email and password``enable` করে দিতে হবে ।** 

**তারপর `project setting` গিয়ে `configuration` টা নিয়ে নিতে হবে ।**

```bash
npm install firebase
npm i react-firebase-hooks
```
```js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## multi cursor alignment

**`Shit + tab` দিলে alignment হয়ে যাবে ।**


**যে কোন কিছু `select` করে `Ctrl + shtft + L` যেইটা সিলেক্ট করা হয়েছে সব হয়ে যাবে ।**


**একটা `symble` থেকে শেষে যেতে চাইলে `Shift + end` অথবা শুরুতে যেতে চাইলে `Shift + start` ক্লিক দিয়ে করতে হবে ।**


**যেমন এখানে `=` কে ক্লিক দিয়ে সব সমান সিলেক্ট করে এখান থেকে শুরু বা শেষে যেতে পারব `select` and `copy` , `delete` ,করতে পারব ।**

```js
Next_apiKey = AIzaSyAZSnt6AcOfRYnW
Next_authDomain = next-auth
Next_projectId = next-aut
Next_storageBucket = next-aut
Next_messagingSenderId = 83081401299
Next_appId = 1:83081401299:web
```
**যেহেতু `firebase hook` install দিয়ছি । তাই আমরা `hook ` ব্যবহার করব ।** 

**যখন সাবমিট করব তখন `firebase` এ সেভ হবে ।**


in login.js

```js
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "@/firebase/firebase.auth.js";

const LoginPage = () => {
const [
  createUserWithEmailAndPassword,
  user,
  loading,
  error,
] = useCreateUserWithEmailAndPassword(auth);

const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password)
  }


``` 
**এখন স্টেট থেকে `user` কে পেয়ে যাবো ।** 

```js
import Head from "next/head";
import { useSession } from "next-auth/react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";
const HomePage = () => {
  const {data : session} = useSession();
  const [user , loading ,  error] = useAuthState(auth)
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
      {user?.email && <h1 style={{ textAlign: "center" }}>Logged in user : { user?.email}</h1>}
    </div>
  );
};

export default HomePage;
```



