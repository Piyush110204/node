import { Component } from "react";
import Tasks from './components/Data'
import Header from "./components/Header"
import TaskTable from "./components/TaskTable";
import TaskForm from "./components/TaskForm";
import ChangeTaskStatus from "./components/ChangeTaskStatus";
class App extends Component{
  constructor(){
    super();
    this.state = {
        TaskList : Tasks,
        taskStatus : true,
        priorities :['low', 'normal', 'high'],
        activeButtonStatus : false,
        deActiveButtonStatus : false
    }
  }
  activeButton=()=>{
    this.setState({taskStatus : true, activeButtonStatus : true , deActiveButtonStatus : false})
  }
  deactiveButton=()=>{
    this.setState({taskStatus : false, activeButtonStatus : false , deActiveButtonStatus : true})
  }
  changeStatus = (id) =>{
        this.state.TaskList.find((task) =>task.id == id).activate = !this.state.taskStatus;
        this.setState({});
  }
  storeTask = (task,priority)=>{
   this.setState({TaskList : [...this.state.TaskList, {id : this.state.TaskList.length+1,title : task, date : new Date().toLocaleDateString(), Priority : priority=='low' ? 0 :(priority=='high' ? 2 : 1), activate : true}]});
  }
  render(){ 
    return <>
      < Header/>
      <div className="container-fluid mt-5">
        <TaskForm storeTask={this.storeTask} priorities={this.state.priorities}/>
      </div>

      <div className="container-fluid my-5"> 
       <ChangeTaskStatus activeButton={this.activeButton} deactiveButton={this.deactiveButton} deActiveButtonStatus={this.deActiveButtonStatus} activeButtonStatus={this.activeButtonStatus}/>
      </div>
      <div className="container-fluid mt-5">
        <TaskTable TaskList={this.state.TaskList} changeStatus={this.changeStatus} taskStatus={this.state.taskStatus}/>
      </div>
    </>
  }
}
export default App;
