import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state)=>{
    return {
        isAuth: state.authData.isAuth
    }
};
export const withAuthRedirect = (Component) => {
    class AuthRedirectContainer extends React.Component{
        render(){
            if(!this.props.isAuth){
                return <Redirect to='/login' />
            }
            return(
                <Component {...this.props}/>
            )
        }
    }
    return connect(mapStateToPropsForRedirect)(AuthRedirectContainer)
};
