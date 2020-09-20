import React, { Component } from "react";
import TagCloud from "react-tag-cloud";
// import randomColor from "randomcolor";
import { SkillsCloudWrapper } from "./SkillsCloudStyle";

class MyCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 5000);
  }
  render() {
    return (
      <SkillsCloudWrapper>
        <TagCloud
          className="tag-cloud"
          style={{
            fontWeight: "bold",
            padding: 10,
            width: "100%",
            height: "100%",
            flex: 1,
          }}
        >
          <div style={{ fontSize: 50, color: "#E54C21" }}>HTML5</div>
          <div style={{ fontSize: 50, color: "#2862EA" }}>CSS3</div>
          <div style={{ fontSize: 50, color: "#EFD81D" }}>JAVASCRIPT</div>
          <div style={{ fontSize: 50, color: "#61DCFC" }}>REACT</div>
          <div style={{ fontSize: 40, color: "#944058" }}>JEST</div>
          <div style={{ fontSize: 40, color: "#3F2C00" }}>GIT</div>
          <div style={{ fontSize: 30, color: "#777CB5" }}>PHP</div>
          <div style={{ fontSize: 30, color: "#009933" }}>PYTHON</div>
          <div style={{ fontSize: 30, color: "#336791" }}>POSTGRESQL</div>
          <div style={{ fontSize: 30, color: "#DD8A00" }}>MYSQL</div>
          <div style={{ fontSize: 20, color: "#B52A2A" }}>
            MICROSOFT SQL SERVER
          </div>
          <div style={{ fontSize: 20, color: "#E73800" }}>CODEIGNITER</div>
          <div style={{ fontSize: 20, color: "#553B7D" }}>BOOTSTRAP</div>
        </TagCloud>
        <div className="cloudmobile">
          <div style={{ fontSize: 28, color: "#E54C21" }}>HTML5</div>
          <div style={{ fontSize: 28, color: "#2862EA" }}>CSS3</div>
          <div style={{ fontSize: 28, color: "#EFD81D" }}>JAVASCRIPT</div>
          <div style={{ fontSize: 28, color: "#61DCFC" }}>REACT</div>
          <div style={{ fontSize: 24, color: "#944058" }}>JEST</div>
          <div style={{ fontSize: 24, color: "#3F2C00" }}>GIT</div>
          <div style={{ fontSize: 20, color: "#777CB5" }}>PHP</div>
          <div style={{ fontSize: 20, color: "#009933" }}>PYTHON</div>
          <div style={{ fontSize: 20, color: "#336791" }}>POSTGRESQL</div>
          <div style={{ fontSize: 20, color: "#DD8A00" }}>MYSQL</div>
          <div style={{ fontSize: 16, color: "#B52A2A" }}>
            MICROSOFT SQL SERVER
          </div>
          <div style={{ fontSize: 16, color: "#E73800" }}>CODEIGNITER</div>
          <div style={{ fontSize: 16, color: "#553B7D" }}>BOOTSTRAP</div>
        </div>
      </SkillsCloudWrapper>
    );
  }
}
export default MyCloud;
