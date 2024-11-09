import Data from "./component/Data"
import { useRef, useState } from "react";
export default function App() {
  const [defaultStatus, setDefaultStatus] = useState("Active");
  const [taskList, setTaskList] = useState(Data);
  const [priorityList, setPriorityList] = useState([{ priorityId: 1, priorityValue: "Low" }, { priorityId: 2, priorityValue: "Medium" }, { priorityId: 3, priorityValue: "High" }])
  let titleInput = useRef(null);
  let priorityInput = useRef(null);
  const changeTaskStatus = (index) => {
    taskList[index].operation == "Active" ? taskList[index].operation = "Deactive" : taskList[index].operation = "Active";
    setTaskList([...taskList]);
  }
  const addTask = () => {
    let date = new Date();
    let fulldate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + (date.getFullYear());
    let newTask = { Title: titleInput.current.value, priority: Number.parseInt(priorityInput.current.value), fulldate, operation: "Active" }
    setTaskList([...taskList, newTask]);
  }
  return <>
    <div style={{ height: "50px" }} className="bg-danger container-fluid d-flex justify-content-center align-items-center test-center">
      <h4>To Do App</h4>
    </div>
    <div className="container my-3">
      <div className="row">
        <div className="col-md-6">
          <label>Task title</label>
          <input ref={titleInput} type="text" className="form-control" />
        </div>
        <div className="col-md-6">
          <label>Set priority</label>
          <select ref={priorityInput} className="form-control">
            {priorityList.map((priorityObj, index) => <option key={index} value={priorityObj.priorityId}>{priorityObj.priorityValue}</option>)}
          </select>
        </div>
        <div className="col-md-3 my-3">
          <button style={{ width: "100px;" }} onClick={addTask} className="btn btn-secondary">ADD</button>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-6 my-3">
          <button disabled={defaultStatus == "Active" ? true : false} onClick={() => setDefaultStatus("Active")} className="btn btn-info">Active ({taskList.filter((task) => task.operation == "Active").length})</button>
          <button disabled={defaultStatus == "Deactive" ? true : false} onClick={() => setDefaultStatus("Deactive")} className="btn btn-danger ms-2">Deactive ({taskList.filter((task) => task.operation == "Deactive").length})</button>
        </div>
      </div>
    </div>

    <div className="conatiner-fluid">
      <div className="row row-cols-5 my-4">
        {taskList.map((task, index) => ({ ...task, orignalIndex: index })).filter((task) => task.operation == defaultStatus).sort((task1, task2) => task2.priority - task1.priority).map((task, index) => (
          <center>
            <div key={index} style={{ borderRadius: "10px;", boxShadow: "1px 10px 7px grey", border: "1px solid white", backgroundColor: task.priority === 3 ? "#ff7979" : task.priority === 2 ? "green" : "skyblue" }} className="col my-4 m-2 p-3 d-column ms-2 ps-3 justify-content-center align-items-center test-center">
              <span>{priorityList.find((priority) => task.priority == priority.priorityId).priorityValue}</span>
              <h2>{task.Title}</h2>
              <span>{task.Date}</span><br />
              {<button onClick={() => changeTaskStatus(task.orignalIndex)} className={`btn ${defaultStatus === "Active" ? "btn-warning" : "btn-success"} my-2`}>{defaultStatus == "Active" ? "Deactive" : "Active"}</button>}
            </div>
          </center>
        ))}
      </div>
    </div>
  </>
}