import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDButton from 'src/love/iTemplate/components/MDButton';


const MainHeader = ({ Header }) => {
  return (
    <MDBox
      mx={2}
      mt={-3}
      py={3}
      px={2}
      variant="gradient"
      bgColor="info"
      borderRadius="lg"
      coloredShadow="info"
      display="flex" 
      justifyContent="space-between" 
      alignItems="center"
    >
      <MDTypography variant="h6" color="white"  >
        {Header.label}
      </MDTypography>
      <MDBox> 
        {
          Header.buttons.map((each, index) => {
            return (
              <MDButton size="small" variant="gradient" color="dark" key={index} component={Link} to={each.route}>
                <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                &nbsp;{each.label}
              </MDButton>
            )
          })
        }
      </MDBox>
    </MDBox>
  );
};

export default MainHeader;
