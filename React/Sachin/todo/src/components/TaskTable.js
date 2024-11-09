import { Component } from "react";

class TaskTable extends Component{
    render(){
        let {TaskList,taskStatus,changeStatus}=this.props;
        return<>
            <table className="table table-hover">
          <tr>
            <th>S.no</th>
            <th>Title</th>
            <th>Date</th>
            <th>Priority</th>
            <th>Operations</th>
          </tr>
          <tbody>
            {TaskList.filter((task) =>task.activate==taskStatus).sort((a, b) => b.Priority-a.Priority).map((task, index) =><tr key={index} style={{backgroundColor : task.Priority==2 ? 'hotpink' : (task.Priority==1 ? 'aquamarine' : 'goldenrod')}}>
              <td>{index+1}</td>
              <td>{task.title}</td>
              <td>{task.date}</td>
              <td>{task.Priority === 0 ? 'Low' : (task.Priority === 1 ? 'Normal' : 'High')}</td>
              <td><button className={taskStatus ? "btn btn-outline-danger" : 'btn btn-outline-success'} onClick={() => changeStatus(task.id)} >{taskStatus ? 'Deactive' : 'Active'}</button></td>
            </tr>)}
          </tbody>
        </table>
        </>
    }
}
export default TaskTable;