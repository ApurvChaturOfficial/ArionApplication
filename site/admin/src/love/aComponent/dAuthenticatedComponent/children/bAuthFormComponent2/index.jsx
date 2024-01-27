import React from 'react'
import { Link } from 'react-router-dom';

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "src/love/iTemplate/components/MDBox";
import MDTypography from "src/love/iTemplate/components/MDTypography";
import MDInput from "src/love/iTemplate/components/MDInput";
import MDButton from "src/love/iTemplate/components/MDButton";
import MDAlert from 'src/love/iTemplate/components/MDAlert';


const AuthFormComponent2 = ({ Data, Redux, ReduxUltimate }) => {
  const alertContent = (name) => (
    <MDTypography variant="button" color="white">
      Login with this sample user{" "}
      <MDBox>
        <MDTypography variant="button" fontWeight="medium" color="white">
          {
            import.meta.env.VITE_APPLICATION === "BeehiveApplication" ? "shraddha.kapoor@beehive.com" :
            import.meta.env.VITE_APPLICATION === "AndromedaApplication" ? "shraddha.kapoor@andromeda.com" :
            import.meta.env.VITE_APPLICATION === "PinwheelApplication" ? "shraddha.kapoor@pinwheel.com" :
            import.meta.env.VITE_APPLICATION === "TadpoleApplication" ? "shraddha.kapoor@tadpole.com" :
            import.meta.env.VITE_APPLICATION === "AcruxApplication" ? "shraddha.kapoor@acrux.com" :
            import.meta.env.VITE_APPLICATION === "AnserApplication" ? "shraddha.kapoor@anser.com" :
            import.meta.env.VITE_APPLICATION === "AquilaApplication" ? "shraddha.kapoor@aquila.com" :
            import.meta.env.VITE_APPLICATION === "BellatrixApplication" ? "shraddha.kapoor@bellatrix.com" :
            import.meta.env.VITE_APPLICATION === "CapellaApplication" ? "shraddha.kapoor@capella.com" :
            import.meta.env.VITE_APPLICATION === "ArionApplication" ? "shraddha.kapoor@arion.com" :
            import.meta.env.VITE_APPLICATION === "AnkasApplication" ? "shraddha.kapoor@ankas.com" :
            import.meta.env.VITE_APPLICATION === "AbolApplication" ? "shraddha.kapoor@abol.com" :
            import.meta.env.VITE_APPLICATION === "TechfolioApplication" ? "shraddha.kapoor@techfolio.com" :
            import.meta.env.VITE_APPLICATION === "ApurvChaturApplication" ? "shraddha.kapoor@apurvchatur.com" :
            import.meta.env.VITE_APPLICATION === "AnushreeMandapeApplication" ? "shraddha.kapoor@anushreemandape.com" :
            import.meta.env.VITE_APPLICATION === "SofieBerkinApplication" ? "shraddha.kapoor@sofieberkin.com" :
            null
          }
        </MDTypography>
      </MDBox>
      <MDBox>
        <MDTypography variant="button" fontWeight="medium" color="white">
          Password: {" "}
        </MDTypography>
        <MDTypography variant="button" color="white">
          Shraddha@123
        </MDTypography>
      </MDBox>
      <MDBox>
        <MDTypography variant="button" fontWeight="medium" color="white">
          Role: {" "}
        </MDTypography>
        <MDTypography variant="button" color="white">
          Super Admin
        </MDTypography>
      </MDBox>
    </MDTypography>
  );

  // JSX
  return (
    <Card>
      <MDBox
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        mx={2}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
        <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
          {Data.title}
        </MDTypography>
        {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
          <Grid item xs={2}>
            <MDTypography component={MuiLink} href="#" variant="body1" color="white">
              <FacebookIcon color="inherit" />
            </MDTypography>
          </Grid>
          <Grid item xs={2}>
            <MDTypography component={MuiLink} href="#" variant="body1" color="white">
              <GitHubIcon color="inherit" />
            </MDTypography>
          </Grid>
          <Grid item xs={2}>
            <MDTypography component={MuiLink} href="#" variant="body1" color="white">
              <GoogleIcon color="inherit" />
            </MDTypography>
          </Grid>
        </Grid> */}
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
        <MDAlert mt={-3} color="secondary">
          {alertContent()}
        </MDAlert>
        {
          ReduxUltimate.state.RequiredObject?.Loading ? "Loading..."
          :
          <MDBox component="form" role="form">
            {
              Data.inputs.map((each, index) => {
                return (
                  <React.Fragment key={index} >
                    <MDBox mb={2}>
                      <MDInput 
                        type={each.type}  
                        name={each.name}
                        label={each.label}
                        placeholder={each.placeholder} 
                        onChange={each.onChange}  
                        fullWidth 
                        error={Redux.state.FormObject.FormError?.[each.name]}
                      />
                      <MDTypography variant="caption" color='error'>
                        {Redux.state.FormObject.FormError?.[each.name]}
                      </MDTypography>
                    </MDBox>
                  </React.Fragment>
                )
              })
            }

            {
              Data.buttons.map((each, index) =>  {
                return (
                  <MDBox mt={2} mb={1} key={index}>
                    <MDButton variant="gradient" color="info" fullWidth onClick={each.onClick}>
                      {each.label}
                    </MDButton>
                  </MDBox>
                )
              })
            }

            <MDBox mt={1} textAlign="center" >
              {
                Data.links.map((each, index) => {
                  return (
                    <MDBox textAlign="center" key={index}>
                      <MDTypography variant="button" color="text">
                        {each?.note}{" "}
                        <MDTypography
                          component={Link}
                          to={each.route}
                          variant="button"
                          color="info"
                          fontWeight="medium"
                          textGradient
                        >
                          {each.label}
                        </MDTypography>
                      </MDTypography>
                    </MDBox>
                  )
                })
              }
            </MDBox>
          </MDBox>
        }
      </MDBox>
    </Card>
  )
}

export default AuthFormComponent2