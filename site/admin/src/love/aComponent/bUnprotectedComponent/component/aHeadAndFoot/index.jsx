import React from 'react'

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDInput from "src/love/iTemplate/components/MDInput";
import MDButton from "src/love/iTemplate/components/MDButton";

// Material Dashboard 2 React example components
import DefaultNavbar from "src/love/iTemplate/examples/Navbars/DefaultNavbar";
import PageLayout from "src/love/iTemplate/examples/LayoutContainers/PageLayout";

// Images
import bgImage from "src/love/iTemplate/assets/images/bg-sign-in-basic.jpeg";

// Routes 
import FinalRouteName from 'src/love/gRoute/FinalRouteName';


const HeadAndFoot = ({ children }) => {
  return (
    <PageLayout>
      <DefaultNavbar
        // action={{
        //   type: "internal",
        //   route: FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.ListRoute,
        //   label: "Visit Admin",
        //   color: "dark",
        // }}
        light
        transparent
      />
      { children }
    </PageLayout>
  )
}

export default HeadAndFoot