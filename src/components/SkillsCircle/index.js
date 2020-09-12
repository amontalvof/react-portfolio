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
import { SiJest } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { SkillsCircleWrapper } from "./SkillsCircleStyle";
import img from "../../assets/images/darkBlue.svg";

export default function index() {
  return (
    <SkillsCircleWrapper>
      {/*LANGUAGES*/}
      <div className="content">
        <div className="circle" style={{ background: "#E54C21" }}>
          <div className="iconoTec">
            <div>HTML5</div>
            <div style={{ fontSize: "30px" }}>
              <DiHtml5 />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#0371BC" }}>
          <div className="iconoTec">
            <div>CSS3</div>
            <div style={{ fontSize: "30px" }}>
              <DiCss3 />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#E8B603" }}>
          <div className="iconoTec">
            <div>JAVASCRIPT</div>
            <div style={{ fontSize: "20px" }}>
              <DiJsBadge />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#777CB5" }}>
          <div className="iconoTec">
            <div>PHP</div>
            <div style={{ fontSize: "35px" }}>
              <FaPhp />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#3476AA" }}>
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
        <div className="circle" style={{ background: "#553B7D" }}>
          <div className="iconoTec">
            <div>BOOTSTRAP</div>
            <div style={{ fontSize: "30px" }}>
              <DiBootstrap />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#944058" }}>
          <div className="iconoTec">
            <div>JEST</div>
            <div style={{ fontSize: "25px" }}>
              <SiJest />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#61DCFC " }}>
          <div className="iconoTec">
            <div>REACT</div>
            <div style={{ fontSize: "30px" }}>
              <DiReact />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#E73800" }}>
          <div className="iconoTec">
            <div>CODEIGNITER</div>
            <div style={{ fontSize: "20px" }}>
              <DiCodeigniter />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#3F2C00" }}>
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
        <div className="circle" style={{ background: "#336791 " }}>
          <div className="iconoTec">
            <div>POSTGRE</div>
            <div>SQL</div>
            <div style={{ fontSize: "20px" }}>
              <DiPostgresql />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#B52A2A" }}>
          <div className="iconoTec">
            <div>MICROSOFT</div>
            <div>SQL SERVER</div>
            <div style={{ fontSize: "20px" }}>
              <DiMsqlServer />
            </div>
          </div>
        </div>
        <div className="circle" style={{ background: "#DD8A00" }}>
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
