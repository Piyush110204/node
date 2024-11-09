import { createContext, useState } from "react";
import A from "./components/A";
export const CounterContext=createContext();
function App(){
  const [counter,setCounter] = useState(100);
  return <>
    <h1>App Component....</h1>
    <CounterContext.Provider value={{counter,setCounter}}>
      <A/>
    </CounterContext.Provider>
  </>
}
export default App;