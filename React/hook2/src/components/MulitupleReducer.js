import { useReducer } from "react"

export default function MultipleReducer(){
    const [state,dispatch]=useReducer((state,action)=>{
        if(action.type=="increment"){
            state.counter=state.counter+1;
            return {...state}
        }
    },
    {
        counter : 100
    })
    return <>

        <button onClick={()=>dispatch({type:"increment",payload:1})}>Counter : {state.counter}</button>
    </>
}