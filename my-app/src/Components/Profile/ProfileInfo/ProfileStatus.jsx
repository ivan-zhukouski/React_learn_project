import React from "react";
import style from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
    state = {
        isChangeStatus: false,
        status: 'add your status'
    };
    onChangeStatusTrue = () => {
        this.setState({
            isChangeStatus: true
        })
    };
    onChangeStatusFalse = () => {
        this.setState({
            isChangeStatus: false,
        })
    };
    onInputChange = (e)=>{
    this.setState({
        status: e.target.value
    })
};
    render() {
        return (
            <div className='d-flex justify-content-center'>
                {!this.state.isChangeStatus
                    ? <div>
                        <span className={style.status} onDoubleClick={this.onChangeStatusTrue}>{this.state.status}</span>
                    </div>
                    : <div>
                        <input autoFocus={true}
                               onChange={this.onInputChange}
                               onBlur={this.onChangeStatusFalse}
                               value={this.state.status}/>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus
