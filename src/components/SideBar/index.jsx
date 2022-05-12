import React from "react";
import "./sidebar.css";

import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import SidebarLink from "./sidebarlink";
import { Link } from "react-router-dom";

function Sidebar() {
  
  return (
    <div className="sidebar">
    {/* <nav> */}
    <Link to={'/'}><SidebarLink text="Home" Icon={HomeIcon}  /></Link>
     
     <SidebarLink text="User" Icon={PermIdentityIcon} />
     <Link to={'/'}> <SidebarLink text="Group" Icon={GroupIcon} /></Link>
    {/* </nav> */}
      
    </div>
  );
}
export default Sidebar;
