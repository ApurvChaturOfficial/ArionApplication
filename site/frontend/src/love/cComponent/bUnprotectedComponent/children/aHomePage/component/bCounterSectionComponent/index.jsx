import React from "react";

function CounterSectionComponent({ Redux }) {
  return (
    <React.Fragment>
      {Redux.state.ReceivedObject?.Retrieve?.CounterList?.map((each, index) => {
        return (
          <React.Fragment>
            count={each.subtitle}
            title={each.title}
            description={each.description}
          </React.Fragment>
        )
      })}
    </React.Fragment>
  );
}

export default CounterSectionComponent;
