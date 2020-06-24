import React, { useState, useEffect } from "react";
import { proj } from "./data";

const ProjectsContext = React.createContext();
function ProjectsProvider({ children }) {
  const [conProjects, setConProjects] = useState([]);

  useEffect(() => {
    setConProjects(proj);
    return () => {};
  }, []);

  return (
    <ProjectsContext.Provider value={{ conProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export { ProjectsContext, ProjectsProvider };
