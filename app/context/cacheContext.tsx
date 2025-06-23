import {createContext, useContext, useMemo, useState} from 'react'

const ApiDataContext = createContext()


export function ApiDataProvider({ children }) {
    const [apiData, setApiData] = useState(null);
  
    const value = useMemo(() => ({ apiData, setApiData }), [apiData]);
  
    return <ApiDataContext.Provider value={value}>{children}</ApiDataContext.Provider>;
  }
  
  export function useApiData() {
    return useContext(ApiDataContext);
  }