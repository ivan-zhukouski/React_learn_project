import React from "react";
import {connect} from "react-redux";
import Header from "./Header"
import * as axios from "axios"
import {setAuthData, updateMessage} from "../redux/reducers/auth-reducer";
class HeaderContainer extends React.Component{
    componentDidMount() {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/auth/me' , {
                withCredentials: true
            })
            .then(response=>{
                let {id,email,login} = response.data.data;
                if(!response.data.data.id){
                    this.props.updateMessage('You are NOT authorized')
                } else {
                    this.props.setAuthData(id,email,login);
                    this.props.updateMessage(`Hallo ${response.data.data.login}`)
                }
            })

    }

    render(){
        return(
            <Header message={this.props.message} isLoading={this.props.isLoading} />
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        isLoading: state.usersData.isLoading,
        message: state.authData.message,
    }
};
const actions = {
    setAuthData,
    updateMessage
};
export default connect(mapStateToProps,actions)(HeaderContainer);
