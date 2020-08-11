import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiPython,
  DiBootstrap,
  DiReact,
  DiCodeigniter,
  DiGit,
  DiMsqlServer,
  DiMysql,
  DiPostgresql,
} from "react-icons/di";
import { FaPhp } from "react-icons/fa";
import { SkillsCircleWrapper } from "./SkillsCircleStyle";
import img from "../../assets/images/darkBlue.svg";

export default function index() {
  return (
    <SkillsCircleWrapper>
      {/*LANGUAGES*/}
      <div className="content">
        <div className="circle" style={{ background: "#F16529" }}>
          <div className="iconoTec">
            <div>HTML5</div>
            <div style={{ fontSize: "30px" }}>
              <DiHtml5 />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#2965f1" }}>
          <div className="iconoTec">
            <div>CSS3</div>
            <div style={{ fontSize: "30px" }}>
              <DiCss3 />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#edd32c" }}>
          <div className="iconoTec">
            <div>JAVASCRIPT</div>
            <div style={{ fontSize: "20px" }}>
              <DiJsBadge />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#787CB5" }}>
          <div className="iconoTec">
            <div>PHP</div>
            <div style={{ fontSize: "35px" }}>
              <FaPhp />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#006600" }}>
          <div className="iconoTec">
            <div>PYTHON</div>
            <div style={{ fontSize: "30px" }}>
              <DiPython />
            </div>
          </div>
        </div>
      </div>
      {/*FRAMEWORKS*/}
      <div className="content">
        <div className="circle" style={{ background: "#602C50" }}>
          <div className="iconoTec">
            <div>BOOTSTRAP</div>
            <div style={{ fontSize: "30px" }}>
              <DiBootstrap />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#06c8f9 " }}>
          <div className="iconoTec">
            <div>REACT</div>
            <div style={{ fontSize: "30px" }}>
              <DiReact />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#DD4814" }}>
          <div className="iconoTec">
            <div>CODEIGNITER</div>
            <div style={{ fontSize: "20px" }}>
              <DiCodeigniter />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#3E2C00" }}>
          <div className="iconoTec">
            <div>GIT</div>
            <div style={{ fontSize: "30px" }}>
              <DiGit />
            </div>
          </div>
        </div>
      </div>
      {/*FRAMEWORKS*/}
      <div className="content">
        <div className="circle" style={{ background: "#005580 " }}>
          <div className="iconoTec">
            <div>POSTGRE</div>
            <div>SQL</div>
            <div style={{ fontSize: "20px" }}>
              <DiPostgresql />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#990000" }}>
          <div className="iconoTec">
            <div>MICROSOFT</div>
            <div>SQL SERVER</div>
            <div style={{ fontSize: "20px" }}>
              <DiMsqlServer />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#F29111" }}>
          <div className="iconoTec">
            <div>MYSQL</div>
            <div style={{ fontSize: "30px" }}>
              <DiMysql />
            </div>
          </div>
        </div>
      </div>
      <div className="imagen">
        <img src={img} alt="imagen logo" />
      </div>
    </SkillsCircleWrapper>
  );
}
