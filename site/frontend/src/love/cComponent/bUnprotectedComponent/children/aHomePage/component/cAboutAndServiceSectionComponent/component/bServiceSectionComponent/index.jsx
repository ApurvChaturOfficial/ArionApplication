

function ServiceSectionComponent({ Redux }) {
  return (
    <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
      <Grid container spacing={3}>
      {Redux.state.ReceivedObject?.Retrieve?.ServiceList?.map((each, index) => {
        return (
          <Grid item xs={12} md={6} key={index} >
            <DefaultInfoCard
              icon="content_copy"
              title={each.title}
              description={each.description}
            />
          </Grid>
        )
      })}
      </Grid>
    </Grid>
  );
}

export default ServiceSectionComponent;
