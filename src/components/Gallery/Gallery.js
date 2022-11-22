

import React, { useState } from "react";
import {ReactComponent as ImageNotFound} from '../../assets/images/not-found.svg';
const Gallery = ({ arrayimages }) => {

    const [image,setImage] = useState(arrayimages[0]?arrayimages[0]:null)

  return (
    <div className="flex w-full flex-col items-center gap-y-2 overflow-hidden">
      <figure className="flex-1 ">
        {image? <img className="w-full h-[275px] object-cover" src={image} alt={image}/>:<ImageNotFound />}
      </figure>
      <div className="flex snap-mandatory overflow-x-scroll scroll-smooth gap-2 w-full ">
        {arrayimages.map((el,index)=>
          <div className="min-w-[150px] h-36 snap-start">
            <img className="h-full w-full rounded-lg object-cover cursor-pointer" src={el} alt="ejemplo" onClick={()=>setImage(arrayimages[index])}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
