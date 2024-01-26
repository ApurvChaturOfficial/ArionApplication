import React from 'react'
import MDBox from 'src/love/iTemplate/components/MDBox'
import Grid from "@mui/material/Grid";
import brand from 'src/love/dFunction/gBrand';


const Loader = ({ text }) => {
  return (
    <MDBox
      position="absolute"
      width="100%"
      minHeight="100vh"
    >
      <MDBox px={1} width="100%" height="100vh" mx="auto">
        <Grid container spacing={1} mx="auto" justifyContent="center" alignItems="center" height="100%">
          <Grid item lg={7} xs={12}>
            <MDBox display="flex" flexDirection="column" mx="auto" p={2} textAlign="center" justifyContent="center" alignItems="center">
              <MDBox component="img" src={brand()?.logo} alt="Brand" width="4rem" mr={0.8}/>
              {text || "Loading..."}
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  )
}

export default Loader