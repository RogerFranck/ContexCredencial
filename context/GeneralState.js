import GeneralContext from "./GeneralContext";

const GeneralState = ({ children }) => {
  const intitalState = {
    img: "http://pm1.narvii.com/6720/25e80ad037ae1298d4be1d8b0b6a741c8c180347_00.jpg",
    name: "Marie Deo",
    job: "Creative Manager",
    IdNo: "00000000",
    DOB: "13/OCT/2001",
    JoinDate: "01/01/2023",
    ExpireDate: "01/01/2024",
    Web: "Hola.com",
    Phone: "000-000-00",
  };

  return (
    <GeneralContext.Provider value={intitalState}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
