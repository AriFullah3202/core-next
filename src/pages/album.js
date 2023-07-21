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