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


const ProfilePasswordUpdateComponent = ({ Redux, EventHandler, OnClick }) => {
  const inputElement1 = useRef()
  const inputElement2 = useRef()

  // JSX
  return (
    <React.Fragment>
      <MDBox mb={2} />
      <HeaderComponent>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ height: "100%", width: "100%", boxShadow: "none" }}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                  <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Critical Information
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mb={2} lineHeight={1}>
                    <MDTypography variant="button" color="text" fontWeight="light">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                    </MDTypography>
                  </MDBox>
                  <MDBox opacity={0.3}>
                    <Divider />
                  </MDBox>
                  <MDBox>

                    {/* {renderItems} */}
                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="oldPassword"
                          label="Old Password"
                          placeholder="Old Password"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.oldPassword} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.oldPassword}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="newPassword"
                          label="New Password"
                          placeholder="New Password"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.newPassword} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.newPassword}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="confirmPassword"
                          label="Confirm Password"
                          placeholder="Confirm Password"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.confirmPassword} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.confirmPassword}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>
                    </React.Fragment>

                  </MDBox>
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox
          py={3}
          px={2}
          display="flex" 
          justifyContent="left" 
        >
          <MDButton size="small" variant="gradient" color="info" onClick={OnClick}>
            <Icon>edit</Icon>&nbsp;
            Update Password
          </MDButton>
        </MDBox>

      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfilePasswordUpdateComponent