import { Separator } from "@/components/ui/separator";
import React from "react";

function CounterSectionComponent({ Redux }) {
  return (
    <React.Fragment>
      {Redux.state.ReceivedObject?.Retrieve?.CounterList?.map((each, index) => {
        return (
          <React.Fragment key={index}>
            {each.subtitle}<br/>
            {each.title}<br/>
            {each.description}<br/>
          </React.Fragment>
        )
      })}
      <Separator />
    </React.Fragment>
  );
}

export default CounterSectionComponent;
