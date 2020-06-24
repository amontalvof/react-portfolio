import React, { useState, useEffect } from "react";

const ScrollyContext = React.createContext();

function ScrollyProvider({ children }) {
  const [conHeight, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.pageYOffset);
    });
    return () => window.removeEventListener("scroll", () => {});
  });

  return (
    <ScrollyContext.Provider value={{ conHeight }}>
      {children}
    </ScrollyContext.Provider>
  );
}

export { ScrollyContext, ScrollyProvider };
