import React, { Component } from "react";
import TagCloud from "react-tag-cloud";
// import randomColor from "randomcolor";
import { SkillsCloudWrapper } from "./SkillsCloudStyle";
import { cloudSkills } from "../../context/data";

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
                    {cloudSkills.map((item) => {
                        const {
                            id,
                            technology,
                            color,
                            fontSize: { web },
                        } = item;
                        return (
                            <div
                                key={id}
                                style={{ fontSize: web, color: color }}
                            >
                                {technology}
                            </div>
                        );
                    })}
                </TagCloud>
                <div className="cloudmobile">
                    {cloudSkills.map((item) => {
                        const {
                            id,
                            technology,
                            color,
                            fontSize: { mobile },
                        } = item;
                        return (
                            <div
                                key={id}
                                style={{ fontSize: mobile, color: color }}
                            >
                                {technology}
                            </div>
                        );
                    })}
                </div>
            </SkillsCloudWrapper>
        );
    }
}
export default MyCloud;
