import { Component } from "react";

class TaskForm extends Component {
    render() {
        let {storeTask,priorities}=this.props;
        return <>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <input className="form-control" placeholder="Enter Task Title" ref={(TaskInput) => this.task = TaskInput}></input>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <select className="form-control" ref={(input) => { this.priority = input }}>
                        <option>Select Priority</option>
                        {priorities.map((priority, index) => <option key={index} value={priority}>{priority}</option>)}
                    </select>
                    <input className="btn btn-outline-primary ms-5" value="Submit" onClick={()=>storeTask(this.task.value,this.priority.value)}></input>
                </div>
            </div>
        </>
    }
}
export default TaskForm;