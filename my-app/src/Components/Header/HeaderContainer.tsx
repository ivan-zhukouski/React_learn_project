import React from "react";
import {connect} from "react-redux";
import Header from "./Header"

type  MapStateToPropsType = {
    message: string
    isLoading: boolean
}

class HeaderContainer extends React.Component<MapStateToPropsType>{
    render(){
        return(
            <Header message={this.props.message} isLoading={this.props.isLoading} />
        )
    }
}
const mapStateToProps = (state: any)=>{
    return{
        isLoading: state.usersData.isLoading,
        message: state.authData.message,
    }
};
const actions = {
};
export default connect<MapStateToPropsType>(mapStateToProps,actions)(HeaderContainer);
