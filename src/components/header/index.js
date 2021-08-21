import React, {useState} from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import MicSharpIcon from '@material-ui/icons/MicSharp';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {

const [inputSearch , setInputSearch] = useState(""); 

    return (
        <div className="header">

            <div className="header_left">
            <MenuSharpIcon />
            <Link to="/">
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="logo"></img>
            </Link>
            </div>

            <div className="header_input">
            <input onChange={e => setInputSearch(e.target.value)} 
            type="search" 
            value={inputSearch}  
            placeholder="Search"></input>
            <Link to={`/search/${inputSearch}`}>
            <SearchSharpIcon className="header_inputBtn"/>
            </Link>
            </div>

            <div className="header_right">
            <VideoCallSharpIcon className="header_icon"/>
            <AppsSharpIcon className="header_icon"/>
            <NotificationsSharpIcon className="header_icon"/>
            <AccountCircleSharpIcon className="header_icon"/>
            </div>

        </div>
    )
}

export default Header;