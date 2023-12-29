

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "src/love/iTemplate/components/MKBox";
import MKBadge from "src/love/iTemplate/components/MKBadge";
import MKTypography from "src/love/iTemplate/components/MKTypography";

// Presentation page components
import ExampleCard from "src/love/iTemplate/pages/Presentation/components/ExampleCard";

// Data
import data from "src/love/iTemplate/pages/Presentation/sections/data/pagesData";

function ProgramSectionComponent({ Redux }) {
  const renderData = Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve?.programs?.map((each, index) => (
    <Grid item xs={12} md={4} sx={{ mb: 2 }} key={index}>
      <ExampleCard image={each.image.url} name={each.title} subtitle={each.subtitle} pro={!each.status} links={each.links} />
    </Grid>
  ));

  return (
    Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve &&  
    <MKBox component="section" py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          {/* <MKBadge
            variant="contained"
            color="info"
            badgeContent={Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve?.subtitle}
            container
            sx={{ mb: 2 }}
          /> */}
          <MKTypography variant="h2" fontWeight="bold">
            {Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve?.title}
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {Redux.state.ReceivedObject?.Retrieve?.ProgramSectionRetrieve?.description}
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: { xs: 8, lg: 16 } }}>
        <Grid container spacing={3} sx={{ mb: 10 }} >
          {renderData}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ProgramSectionComponent;
