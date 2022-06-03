// import { createContext, useState } from "react";





// const ReferenceDataContextProvider = (props) => {
// const [weather, setWeather] = useState([]);
// const ReferenceDataContext = createContext({weather, setWeather});

    
//     return (
//         <ReferenceDataContext.Provider value={{weather, setWeather}}>
//             {props.children}
//         </ReferenceDataContext.Provider>
//     );
// };

// export default ReferenceDataContextProvider;

import { createContext, useState } from "react";



const ReferenceDataContext = createContext([]);

const ReferenceDataContextProvider = (props) => {
const [weather, setWeather] = useState([]);


  return (
    <ReferenceDataContext.Provider value={{ weather, setWeather }}>
      {props.children}
    </ReferenceDataContext.Provider>
  );
};

export { ReferenceDataContext, ReferenceDataContextProvider };