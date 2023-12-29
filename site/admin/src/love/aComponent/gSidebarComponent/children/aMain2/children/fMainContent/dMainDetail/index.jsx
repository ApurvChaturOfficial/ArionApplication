import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDAvatar from 'src/love/iTemplate/components/MDAvatar';
import MDButton from 'src/love/iTemplate/components/MDButton';

import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";


const MainDetail = ({ Content, Component, DeleteAPI }) => {
  return (
    <React.Fragment>
      {Component === "Delete" &&
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="h5" fontWeight="medium">
            Are yo sure you want to delete this object?
          </MDTypography>
          <MDButton variant="gradient" size="small" color="error"  onClick={() => DeleteAPI()}>
            <Icon sx={{ fontWeight: "bold" }}>delete</Icon>
            &nbsp;Sure, Delete
          </MDButton>
        </MDBox>
      }

      <MDBox pt={3}>
        <Grid container spacing={1}>
          {
            Content.detail.cards?.map((each, index) => {
              return (
                each.display && 
                <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }} key={index}> 
                  <Card sx={{ height: "100%", width: "100%", boxShadow: true && "none" }}>
                    <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                      <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                        {each.title}
                      </MDTypography>
                      {/* <MDTypography component={Link} to={"action.route"} variant="body2" color="secondary">
                        <Tooltip title={"action.tooltip"} placement="top">
                          <Icon>edit</Icon>
                        </Tooltip>
                      </MDTypography> */}
                    </MDBox>
                    <MDBox p={2}>
                      {/* <MDBox mb={2} lineHeight={1}>
                        <MDTypography variant="button" color="text" fontWeight="light">
                          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).
                        </MDTypography>
                      </MDBox>
                      <MDBox opacity={0.3}>
                        <Divider />
                      </MDBox> */}
                      <MDBox>
                        {
                          each.values?.map((each1, index1) => {
                            return (
                              <React.Fragment key={index1} >
                                <MDBox display="flex" alignItems="center" py={1} pr={2}>
                                  <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                                    {each1.label}: &nbsp;
                                  </MDTypography>
                                  {
                                    each1?.type === 'file' ?
                                      <MDBox ml={1}>
                                        <MDAvatar 
                                          src={each1.value || defaultUser} 
                                          size="lg" 
                                        />
                                      </MDBox>
                                      :
                                      <MDTypography variant="button" fontWeight="regular" color="text">
                                        &nbsp;{each1.value}
                                      </MDTypography>
                                  }
                                </MDBox>
                              </React.Fragment>
                            )
                          })
                        }
                      </MDBox>
                    </MDBox>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </MDBox>
    </React.Fragment>
  );
};

export default MainDetail;
