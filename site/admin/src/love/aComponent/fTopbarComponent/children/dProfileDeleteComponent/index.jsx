import React, { useEffect, useRef } from 'react'

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import Card from "@mui/material/Card";

// Material Dashboard 2 React example components
import DashboardLayout from "src/love/iTemplate/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "src/love/iTemplate/examples/Navbars/DashboardNavbar";
import Footer from "src/love/iTemplate/examples/Footer";
import ProfileInfoCard from "src/love/iTemplate/examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "src/love/iTemplate/examples/Lists/ProfilesList";
import DefaultProjectCard from "src/love/iTemplate/examples/Cards/ProjectCards/DefaultProjectCard";
import Icon from "@mui/material/Icon";

// Overview page components
import Header from "src/love/iTemplate/layouts/profile/components/Header";
import PlatformSettings from "src/love/iTemplate/layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "src/love/iTemplate/layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "src/love/iTemplate/assets/images/home-decor-1.jpg";
import homeDecor2 from "src/love/iTemplate/assets/images/home-decor-2.jpg";
import homeDecor3 from "src/love/iTemplate/assets/images/home-decor-3.jpg";
import homeDecor4 from "src/love/iTemplate/assets/images/home-decor-4.jpeg";
import team1 from "src/love/iTemplate/assets/images/team-1.jpg";
import team2 from "src/love/iTemplate/assets/images/team-2.jpg";
import team3 from "src/love/iTemplate/assets/images/team-3.jpg";
import team4 from "src/love/iTemplate/assets/images/team-4.jpg";
import HeaderComponent from '../../component/aHeaderComponent';
import MDAvatar from 'src/love/iTemplate/components/MDAvatar';
import MDInput from 'src/love/iTemplate/components/MDInput';
import MDButton from 'src/love/iTemplate/components/MDButton';
import { Link } from 'react-router-dom';
import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";
import handleInput from 'src/love/dFunction/dHandleInput';


const ProfileDeleteComponent = ({ Redux, EventHandler, OnClick }) => {
  const inputElement1 = useRef()
  const inputElement2 = useRef()

  // JSX
  return (
    <React.Fragment>
      <MDBox mb={2} />
      <HeaderComponent Redux={Redux}>
        <MDBox mt={5} mb={3}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            Critical Information
          </MDTypography>
        </MDBox>
        <MDBox px={2}>
          <MDBox mb={2} lineHeight={1}>
            <MDTypography variant="button" color="text" fontWeight="light">
              Are you sure, you want to close this account?
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox
          pb={3}
          px={2}
          display="flex" 
          justifyContent="left" 
        >
          <MDButton size="small" variant="gradient" color="error" onClick={OnClick}>
            <Icon>delete</Icon>&nbsp;
            Delete Profile
          </MDButton>
        </MDBox>

      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfileDeleteComponent