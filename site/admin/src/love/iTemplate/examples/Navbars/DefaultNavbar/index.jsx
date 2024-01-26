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

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from 'src/love/aLayout/aGlobalLayout/extra/State';

// react-router components
import { Link, NavLink, useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDButton from "src/love/iTemplate/components/MDButton";
import MDAvatar from "src/love/iTemplate/components/MDAvatar";

// Material Dashboard 2 React example components
import DefaultNavbarLink from "src/love/iTemplate/examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "src/love/iTemplate/examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Material Dashboard 2 React base styles
import breakpoints from "src/love/iTemplate/assets/theme/base/breakpoints";

// Material Dashboard 2 React context
import { useMaterialUIController } from "src/love/iTemplate/context";

// Images
import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";

import FinalRouteName from "src/love/gRoute/FinalRouteName";
import APIs from "src/love/aLayout/aGlobalLayout/extra/APIs";
import brand from "src/love/dFunction/gBrand";

function DefaultNavbar({ transparent, light, action }) {
  // Variables
	const navigate = useNavigate()

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.GlobalLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};

  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <MDBox
        py={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={3}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="lg"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.sidenav : white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <MDBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          component={Link}
          to="/"
          py={transparent ? 1.5 : 0.75}
          lineHeight={1}
          pl={{ xs: 0, lg: 1 }}
        >
           <MDBox component="img" src={brand().logo} alt="Brand" width="2.5rem" mr={0.8}/>
          <MDTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
            {brand().name}
          </MDTypography>
        </MDBox>

        <MDBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          {Redux.state.RequiredObject?.Loading ? null :
            Redux.state.ReceivedObject?.ProfileRetrieve ? (
              <React.Fragment>
                <MDBox display="flex" alignItems="center" lineHeight={0.5} component={Link} to={FinalRouteName.ContentRoute.TopbarRoute.ProfileRoute} >
                  <MDAvatar src={Redux.state.ReceivedObject?.ProfileRetrieve?.eImage?.url || defaultUser} size="sm" />
                  <MDBox ml={1} lineHeight={0.5} display={{ xs: "none", lg: "inline-block" }} >
                    <MDTypography display="block" variant="button" fontWeight="medium" color={light ? "white" : "dark"}>
                      {`${Redux.state.ReceivedObject?.ProfileRetrieve?.eFirstName} ${Redux.state.ReceivedObject?.ProfileRetrieve?.eLastName}`}
                    </MDTypography>
                    <MDTypography variant="caption" color={light ? "white" : "secondary"}>{Redux.state.ReceivedObject?.ProfileRetrieve?.cRole?.aTitle}</MDTypography>
                  </MDBox>
                </MDBox>
                <MDBox
                  mx={2}
                  p={1}
                  display="flex"
                  alignItems="center"
                  sx={{ cursor: "pointer", userSelect: "none" }}
                  onClick={() => APIs.LogoutAPI(navigate, Redux)}
                >
                  <Icon
                    sx={{
                      color: ({ palette: { white, secondary } }) => (light ? white.main : secondary.main),
                      verticalAlign: "middle",
                    }}
                  >
                    logout
                  </Icon>
                </MDBox>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <DefaultNavbarLink
                  icon="account_circle"
                  name="Register"
                  route={FinalRouteName.AuthRoute.RegisterRoute}
                  light={light}
                />
                <DefaultNavbarLink
                  icon="key"
                  name="Login"
                  route={FinalRouteName.AuthRoute.LoginRoute}
                  light={light}
                />
              </React.Fragment>
            )
          }
        </MDBox>

        {action &&
          (action.type === "internal" ? (
            <MDBox display={{ xs: "none", lg: "inline-block" }}>
              <MDButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
              >
                {action.label}
              </MDButton>
            </MDBox>
          ) : (
            <MDBox display={{ xs: "none", lg: "inline-block" }}>
              <MDButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                sx={{ mt: -0.3 }}
              >
                {action.label}
              </MDButton>
            </MDBox>
          ))
        }
        <MDBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
        </MDBox>
      </MDBox>
      {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} Redux={Redux} LogoutAPICall={() => APIs.LogoutAPI(navigate, Redux)} light />}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
