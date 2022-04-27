import React, {useState} from 'react';
import './sidebar.css';

import HomeIcon from "@material-ui/icons/Home";
import GroupIcon from "@material-ui/icons/Group";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";

import SidebarLink from './sidebarlink';


function Sidebar(){

  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return(

    <div className="sidebar">
        <SidebarLink text="Home" Icon={HomeIcon} />
        <SidebarLink text="Profile" Icon={PermIdentityIcon} />
        <SidebarLink text="Group" Icon={GroupIcon} />
      

      </div>
  );
}
export default Sidebar;