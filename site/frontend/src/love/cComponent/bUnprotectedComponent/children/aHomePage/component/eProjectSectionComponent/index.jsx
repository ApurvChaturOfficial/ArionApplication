

function ProjectSectionComponent({ Redux }) {
  const renderData = Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve?.projectGroups?.map((each, index) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={index}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKBadge
            variant="contained"
            color="info"
            badgeContent={each.subtitle}
            container
            circular
            sx={{ mb: 1 }}
          />
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {each.title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {each.description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {each?.projects?.map((each1, index1) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={index1}>
              <ExampleCard image={each1.image.url} name={each1.title} subtitle={each1.subtitle} pro={!each1.status} links={each1.links} badge={each1.description} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

  ));

  return (
    Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve &&  
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
            badgeContent={Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve?.subtitle}
            container
            sx={{ mb: 2 }}
          /> */}
          <MKTypography variant="h2" fontWeight="bold">
            {Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve?.title}
          </MKTypography>
          <MKTypography variant="body1" color="text">
            {Redux.state.ReceivedObject?.Retrieve?.ProjectSectionRetrieve?.description}
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default ProjectSectionComponent;
