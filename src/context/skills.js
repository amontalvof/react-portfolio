import React, { useState, useEffect } from "react";
import { leng, fram } from "./data";

const SkillsContext = React.createContext();
function SkillsProvider({ children }) {
  const [conLenguages, setConLeng] = useState([]);
  const [conFrameworks, setConFram] = useState([]);

  useEffect(() => {
    setConLeng(leng);
    setConFram(fram);
    return () => {};
  }, []);

  return (
    <SkillsContext.Provider value={{ conLenguages, conFrameworks }}>
      {children}
    </SkillsContext.Provider>
  );
}

export { SkillsContext, SkillsProvider };
