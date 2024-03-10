import { Separator } from "@/components/ui/separator";
import React from "react";


function ServiceSectionComponent({ Redux }) {
  return (
    <React.Fragment>
      {Redux.state.ReceivedObject?.Retrieve?.ServiceList?.map((each, index) => {
        return (
          <React.Fragment key={index} >
            {each?.title} <br/>
            {each?.description} <br/>
          </React.Fragment>
        )
      })}
      <Separator />
    </React.Fragment>
  );
}

export default ServiceSectionComponent;
