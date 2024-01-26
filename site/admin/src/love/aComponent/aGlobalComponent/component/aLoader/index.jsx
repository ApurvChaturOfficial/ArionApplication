import React from 'react'
import MDBox from 'src/love/iTemplate/components/MDBox'
import Grid from "@mui/material/Grid";


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
            <MDBox p={2} textAlign="center" >
              {text || "Loading..."}
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  )
}

export default Loader