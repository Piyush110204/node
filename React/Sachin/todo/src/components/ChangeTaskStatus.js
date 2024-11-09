import { Component } from "react";

class ChangeTaskStatus extends Component {
    render() {
        let { activeButton, deactiveButton, activeButtonStatus, deActiveButtonStatus } = this.props;
        return <>
            <input onClick={activeButton} className="btn btn-success me-5" value='Active' disabled={activeButtonStatus} ></input>
            <input onClick={deactiveButton}  className="btn btn-danger" value='Deactive' disabled={deActiveButtonStatus}></input>
        </>
    }
}
export default ChangeTaskStatus;