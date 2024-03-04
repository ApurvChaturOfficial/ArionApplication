/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";


// Material Dashboard 2 React components
import MDBox from "@/love/iTemplate/components/MDBox";
import MDTypography from "@/love/iTemplate/components/MDTypography";
import MDAvatar from "@/love/iTemplate/components/MDAvatar";

// Material Dashboard 2 React base styles
import breakpoints from "@/love/iTemplate/assets/theme/base/breakpoints";

// Images
import burceMars from "@/love/iTemplate/assets/images/bruce-mars.jpg";
import backgroundImage from "@/love/iTemplate/assets/images/bg-profile.jpeg";
import MDButton from "@/love/iTemplate/components/MDButton";
import { Link } from "react-router-dom";
import FinalRouteName from "@/love/gRoute/FinalRouteName";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";


function HeaderComponent({ Redux, children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
	const navigate = useNavigate()

  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);


  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.1),
              rgba(gradients.info.state, 0.1)
            )}, url(${Redux.state.ReceivedObject?.Retrieve?.coverImage?.url || backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <MDAvatar src={Redux.state.ReceivedObject?.Retrieve?.image?.url || burceMars} alt="profile-image" size="xl" shadow="sm" />
          </Grid>
          <Grid item display="flex" justifyContent="space-between" >
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                {`${Redux.state.ReceivedObject?.Retrieve?.firstName} ${Redux.state.ReceivedObject?.Retrieve?.lastName}`}
              </MDTypography>
              <MDTypography variant="button" color="text" fontWeight="regular">
                {`${Redux.state.ReceivedObject?.Retrieve?.email} (${Redux.state.ReceivedObject?.Retrieve?.role?.aTitle})`}
              </MDTypography>
            </MDBox>
            <MDBox color="text" px={2}>
              <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
                more_vert
              </Icon>
            </MDBox>
            <Menu
              id="simple-menu"
              anchorEl={menu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(menu)}
              onClose={closeMenu}
            >
              <MenuItem onClick={() => navigate(FinalRouteName.ContentRoute.TopbarRoute.ProfileRoute)}>View Profile</MenuItem>
              <MenuItem onClick={() => navigate(FinalRouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute)}>Update Profile</MenuItem>
              <MenuItem onClick={() => navigate(FinalRouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute)}>Update Password</MenuItem>
              <MenuItem onClick={() => navigate(FinalRouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute)}>Close Account</MenuItem>
            </Menu>          
          </Grid>
          {/* <Grid item xs={12} md={6} lg={6} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <MDBox display="flex" justifyContent="space-between" alignItems="center">
                <MDButton
                  component={Link}
                  to={FinalRouteName.ContentRoute.TopbarRoute.ProfileRoute}
                  variant="outlined"
                  size="small"
                  color={'info'}
                >
                  Retrieve
                </MDButton>
                <MDButton
                  component={Link}
                  to={FinalRouteName.ContentRoute.TopbarRoute.ProfileUpdateRoute}
                  variant="outlined"
                  size="small"
                  color={'info'}
                >
                  Update
                </MDButton>
                <MDButton
                  component={Link}
                  to={FinalRouteName.ContentRoute.TopbarRoute.ProfilePasswordUpdateRoute}
                  variant="outlined"
                  size="small"
                  color={'info'}
                >
                  Change Password
                </MDButton>
                <MDButton
                  component={Link}
                  to={FinalRouteName.ContentRoute.TopbarRoute.ProfileDeleteRoute}
                  variant="outlined"
                  size="small"
                  color={'info'}
                >
                  Close Account
                </MDButton>
              </MDBox>
            </AppBar>
          </Grid> */}
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the HeaderComponent
HeaderComponent.defaultProps = {
  children: "",
};

// Typechecking props for the HeaderComponent
HeaderComponent.propTypes = {
  children: PropTypes.node,
};

export default HeaderComponent;
