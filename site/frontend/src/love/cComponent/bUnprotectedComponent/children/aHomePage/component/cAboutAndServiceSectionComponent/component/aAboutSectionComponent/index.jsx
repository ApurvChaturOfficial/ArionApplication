import React from "react";

function AboutSectionComponent({ Redux }) {
  return (
    <React.Fragment>
        {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually &&
          <React.Fragment>
            image={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.image?.url}
            icon="touch_app"
            title={
              <>
                {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.title}
              </>
            }
            description={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.subtitle}
          </React.Fragment>
        }
        {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively &&
          <React.Fragment>
            image={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.image?.url}
            title={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.title}
            description={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.subtitle}
            action={{
              type: "internal",
              route: "",
              label: "More About Us",
            }}
          </React.Fragment>
        }
    </React.Fragment>
  );
}

export default AboutSectionComponent;
