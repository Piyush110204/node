import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./components/CounterSlice";
export default function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((store) => store.Data);
  return <>
    <button onClick={() => dispatch(decrement())}>-</button>
    <span>{counter}</span>
    <button onClick={() => dispatch(increment())}>+</button>
  </>
}