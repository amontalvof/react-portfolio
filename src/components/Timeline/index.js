import React, { useContext } from "react";
import { TimelineContext } from "../../context/timeline";
import { TimelineWrapper } from "./TimelineStyle";

export default function Timeline({ title }) {
  const { conEmployment, conEducation } = useContext(TimelineContext);

  return (
    <TimelineWrapper>
      <div className="timelineTitle">
        <h3>{title.toUpperCase()}</h3>
      </div>
      <br />
      <div className="timeline">
        {title === "employment" ? (
          <React.Fragment>
            {conEmployment.map((item) => {
              return (
                <div key={item.id} className="container right">
                  <div className="content">
                    <h4>{item.title}</h4>
                    <h5>{item.place}</h5>
                    <h5>{item.date}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ) : (
          <React.Fragment>
            {conEducation.map((item) => {
              return (
                <div key={item.id} className="container right">
                  <div className="content">
                    <h4>{item.title}</h4>
                    <h5>{item.place}</h5>
                    <h5>{item.date}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        )}
      </div>
    </TimelineWrapper>
  );
}
