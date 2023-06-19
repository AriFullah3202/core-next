import {
  ProfileOutlined,
  LaptopOutlined,
  MobileOutlined,
  NotificationOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer, Sider } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const RootLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PH_NEWS PORTAL
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <items>
            <Link href="/allNews"><ProfileOutlined />All News</Link>
          </items>
          <items
            style={{
              margin: "0px 25px",
            }}
          >
            <Link href="/about"> <UserOutlined />About Us</Link>
          </items>
          <items>
            <Link href="/contact"><MobileOutlined />Contact Us</Link>
          </items>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PH-NEWS PORTAL
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        News Portal ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;
