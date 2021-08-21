import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExploreIcon from '@material-ui/icons/Explore';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import RadioButtonCheckedSharpIcon from '@material-ui/icons/RadioButtonCheckedSharp';
import SportsSoccerSharpIcon from '@material-ui/icons/SportsSoccerSharp';
import SettingsSharpIcon from '@material-ui/icons/SettingsSharp';
import FlagSharpIcon from '@material-ui/icons/FlagSharp';
import HelpOutlineSharpIcon from '@material-ui/icons/HelpOutlineSharp';
import FeedbackSharpIcon from '@material-ui/icons/FeedbackSharp';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected title="Home" Icon={HomeIcon} />
            <SidebarRow title="Explore" Icon={ExploreIcon} />
            <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
            <hr></hr>
            <SidebarRow title="Library" Icon={VideoLibraryIcon} />
            <SidebarRow title="History" Icon={HistoryIcon} />
            <SidebarRow title="Watch later" Icon={WatchLaterIcon} />
            <SidebarRow title="Liked videos" Icon={ThumbUpIcon} />
            <hr></hr>
            <h1 className="sidebar_h1">SUBSCRIPTIONS</h1>
            <hr></hr>
            <h1 className="sidebar_h1">MORE FROM YOUTUBE</h1>
            <SidebarRow title="Youtube Premium" Icon={YouTubeIcon} />
            <SidebarRow title="Gaming" Icon={SportsEsportsIcon} />
            <SidebarRow title="Live" Icon={RadioButtonCheckedSharpIcon} />
            <SidebarRow title="Sports" Icon={SportsSoccerSharpIcon} />
            <hr></hr>
            <SidebarRow title="Settings" Icon={SettingsSharpIcon} />
            <SidebarRow title="Report History" Icon={FlagSharpIcon} />
            <SidebarRow title="Help" Icon={HelpOutlineSharpIcon} />
            <SidebarRow title="Send feedback" Icon={FeedbackSharpIcon} />
        </div>
    );
}

export default Sidebar;
