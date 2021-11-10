import React, { useState, /*useEffect*/ useContext } from "react";

export const useIndependent = () => {
  return useContext(GlobalContext);
};

export const useChangeIndependent = () => {
  return useContext(GlobalContextChange);
};

interface ApplicationContextInterface {
  children: any;
}
const GlobalContextChange = React.createContext<any>(null);
const GlobalContext = React.createContext(Object());

export function GlobalContextProvider(props: ApplicationContextInterface) {
  let { children } = props;
  const [userData, setUserData] = useState({
    codigo: "",
    contrasena: "",
    nombre: "",
    cedula: "",
    fNacimiento: "",
    carrera: "",
  });
  console.log("el Estado actual es ", userData);

  const changeValues = (field: string, value: string | number) => {
    let newUserData = { ...userData };
    newUserData[field] = value;
    console.log(newUserData[field]);
    setUserData(newUserData);
  };
  return (
    <GlobalContext.Provider value={userData}>
      <GlobalContextChange.Provider value={changeValues}>
        {children}
      </GlobalContextChange.Provider>
    </GlobalContext.Provider>
  );
}
