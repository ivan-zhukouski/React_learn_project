import React from "react";
import {connect} from "react-redux";
import Header from "./Header"
import {setAuthData, updateMessage} from "../../redux/reducers/auth-reducer";
import {authAPI} from "../../API/api";
class HeaderContainer extends React.Component{
    componentDidMount() {
        authAPI.getMe()
            .then(data=>{
                let {id,email,login} = data.data;
                if(!data.data.id){
                    this.props.updateMessage('You are NOT authorized')
                } else {
                    this.props.setAuthData(id,email,login);
                    this.props.updateMessage(`Hallo ${data.data.login}`)
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
