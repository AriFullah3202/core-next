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