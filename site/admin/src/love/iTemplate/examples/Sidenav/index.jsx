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

import React, { useEffect } from "react";

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDButton from "src/love/iTemplate/components/MDButton";

// Material Dashboard 2 React example components
import SidenavCollapse from "src/love/iTemplate/examples/Sidenav/SidenavCollapse";

// Custom styles for the Sidenav
import SidenavRoot from "src/love/iTemplate/examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "src/love/iTemplate/examples/Sidenav/styles/sidenav";

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "src/love/iTemplate/context";
import FinalRouteName from "src/love/gRoute/FinalRouteName";
import RouteName from "src/love/gRoute/RouteName";

function Sidenav({ ReduxUltimate, color, brand, brandName, brandApp, routes, ...rest }) {
  const [controller, dispatch] = useMaterialUIController();
  const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
  const location = useLocation();
  const collapseName = location.pathname.replace("/", "");

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(dispatch, window.innerWidth < 1200 ? false : transparentSidenav);
      setWhiteSidenav(dispatch, window.innerWidth < 1200 ? false : whiteSidenav);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, href, route }) => {
    let returnValue;

    if (type === "collapse") {
      returnValue = href ? (
        <Link
          href={href}
          key={key}
          target="_blank"
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        >
          <SidenavCollapse
            name={name}
            icon={icon}
            active={key === collapseName}
            noCollapse={noCollapse}
          />
        </Link>
      ) : (
        <NavLink key={key} to={route}>
          <SidenavCollapse name={name} icon={icon} active={key === collapseName} />
        </NavLink>
      );
    } else if (type === "title") {
      returnValue = (
        <MDTypography
          key={key}
          color={textColor}
          display="block"
          variant="caption"
          fontWeight="bold"
          textTransform="uppercase"
          pl={3}
          mt={2}
          mb={1}
          ml={1}
        >
          {title}
        </MDTypography>
      );
    } else if (type === "divider") {
      returnValue = (
        <Divider
          key={key}
          light={
            (!darkMode && !whiteSidenav && !transparentSidenav) ||
            (darkMode && !transparentSidenav && whiteSidenav)
          }
        />
      );
    }

    return returnValue;
  });

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MDTypography>
        </MDBox>
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && <MDBox component="img" src={brand} alt="Brand" width="2.5rem" mr={0.8}/>}
          <MDBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <MDTypography component="h6" variant="button" fontWeight="medium" color={textColor}>
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
      <Divider
        light={
          (!darkMode && !whiteSidenav && !transparentSidenav) ||
          (darkMode && !transparentSidenav && whiteSidenav)
        }
      />

      {ReduxUltimate.state.RequiredObject?.Loading ? null :
        ReduxUltimate.state.ReceivedObject?.ProfileRetrieve && (
          <List>
            {/* {renderRoutes} */}


            { 
              import.meta.env.VITE_CORPORATION === "BeehiveCorporation" ? (
                  import.meta.env.VITE_ORGANISATION === "AndromedaOrganisation" ? (
                    import.meta.env.VITE_ENTERPRISE === "AcruxEnterprise" ? (
                      import.meta.env.VITE_APPLICATION === "ArionApplication" || 
                      import.meta.env.VITE_APPLICATION === "AnkasApplication" || 
                      import.meta.env.VITE_APPLICATION === "AbolApplication" ? (
                        <React.Fragment>
                          {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
                            <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}>
                              <SidenavCollapse 
                                name={"Hero"} 
                                icon={<Icon fontSize="small">person_4</Icon>} 
                                active={
                                  collapseName === 
                                    RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute           
                                }
                              />
                            </NavLink>
                          }
        
                          {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
                            <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}>
                              <SidenavCollapse 
                                name={"Counter"} 
                                icon={<Icon fontSize="small">looks_3</Icon>} 
                                active={
                                  collapseName === 
                                    RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute            
                                }
                              />
                            </NavLink>
                          }
        
                          {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program Section')[0]?.access?.list &&
                            <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute}>
                              <SidenavCollapse 
                                name={"Program Section"} 
                                icon={<Icon fontSize="small">forest</Icon>} 
                                active={
                                  collapseName === 
                                    RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute            
                                }
                              />
                            </NavLink>
                          }
        
                          {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program')[0]?.access?.list &&
                            <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute}>
                              <SidenavCollapse 
                                name={"Program"} 
                                icon={<Icon fontSize="small">park</Icon>} 
                                active={
                                  collapseName === 
                                    RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute            
                                }
                              />
                            </NavLink>
                          }
                        </React.Fragment>    
                      ) : null
                    ) :
                    import.meta.env.VITE_ENTERPRISE === "AnserEnterprise" ? ({}) : null
                  ) :
                  import.meta.env.VITE_ORGANISATION === "PinwheelOrganisation" ? (
                    import.meta.env.VITE_APPLICATION === "BeehiveApplication" ||
                    import.meta.env.VITE_APPLICATION === "AndromedaApplication" ||
                    import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? ( 
                      <React.Fragment>
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Hero"} 
                              icon={<Icon fontSize="small">person_4</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute           
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Counter"} 
                              icon={<Icon fontSize="small">looks_3</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"About"} 
                              icon={<Icon fontSize="small">info</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Service"} 
                              icon={<Icon fontSize="small">room_service</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Branch Section')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Branch Section"} 
                              icon={<Icon fontSize="small">web</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.BranchRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Branch Group')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Branch Group"} 
                              icon={<Icon fontSize="small">layers</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.SubBranchRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Branch')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Branch"} 
                              icon={<Icon fontSize="small">article</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.SubSubBranchRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Section')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Project Section"} 
                              icon={<Icon fontSize="small">account_tree</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Group')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Project Group"} 
                              icon={<Icon fontSize="small">forest</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Project"} 
                              icon={<Icon fontSize="small">park</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
                      </React.Fragment>    
                    ) :
                    import.meta.env.VITE_APPLICATION === "PinwheelApplication" ||
                    import.meta.env.VITE_APPLICATION === "AcruxApplication" ||
                    import.meta.env.VITE_APPLICATION === "AnserApplication" ||
                    import.meta.env.VITE_APPLICATION === "AquilaApplication" ||
                    import.meta.env.VITE_APPLICATION === "BellatrixApplication" ||
                    import.meta.env.VITE_APPLICATION === "CapellaApplication" ? (
                      <React.Fragment>
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Hero"} 
                              icon={<Icon fontSize="small">person_4</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute           
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Counter"} 
                              icon={<Icon fontSize="small">looks_3</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"About"} 
                              icon={<Icon fontSize="small">info</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Service"} 
                              icon={<Icon fontSize="small">room_service</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Section')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Project Section"} 
                              icon={<Icon fontSize="small">account_tree</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectSectionRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project Group')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Project Group"} 
                              icon={<Icon fontSize="small">forest</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectGroupRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
      
                        {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Project')[0]?.access?.list &&
                          <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute}>
                            <SidenavCollapse 
                              name={"Project"} 
                              icon={<Icon fontSize="small">park</Icon>} 
                              active={
                                collapseName === 
                                  RouteName.ContentRoute.SidebarRoute.MainRoute.ProjectRoute.ListRoute            
                              }
                            />
                          </NavLink>
                        }
                      </React.Fragment>    
                    ) : null
                  ) :
                  import.meta.env.VITE_ORGANISATION === "TadpoleOrganisation" ? (
                    import.meta.env.VITE_ENTERPRISE === "AquilaEnterprise" ? ({}) :
                    import.meta.env.VITE_ENTERPRISE === "BellatrixEnterprise" ? (
                      import.meta.env.VITE_FIRM === "TechfolioFirm" ? (
                        import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? ( 
                          <React.Fragment>
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Hero"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
          
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Counter')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Counter"} 
                                  icon={<Icon fontSize="small">looks_3</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.CounterRoute.ListRoute            
                                  }
                                />
                              </NavLink>
                            }
          
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program Section')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Program Section"} 
                                  icon={<Icon fontSize="small">forest</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramSectionRoute.ListRoute            
                                  }
                                />
                              </NavLink>
                            }
          
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Program')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Program"} 
                                  icon={<Icon fontSize="small">park</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.ProgramRoute.ListRoute            
                                  }
                                />
                              </NavLink>
                            }
                          </React.Fragment>    
                        ) :
                        import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ||
                        import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ||
                        import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? ( 
                          <React.Fragment>
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Hero')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Hero"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.HeroRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'About')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"About"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.AboutRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Experience')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Experience"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.ExperienceRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Service')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Service"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.ServiceRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Portfolio')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Portfolio"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Portfolio Card')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Portfolio Card"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.PortfolioCardRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Event')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Event"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.EventRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Event Card')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Event Card"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.EventCardRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Blog')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Blog"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.BlogRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                            
                            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Blog Card')[0]?.access?.list &&
                              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.ListRoute}>
                                <SidenavCollapse 
                                  name={"Blog Card"} 
                                  icon={<Icon fontSize="small">person_4</Icon>} 
                                  active={
                                    collapseName === 
                                      RouteName.ContentRoute.SidebarRoute.MainRoute.BlogCardRoute.ListRoute           
                                  }
                                />
                              </NavLink>
                            }
                          </React.Fragment>        
                        ) : null
                      ) : null
                    ) :
                    import.meta.env.VITE_ENTERPRISE === "CapellaEnterprise" ? ({}) : null
                  ) : null
                ) : null 
            }
            
            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'User')[0]?.access?.list &&
              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.ListRoute}>
                <SidenavCollapse 
                  name={"User"} 
                  icon={<Icon fontSize="small">storage</Icon>} 
                  active={
                    collapseName === 
                      RouteName.ContentRoute.SidebarRoute.AdministrationRoute.UserRoute.ListRoute            
                  }
                />
              </NavLink>
            }

            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Role')[0]?.access?.list &&
              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.ListRoute}>
                <SidenavCollapse 
                  name={"Role"} 
                  icon={<Icon fontSize="small">sports</Icon>} 
                  active={
                    collapseName === 
                      RouteName.ContentRoute.SidebarRoute.AdministrationRoute.RoleRoute.ListRoute            
                  }
                />
              </NavLink>
            }

            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Menu')[0]?.access?.list &&
              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.ListRoute}>
                <SidenavCollapse 
                  name={"Menu"} 
                  icon={<Icon fontSize="small">foundation</Icon>} 
                  active={
                    collapseName === 
                      RouteName.ContentRoute.SidebarRoute.AdministrationRoute.MenuRoute.ListRoute            
                  }
                />
              </NavLink>
            }

            {ReduxUltimate.state.ReceivedObject?.ProfileRetrieve?.cRole?.cMenus?.filter(each => each?.menu?.aTitle === 'Base')[0]?.access?.list &&
              <NavLink to={FinalRouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.ListRoute}>
                <SidenavCollapse 
                  name={"Base"} 
                  icon={<Icon fontSize="small">crib</Icon>} 
                  active={
                    collapseName === 
                      RouteName.ContentRoute.SidebarRoute.SettingRoute.BaseRoute.ListRoute            
                  }
                />
              </NavLink>
            }

          </List>
        )
      }

      <MDBox p={2} mt="auto">
        <MDButton
          component="a"
          href={brandApp}
          target="_blank"
          rel="noreferrer"
          variant="gradient"
          color={sidenavColor}
          fullWidth
        >
          visit application
        </MDButton>
      </MDBox>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
