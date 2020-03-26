import React from "react";
import {connect} from "react-redux";
import Header from "./Header"
import {getMyProfile} from "../../redux/reducers/auth-reducer";
class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getMyProfile()
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
    getMyProfile
};
export default connect(mapStateToProps,actions)(HeaderContainer);
