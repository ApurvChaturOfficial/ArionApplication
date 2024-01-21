import React, { useEffect } from 'react'

// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from '@mui/icons-material';

import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "src/love/iTemplate/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "src/love/iTemplate/examples/Navbars/DashboardNavbar";
import Footer from "src/love/iTemplate/examples/Footer";
import ProfileInfoCard from "src/love/iTemplate/examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "src/love/iTemplate/examples/Lists/ProfilesList";
import DefaultProjectCard from "src/love/iTemplate/examples/Cards/ProjectCards/DefaultProjectCard";

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
import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";
import DataTable from "src/love/iTemplate/examples/Tables/DataTable";
import access from './component/access';

// Data


const ProfileRetrieveComponent = ({ Redux }) => {
  const { columns: pColumns, rows: pRows } = access(Redux);

  // JSX
  return (
    <React.Fragment>
      <MDBox mb={2} />
      <HeaderComponent Redux={Redux}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <ProfileInfoCard
                type="Critical"
                title="Critical Information"
                // description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no."
                image={Redux.state.ReceivedObject?.Retrieve?.image?.url || defaultUser}
                info={{
                  firstName: Redux.state.ReceivedObject?.Retrieve?.firstName || '-',
                  lastName: Redux.state.ReceivedObject?.Retrieve?.lastName || '-',
                  email: Redux.state.ReceivedObject?.Retrieve?.email || '-',
                  mobile: Redux.state.ReceivedObject?.Retrieve?.mobile || '-',
                }}
                shadow={false}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <ProfileInfoCard
                type="Basic"
                title="Basic Information"
                // description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no."
                image={Redux.state.ReceivedObject?.Retrieve?.coverImage?.url || defaultUser}
                info={{
                  title: Redux.state.ReceivedObject?.Retrieve?.title || '-',
                  subtitle: Redux.state.ReceivedObject?.Retrieve?.subtitle || '-',
                  description: Redux.state.ReceivedObject?.Retrieve?.description || '-',
                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                shadow={false}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={4}>
              <ProfileInfoCard
                type="More"
                title="More Information"
                // description="Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no."
                info={{
                  address: Redux.state.ReceivedObject?.Retrieve?.address ? `
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.lane}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.street}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.city}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.state}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.country}, 
                    ${Redux.state.ReceivedObject?.Retrieve?.address?.pinCode}, 
                  ` : '-',
                }}
                social={Redux.state.ReceivedObject?.Retrieve?.links?.map((each, index) => {
                  return ({
                    link: each?.url,
                    icon: each?.title === 'Instagram' ? <InstagramIcon /> : each?.title === "Twitter" ? <TwitterIcon /> : <Link />,
                    color: "facebook"
                  })
                })}
                shadow={false}
              />
            </Grid>
          </Grid>
        </MDBox>

        <MDBox pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h6" fontWeight="medium">
            Relation Information
          </MDTypography>
          {/* <MDBox mb={2} mt={2} lineHeight={1}>
            <MDTypography variant="button" color="text" fontWeight="light">
              {"Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no."}
            </MDTypography>
          </MDBox>
          <MDBox opacity={0.3}>
            <Divider />
          </MDBox> */}

          <MDBox mb={1}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Role: 
            </MDTypography>
          </MDBox>

          <MDBox display="flex" alignItems="center" mb={1} ml={2} mt={2}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Title: 
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color="text" ml={1}>
              {Redux.state.ReceivedObject?.Retrieve?.role?.aTitle}
            </MDTypography>
          </MDBox>

          <MDBox display="flex" alignItems="center" mb={1} ml={2} mt={2}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Sub Title: 
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color="text" ml={1}>
              {Redux.state.ReceivedObject?.Retrieve?.role?.aSubtitle}
            </MDTypography>
          </MDBox>

          <MDBox display="flex" alignItems="center" mb={1} ml={2} mt={2}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Menu Access: 
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color="text" ml={1}>
              Check the table below... You can't edit it by yourself
            </MDTypography>
          </MDBox>

        </MDBox>
        <MDBox p={2}>
          {Redux.state.ReceivedObject?.Retrieve?.role && <DataTable
            table={{ columns: pColumns, rows: pRows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={false}
            noEndBorder
          />}
        </MDBox>
        
      </HeaderComponent>
    </React.Fragment>
  )
}

export default ProfileRetrieveComponent