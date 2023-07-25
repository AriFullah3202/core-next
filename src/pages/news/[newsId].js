import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import { Col, Row } from 'antd';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
  } from "@ant-design/icons";
import Image from 'next/image';

const NewsDetails = ({news}) => {
    return (
        <div style={{margin : "30px"}}>
           <Row wrap={false} xs={8} md={15}> 
      <Col className="gutter-row" span={10}>
       <div>
       <Image
                  src={news?.image_url}
                  width={500}
                  height={300}
                  responsive
                  alt="news image"
                />
       </div>
      </Col>
      <Col className="gutter-row" span={10}>
        <div>
      
              <h1 style={{ fontSize: "25px" }}>{news?.title}</h1>
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
                  {news?.description}
              </p>
        </div>
      </Col>
    </Row>
        </div>
    );
};

export default NewsDetails;

NewsDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

// export const getStaticPaths = async () => {
//     const res = await fetch(`http://localhost:5000/news/`);
//     const data = await res.json();

//     const paths = data.map((news) => ({
//       params: {
//        newsId: news.id
//      }
//     }))
//     return {
//         paths,
//         fallback: false
//     }
// }


export const getServerSideProps = async (context) => {
    const {params} = context;
    
    const res = await fetch(`http://localhost:5000/news/${params.newsId}`);
        const data = await res.json();
   return {
    props : {
        news : data,
    }
   }
}