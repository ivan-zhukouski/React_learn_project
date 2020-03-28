import React from "react";
import style from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {
    state = {
        isChangeStatus: false,
        status: this.props.userStatus
    };
    onChangeStatusTrue = () => {
        this.setState({
            isChangeStatus: true
        })
    };
    onBlurChangeStatus = () => {
        this.setState({
            isChangeStatus: false,
        });
        this.props.updateUserStatus(this.state.status)
    };
    onInputChange = (e) => {
        this.setState({
            status: e.target.value
        })
    };
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.userStatus !== this.props.userStatus){
            this.setState({
                status:this.props.userStatus
            })
        }
    }

    render() {
        return (
            <div className='d-flex justify-content-center'>
                {!this.state.isChangeStatus
                    ? <div>
                        <span className={style.status}
                              onDoubleClick={this.onChangeStatusTrue}>{!this.props.userStatus ? 'add status' : this.props.userStatus}</span>
                    </div>
                    : <div>
                        <input autoFocus={true}
                               onChange={this.onInputChange}
                               onBlur={this.onBlurChangeStatus}
                               value={!this.state.status ? '' : this.state.status}/>
                    </div>}
            </div>
        )
    }
}

export default ProfileStatus
