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


const ProfileUpdateComponent = ({ Redux, EventHandler, OnClick }) => {
  const inputElement1 = useRef()
  const inputElement2 = useRef()

  // JSX
  return (
    <React.Fragment>
      <MDBox mb={2} />
      <HeaderComponent Redux={Redux} >
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
                  {/* <MDBox mb={2} lineHeight={1}>
                    <MDTypography variant="button" color="text" fontWeight="light">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                    </MDTypography>
                  </MDBox>
                  <MDBox opacity={0.3}>
                    <Divider />
                  </MDBox> */}
                  <MDBox>

                    {/* {renderItems} */}
                    <React.Fragment>
                      <MDBox display="flex" pt={1} pb={1}>
                        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                          Image: 
                        </MDTypography>
                      </MDBox>
                      <MDBox display="flex" alignItems="center" pb={1} px={2}>
                        <MDAvatar src={Redux.state.FormObject.FormValue?.image?.url || defaultUser} size="md" />
                        <MDBox ml={2}>
                          <MDButton 
                            size="small" 
                            variant="outlined" 
                            color="info" 
                            component={Link} 
                            onClick={() => inputElement1.current.click()}
                          >
                            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                            &nbsp;Choose Image
                          </MDButton>
                        </MDBox>
                      </MDBox>
                      <input type="file" name="image" style={{display: "none"}} ref={inputElement1} onChange={event => handleInput(event, Redux)} />
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="firstName"
                          label="First Name"
                          placeholder="First Name"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.firstName} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.lane}
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
                          name="lastName"
                          label="Last` Name"
                          placeholder="Last` Name"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.lastName} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.lane}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="email"  
                          name="email"
                          label="Email"
                          placeholder="Email"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.email} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.lane}
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
                          name="mobile"
                          label="Mobile"
                          placeholder="Mobile"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.mobile} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.lane}
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
            <Grid item xs={12} md={6} xl={4}>
              <Card sx={{ height: "100%", width: "100%", boxShadow: "none" }}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                  <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Critical Information
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  {/* <MDBox mb={2} lineHeight={1}>
                    <MDTypography variant="button" color="text" fontWeight="light">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                    </MDTypography>
                  </MDBox>
                  <MDBox opacity={0.3}>
                    <Divider />
                  </MDBox> */}
                  <MDBox>

                    {/* {renderItems} */}
                    <React.Fragment>
                      <MDBox display="flex" pt={1} pb={1}>
                        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                          Cover Image: 
                        </MDTypography>
                      </MDBox>
                      <MDBox display="flex" alignItems="center" pb={1} px={2}>
                        <MDAvatar src={Redux.state.FormObject.FormValue?.coverImage?.url || defaultUser} size="md" />
                        <MDBox ml={2}>
                          <MDButton 
                            size="small" 
                            variant="outlined" 
                            color="info" 
                            component={Link} 
                            onClick={() => inputElement2.current.click()}
                          >
                            <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                            &nbsp;Choose Image
                          </MDButton>
                        </MDBox>
                      </MDBox>
                      <input type="file" name="coverImage" style={{display: "none"}} ref={inputElement2} onChange={event => handleInput(event, Redux)} />
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>
                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" py={1} pr={2}>
                        <MDInput 
                          type="text"  
                          name="title"
                          label="Title"
                          placeholder="Title"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.title} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.title}
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
                          name="subtitle"
                          label="Sub Title"
                          placeholder="Sub Title"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.subtitle} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.subtitle}
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
                          name="description"
                          label="Description"
                          placeholder="Description"
                          onChange={event => handleInput(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.description} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.description}
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
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Card sx={{ height: "100%", width: "100%", boxShadow: "none" }}>
                <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
                  <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Critical Information
                  </MDTypography>
                </MDBox>
                <MDBox p={2}>
                  {/* <MDBox mb={2} lineHeight={1}>
                    <MDTypography variant="button" color="text" fontWeight="light">
                      Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no.
                    </MDTypography>
                  </MDBox>
                  <MDBox opacity={0.3}>
                    <Divider />
                  </MDBox> */}
                  <MDBox>

                    {/* {renderItems} */}
                    <React.Fragment>
                      <MDBox display="flex" pt={1} pb={1}>
                        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                          Address: 
                        </MDTypography>
                      </MDBox>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="lane"
                          label="Lane"
                          placeholder="Lane"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.lane} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.lane}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="street"
                          label="Street"
                          placeholder="Street"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.street} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.street}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="city"
                          label="City"
                          placeholder="City"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.city} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.city}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="state"
                          label="State"
                          placeholder="State"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.state} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.state}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="country"
                          label="Country"
                          placeholder="Country"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.country} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.country}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>

                      <MDBox display="flex" pb={1} px={2}>
                        <MDInput 
                          type="text"  
                          name="pinCode"
                          label="Pin Code"
                          placeholder="Pin Code"
                          onChange={(event) => EventHandler.Address.Change(event, Redux)}  
                          value={Redux.state.FormObject.FormValue?.address?.pinCode} 
                          fullWidth 
                          error={Redux.state.FormObject.FormError?.address?.pinCode}
                        />
                      </MDBox>
                      <MDTypography variant="caption" color='error'>
                        {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                      </MDTypography>

                    </React.Fragment>

                    <React.Fragment>
                      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={1} pb={1}>
                        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                          Links: 
                        </MDTypography>
                        <MDButton variant="gradient" color="info" iconOnly size="small"
                          onClick={() => EventHandler.Link.Add(Redux)}
                        >
                          <Icon>add</Icon>
                        </MDButton>
                      </MDBox>

                      {Redux.state.FormObject.FormValue?.links?.map((each, index) => {
                        return (
                          <React.Fragment key={index}>
                            <MDBox display="flex" pb={1}>
                              <MDBox display="flex">
                                <MDInput 
                                  type="text"  
                                  name="title"
                                  label="Title"
                                  placeholder="Title"
                                  onChange={(event) => EventHandler.Link.Change(event, Redux, index)}  
                                  value={each?.title} 
                                  error={Redux.state.FormObject.FormError?.address?.lane}
                                />
                              </MDBox>
                              <MDTypography variant="caption" color='error'>
                                {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                              </MDTypography>

                              <MDBox display="flex">
                                <MDInput 
                                  type="text"  
                                  name="url"
                                  label="URL"
                                  placeholder="URL"
                                  onChange={(event) => EventHandler.Link.Change(event, Redux, index)}  
                                  value={each?.url} 
                                  error={Redux.state.FormObject.FormError?.address?.lane}
                                />
                              </MDBox>
                              <MDTypography variant="caption" color='error'>
                                {/* {Redux.state.FormObject.FormError?.[each1.name]} */}
                              </MDTypography>

                              <MDBox display="flex" justifyContent="space-between" alignItems="center">
                                <MDButton variant="gradient" color="info" iconOnly size="small"
                                  onClick={() => EventHandler.Link.Remove(Redux, index)}
                                >
                                  <Icon>remove</Icon>
                                </MDButton>                              
                              </MDBox>
                            </MDBox>
                          </React.Fragment>
                        )
                      })}
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
            Update Profile
          </MDButton>
        </MDBox>

        {/* <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Projects
          </MDTypography>
          <MDBox mb={1}>
            <MDTypography variant="button" color="text">
              Architects design houses
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label="project #2"
                title="modern"
                description="As Uber works through a huge amount of internal management turmoil."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label="project #1"
                title="scandinavian"
                description="Music is something that everyone has their own specific opinion about."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team3, name: "Nick Daniel" },
                  { image: team4, name: "Peterson" },
                  { image: team1, name: "Elena Morison" },
                  { image: team2, name: "Ryan Milly" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label="project #3"
                title="minimalist"
                description="Different people have different taste, and various types of music."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label="project #4"
                title="gothic"
                description="Why would anyone pick blue over pink? Pink is obviously a better color."
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view project",
                }}
                authors={[
                  { image: team4, name: "Peterson" },
                  { image: team3, name: "Nick Daniel" },
                  { image: team2, name: "Ryan Milly" },
                  { image: team1, name: "Elena Morison" },
                ]}
              />
            </Grid>
          </Grid>
        </MDBox> */}
      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfileUpdateComponent