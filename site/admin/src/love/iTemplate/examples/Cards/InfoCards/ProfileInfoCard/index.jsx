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

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDAvatar from "src/love/iTemplate/components/MDAvatar";

// Material Dashboard 2 React base styles
import colors from "src/love/iTemplate/assets/theme/base/colors";
import typography from "src/love/iTemplate/assets/theme/base/typography";
import React from "react";
import defaultUser from "src/love/iTemplate/assets/images/default-user-image.jpg";

function ProfileInfoCard({ title, description, info, social, action, shadow, image, type }) {
  const labels = [];
  const values = [];
  const { socialMediaColors } = colors;
  const { size } = typography;

  // Convert this form `objectKey` of the object key in to this `object key`
  Object.keys(info).forEach((el) => {
    if (el.match(/[A-Z\s]+/)) {
      const uppercaseLetter = Array.from(el).find((i) => i.match(/[A-Z]+/));
      const newElement = el.replace(uppercaseLetter, ` ${uppercaseLetter.toLowerCase()}`);

      labels.push(newElement);
    } else {
      labels.push(el);
    }
  });

  // Push the object values into the values array
  Object.values(info).forEach((el) => values.push(el));

  // Render the card info items
  const renderItems = labels.map((label, key) => (
    <React.Fragment key={label}>
      <MDBox display="flex" pt={1}>
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          {label}: 
        </MDTypography>
      </MDBox>
      <MDBox display="flex" pb={1}>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {values[key]}
        </MDTypography>
      </MDBox>
    </React.Fragment>
  ));

  // Render the card social media icons
  const renderSocial = social?.map(({ link, icon, color }) => (
    <MDBox
      key={color}
      component="a"
      href={link}
      target="_blank"
      rel="noreferrer"
      fontSize={size.lg}
      color={socialMediaColors[color].main}
      pr={1}
      pl={0.5}
      lineHeight={1}
    >
      {icon}
    </MDBox>
  ));

  return (
    type === "Critical" ?
      <Card sx={{ height: "100%", width: "100%", boxShadow: !shadow && "none" }}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {title}
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          {/* <MDBox mb={2} lineHeight={1}>
            <MDTypography variant="button" color="text" fontWeight="light">
              {description}
            </MDTypography>
          </MDBox>
          <MDBox opacity={0.3}>
            <Divider />
          </MDBox> */}
          <MDBox>
            <MDBox display="flex" pt={1} pb={1}>
              <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                Image: 
              </MDTypography>
            </MDBox>
            <MDBox display="flex" pb={1}>
              <MDAvatar src={image || defaultUser} alt="profile-image" size="md" shadow="sm" />
            </MDBox>

            {renderItems}
           
          </MDBox>
        </MDBox>
      </Card>
    : type === "Basic" ?
      <Card sx={{ height: "100%", width: "100%", boxShadow: !shadow && "none" }}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {title}
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          {/* <MDBox mb={2} lineHeight={1}>
            <MDTypography variant="button" color="text" fontWeight="light">
              {description}
            </MDTypography>
          </MDBox>
          <MDBox opacity={0.3}>
            <Divider />
          </MDBox> */}
          <MDBox>
            <MDBox display="flex" pt={1} pb={1}>
              <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                Cover Image: 
              </MDTypography>
            </MDBox>
            <MDBox display="flex" pb={1}>
              <MDAvatar src={image || defaultUser} alt="profile-image" size="md" shadow="sm" />
            </MDBox>

            {renderItems}
            
          </MDBox>
        </MDBox>
      </Card>
    : type === "More" ?
      <Card sx={{ height: "100%", width: "100%", boxShadow: !shadow && "none" }}>
        <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
          <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {title}
          </MDTypography>
        </MDBox>
        <MDBox p={2}>
          {/* <MDBox mb={2} lineHeight={1}>
            <MDTypography variant="button" color="text" fontWeight="light">
              {description}
            </MDTypography>
          </MDBox>
          <MDBox opacity={0.3}>
            <Divider />
          </MDBox> */}
          <MDBox>
            {renderItems}
            <MDBox display="flex" py={1}>
              <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
                social: &nbsp;
              </MDTypography>
            </MDBox>
            <MDBox display="flex" pb={1}>
              {renderSocial}
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    : 
    <Card sx={{ height: "100%", width: "100%", boxShadow: !shadow && "none" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox mb={2} lineHeight={1}>
          <MDTypography variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox opacity={0.3}>
          <Divider />
        </MDBox>
        <MDBox>
          <MDBox display="flex" pt={1} pb={1}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
              Image: 
            </MDTypography>
          </MDBox>
          <MDBox display="flex" pb={1}>
            <MDAvatar src={image || defaultUser} alt="profile-image" size="md" shadow="sm" />
          </MDBox>

          {renderItems}
          
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  // social: PropTypes.arrayOf(PropTypes.object).isRequired,
  // action: PropTypes.shape({
  //   route: PropTypes.string.isRequired,
  //   tooltip: PropTypes.string.isRequired,
  // }).isRequired,
  shadow: PropTypes.bool,
};

export default ProfileInfoCard;
