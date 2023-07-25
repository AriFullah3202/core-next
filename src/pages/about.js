import { Button } from "antd";
import Head from "next/head";
import Link from "next/link";
import RootLayout from "@/components/Layouts/RootLayout";
import styles from "@/styles/About.module.css"



const AboutPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "25%",
      }}
    >
      <Head>
        <title>PH_NP-About Us</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.heading}>About Us page is under developing developing.....</h1>

      <Link href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default AboutPage;


AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};