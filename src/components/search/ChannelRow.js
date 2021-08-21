import React from 'react';
import { Avatar } from '@material-ui/core';
import "./Search.css";
import CheckCircleOutlineSharpIcon from '@material-ui/icons/CheckCircleOutlineSharp';

function ChannelRow({description,numOfVideos,subs,Channel,image,verified}) {
    return (
        <div className="ChannelRow">
           <Avatar src={image} 
           alt={Channel} 
           className="ChannelRow_avatar"/>
           <div className="ChannelRow_text">
               <h4>{Channel} {verified && <CheckCircleOutlineSharpIcon />}</h4>
               <p>{subs} subscribers . {numOfVideos} videos</p>
               <p>{description}</p>
           </div> 
        </div>
    )
}

export default ChannelRow;
