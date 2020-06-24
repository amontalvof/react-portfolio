import React, { useContext } from "react";
import CountUp from "react-countup";
import { SkillsContext } from "../../context/skills";
import { SkillsWrapper } from "./SkillsStyle";
import Progress from "./progress";

export default function Skill() {
  const { conLenguages, conFrameworks } = useContext(SkillsContext);

  return (
    <SkillsWrapper>
      <div className="flex-container">
        <div>
          {conLenguages.map((item) => {
            return (
              <div key={item.id} className="rainbow-p-around_x-large">
                <div className="rainbow-align-content_space-between rainbow-p-bottom_x-small">
                  <span className="rainbow-font-size-text_large barText">
                    {item.title}
                  </span>
                  <span aria-hidden="true">
                    <strong className="rainbow-font-size-text_large barText">
                      <CountUp end={item.porciento} duration={3} suffix="%" />
                    </strong>
                  </span>
                </div>
                <Progress prog={item.porciento} />
              </div>
            );
          })}
        </div>
        <div>
          {conFrameworks.map((item) => {
            return (
              <div key={item.id} className="rainbow-p-around_x-large">
                <div className="rainbow-align-content_space-between rainbow-p-bottom_x-small">
                  <span className="rainbow-font-size-text_large barText">
                    {item.title}
                  </span>
                  <span aria-hidden="true">
                    <strong className="rainbow-font-size-text_large barText">
                      <CountUp end={item.porciento} duration={3} suffix="%" />
                    </strong>
                  </span>
                </div>
                <Progress prog={item.porciento} />
              </div>
            );
          })}
        </div>
      </div>
    </SkillsWrapper>
  );
}
