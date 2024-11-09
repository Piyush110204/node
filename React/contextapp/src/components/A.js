import { useContext } from "react"
import { CounterContext } from "../App"
function A(){
    const {counter,setCounter}=useContext(CounterContext);
    return <>
      <button onClick={()=>setCounter(counter+1)}>Change Counter : {counter}</button>
      <hr/>
    </>

}
export default A;