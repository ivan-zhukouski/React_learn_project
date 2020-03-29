import React from "react";
import {connect} from "react-redux";
import Header from "./Header"
class HeaderContainer extends React.Component{
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
};
export default connect(mapStateToProps,actions)(HeaderContainer);
