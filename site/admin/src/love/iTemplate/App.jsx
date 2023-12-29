import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "./love/eLayout/aGlobalLayout/extra/State";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "src/love/iTemplate/examples/Sidenav";
import Configurator from "src/love/iTemplate/examples/Configurator";

// Material Dashboard 2 React themes
import theme from "src/love/iTemplate/assets/theme";
import themeRTL from "src/love/iTemplate/assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "src/love/iTemplate/assets/theme-dark";
import themeDarkRTL from "src/love/iTemplate/assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import routes from "src/love/iTemplate/routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "src/love/iTemplate/context";

// Images
import brandWhite from "src/love/iTemplate/assets/images/logo-ct.png";
import brandDark from "src/love/iTemplate/assets/images/logo-ct-dark.png";
import GlobalLayout from "./love/eLayout/aGlobalLayout";
import AuthLayout from "./love/eLayout/bAuthLayout";
import RouteName from "./love/gRoute/RouteName";
import LoginPage from "./love/fPage/bAuthPage/aLoginPage";
import ContentLayout from "./love/eLayout/cContentLayout";
import RegisterPage from "./love/fPage/bAuthPage/bRegisterPage";
import ForgotPasswordPage from "./love/fPage/bAuthPage/cForgotPasswordPage";
import ResetPasswordPage from "./love/fPage/bAuthPage/dResetPasswordPage";
import HomePage from "./love/fPage/aGlobalPage/aHomePage";
import AboutPage from "./love/fPage/aGlobalPage/bAboutPage";
import ContactPage from "./love/fPage/aGlobalPage/cContactPage";
import BasePage from "./love/fPage/aGlobalPage/dBase/aList";
import BaseCreatePage from "./love/fPage/aGlobalPage/dBase/bCreate";
import BaseRetrievePage from "./love/fPage/aGlobalPage/dBase/cRetrieve";

export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  // Redux
	const Redux = {
		state: useSelector((fullState) => fullState.GlobalLayoutState),
		dispatch: useDispatch(),
		action: Action,
	};


  // JSX
  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard 2"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}

      {/* <DashboardLayout> */}
				{/* <DashboardNavbar /> */}

        <Routes>
          {getRoutes(routes)}

          <Route element={<GlobalLayout />} >
            <Route path="" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/base" element={<BasePage />} />
            <Route path="/base/create" element={<BaseCreatePage />} />
            <Route path="/base/retrieve" element={<BaseRetrievePage />} />
            {/* <Route path="/base/update" element={<AboutPage />} /> */}
            {/* <Route path="/base/delete" element={<AboutPage />} /> */}

            <Route element={<AuthLayout ReduxUltimate={Redux} />} >
              <Route path={RouteName.Auth.LoginRoute} element={<LoginPage ReduxUltimate={Redux} />} />
              <Route path={RouteName.Auth.RegisterRoute} element={<RegisterPage ReduxUltimate={Redux} />} />
              <Route path={RouteName.Auth.ForgotPasswordRoute} element={<ForgotPasswordPage />} />
              <Route path={`${RouteName.Auth.ResetPasswordRoute}/:token`} element={<ResetPasswordPage ReduxUltimate={Redux} />} />
            </Route>

            <Route element={<ContentLayout ReduxUltimate={Redux} />} >
              {/* <Route path="/profile" element={<ProfilePage ReduxUltimate={Redux} />} /> */}
              {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
            </Route>
          </Route>
          
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      {/* </DashboardLayout> */}
    </ThemeProvider>
  );
}
