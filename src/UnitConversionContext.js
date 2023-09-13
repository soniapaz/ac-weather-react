import React, { createContext, useState } from "react";

const UnitConversionContext = createContext();

export const UnitConversionProvider = function ({ children }) {
  const [unit, setUnit] = useState("celsius");

  function toggleUnit() {
    setUnit(function (prevUnit) {
      if (prevUnit === "celsius") {
        return "fahrenheit";
      } else {
        return "celsius";
      }
    });
  }

  return (
    <UnitConversionContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitConversionContext.Provider>
  );
};

export default UnitConversionContext;
