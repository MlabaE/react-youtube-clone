import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./Videos.css";

function VideoCard({image, title, channel,views, timestamp, channelImage}) {
    return (
        <div className="videoCard">
            <img className="videoCard_thumbnail" src={image} alt=""/>
            <div className="videoCard_info">
              <Avatar src={channelImage} alt={channel} className="videoCard_avatar"/>
              <div className="videoCard_text">
                  <h4>{title}</h4>
                  <p>{channel}</p>
                  <p>
                      {views} . {timestamp}
                  </p>
              </div>
            </div>
        </div>
    )
}

export default VideoCard
