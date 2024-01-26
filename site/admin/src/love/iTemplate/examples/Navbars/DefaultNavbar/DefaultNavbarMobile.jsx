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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Menu from "@mui/material/Menu";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";

// Material Dashboard 2 React example components
import DefaultNavbarLink from "src/love/iTemplate/examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import React from "react";
import MDAvatar from "src/love/iTemplate/components/MDAvatar";
import MDTypography from "src/love/iTemplate/components/MDTypography";

// Images
import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";
import { Link } from "react-router-dom";
import FinalRouteName from "src/love/gRoute/FinalRouteName";
import { Icon } from "@mui/material";


function DefaultNavbarMobile({ open, close, Redux, LogoutAPICall, light }) {
  const { width } = open && open.getBoundingClientRect();

  return (
    <Menu
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <MDBox px={0.5}>
        {Redux.state.RequiredObject?.Loading ? null :
          Redux.state.ReceivedObject?.ProfileRetrieve ? (
            <React.Fragment>
              <MDBox
                mx={1}
                p={1}
                display="flex"
                alignItems="center"
                sx={{ cursor: "pointer", userSelect: "none" }}
              >
                <MDBox display="flex" alignItems="center" lineHeight={0.5} >
                  <MDAvatar src={Redux.state.ReceivedObject?.ProfileRetrieve?.eImage?.url || defaultUser} size="sm" />
                  <MDBox ml={1} lineHeight={0.5} display="inline-block" >
                    <MDTypography display="block" variant="button" fontWeight="medium" color="dark">
                      {Redux.state.ReceivedObject?.ProfileRetrieve?.aTitle}
                    </MDTypography>
                    <MDTypography variant="caption" color="secondary">{Redux.state.ReceivedObject?.ProfileRetrieve?.cRole?.aTitle}</MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
              <DefaultNavbarLink light={light} icon="person" name="Profile" route={FinalRouteName.ContentRoute.TopbarRoute.ProfileRoute} />
              <DefaultNavbarLink light={light} icon="donut_large" name="Dashboard" route={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute} />
              <MDBox
                mx={1}
                p={1}
                display="flex"
                alignItems="center"
                sx={{ cursor: "pointer", userSelect: "none" }}
                onClick={() => LogoutAPICall()}
              >
                <Icon
                  sx={{
                    color: 'secondary.main',
                    verticalAlign: "middle",
                  }}
                >
                  logout
                </Icon>
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="dark"
                  textTransform="capitalize"
                  sx={{ width: "100%", lineHeight: 0 }}
                >
                  &nbsp;{"Logout"}
                </MDTypography>
              </MDBox>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <DefaultNavbarLink light={light} icon="account_circle" name="Register" route={FinalRouteName.AuthRoute.RegisterRoute} />
              <DefaultNavbarLink light={light} icon="key" name="Login" route={FinalRouteName.AuthRoute.LoginRoute} />
            </React.Fragment>

          )
        }

      </MDBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
