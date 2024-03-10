import { Separator } from "@/components/ui/separator";
import React from "react";

function AboutSectionComponent({ Redux }) {
  return (
    <React.Fragment>
      {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually &&
        <React.Fragment>
          <img src={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.image?.url} alt="Actually" width={"25%"} />
          {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.title} <br/>
          {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.subtitle} <br/>
          {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.actually?.description} <br/>
        </React.Fragment>
      }
      {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively &&
        <React.Fragment>
          <img src={Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.image?.url} alt="Comparatively" width={"25%"} />
          {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.title} <br/>
          {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.subtitle} <br/>
          {Redux.state.ReceivedObject?.Retrieve?.AboutRetrieve?.comparatively?.description} <br/>
        </React.Fragment>
      }
      <Separator />
    </React.Fragment>
  );
}

export default AboutSectionComponent;
