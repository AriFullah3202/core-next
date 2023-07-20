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