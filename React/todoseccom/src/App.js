import Header from "./component/Header";
import Data from "./component/Data";
import { useState } from "react";
export default function App(){
  const [defaultStatus, setDefaultStatus] = useState("Active");
  const [taskList, setTaskList] = useState(Data);
  const [priorityList, setPriorityList] = useState([{ priorityId: 1, priorityValue: "Low" }, { priorityId: 2, priorityValue: "Medium" }, { priorityId: 3, priorityValue: "High" }])
  return <>
    <Header/>
  </>
}