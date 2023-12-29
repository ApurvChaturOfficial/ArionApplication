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
      <MDBox
        position="absolute"
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            bgImage &&
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MDBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            { children }
          </Grid>
        </Grid>
      </MDBox>
    </PageLayout>
  )
}

export default HeadAndFoot