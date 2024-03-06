import AboutSectionComponent from "./component/aAboutSectionComponent";
import ServiceSectionComponent from "./component/bServiceSectionComponent";

function AboutAndServiceSectionComponent({ Redux }) {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <AboutSectionComponent Redux={Redux} />
          <ServiceSectionComponent Redux={Redux} />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutAndServiceSectionComponent;
