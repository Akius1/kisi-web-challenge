import React from 'react'
import Header from '../../components/header';
import PageLayout from '../../components/PageLayout';
import Sidebar from '../../components/SideBar';
import Box from '@mui/material/Box';
// #C9CBD1;

const Dashboard = () => {
  return (
      
    <Box sx={{width:"100%"}}>
    <Header />
    
   <PageLayout />
    </Box>

  )
}

export default Dashboard;
