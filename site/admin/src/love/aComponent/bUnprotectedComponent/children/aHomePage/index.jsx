import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import FinalRouteName from 'src/love/gRoute/FinalRouteName'

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
import brand from 'src/love/dFunction/gBrand';
import Icon from "@mui/material/Icon";
import backgroundImageasd from "src/love/iTemplate/assets/images/bg-profile.jpeg";
import MDBadge from 'src/love/iTemplate/components/MDBadge';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';


const HomePageComponent = ({ Redux, ReduxUltimate }) => {
  return (
    <React.Fragment>
      <MDBox
        position="absolute"
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.image &&
            `${linearGradient(
              rgba(gradients.dark.main, 0),
              rgba(gradients.dark.state, 0)
            )}, url(${Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.image?.url || backgroundImageasd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MDBox px={1} width="100%" height="100vh" mx="auto">
          <Grid container spacing={1}  xs={12} lg={7} mx="auto" justifyContent="center" alignItems="center" height="100%">
            <Grid item >
              <MDBox
                p={2}
                textAlign="center"
              >
                {/* <MDTypography
                  variant="body1"
                  color="white"
                  textAlign="center"
                  mb={3}
                >
                  Welcome to the Administration
                </MDTypography> */}
                <MDBox>
                  <MDBadge badgeContent={Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle} color="primary" variant="gradient" size="lg" />
                </MDBox>
                <MDTypography
                  variant="h1"
                  color="white"
                  mt={1}
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["3xl"],
                    },
                  })}
                >
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.title}
                </MDTypography>
                <MDTypography
                  variant="body1"
                  color="white"
                  textAlign="center"
                  px={{ xs: 6, lg: 12 }}
                  mt={1}
                >
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.subtitle}
                </MDTypography>
                <MDTypography variant="body1" color="white" opacity={0.8} mt={3} mb={3} textAlign="center">
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.description}
                </MDTypography>

                <MDBox display="flex" justifyContent="center" >
                  {
                    Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.webLinks?.map((each, index) => {
                      return (
                        <MDBox mx={1} key={index} component="a" href={each?.url} target="_blank">
                          <MDButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
                            {each?.title}
                          </MDButton>
                        </MDBox>
                      )
                    })
                  }

                  {
                    ReduxUltimate.state.ReceivedObject?.ProfileRetrieve ? (
                      <MDBox mx={1}  component={Link} to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} >
                        <MDButton color="info">
                          Get Started
                        </MDButton>
                      </MDBox>
                    ) : (
                      <MDBox mx={1}  component={Link} to={FinalRouteName.AuthRoute.LoginRoute} >
                        <MDButton color="info">
                          Join Us
                        </MDButton>
                      </MDBox>
                    )
                  }
                </MDBox>
                <MDTypography variant="h6" color="white" mt={4} >
                  Follow us on
                </MDTypography>
                <MDBox display="flex" justifyContent="center" alignItems="center">
                  {Redux.state.ReceivedObject?.Retrieve?.HeroRetrieve?.socialLinks?.map((each, index) => {
                    return (
                      <MDTypography component="a" variant="body1" color="white" href={each?.url} mx={2} key={index}>
                        {/* <Icon fontSize="default">github</Icon>  */}
                        {
                          each?.title === "Instagram" ? <InstagramIcon/> : 
                          each?.title === "Linkedin" ? <LinkedInIcon/> : 
                          each?.title === "Github" ? <GitHubIcon/> : 
                          <PublicIcon/>
                        }
                      </MDTypography>
                    )
                  })}
                </MDBox>

              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </React.Fragment>
  )
}

export default HomePageComponent