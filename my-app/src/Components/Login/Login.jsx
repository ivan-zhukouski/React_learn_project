import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Input} from "../../FormControls/RenderFormPart";
import {maxLengthCreator, required} from "../../FormControls/validators/validators";
import {Redirect} from "react-router-dom";
import style from "./../../FormControls/FormControls.module.css"

const maxLength15 = maxLengthCreator(15);
const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className='m-3'>
                <Field placeholder={'email'}
                       name='email'
                       type='text'
                       component={Input} validate={[required ]} />
            </div>
            <div className='m-3'>
                <Field placeholder={'password'}
                       name='password'
                       type='password'
                       component={Input}
                       validate={[required, maxLength15 ]} />
            </div>
            {props.error
            &&
            <div className={`d-flex justify-content-center ${style.error}`}>
                {props.error}
            </div> }
            <div className='m-3'>
                <Field name='rememberMe' type='checkbox' component={Input} /> Remember me
            </div>
            <div className='d-flex justify-content-center'>
                <button>Login</button>
            </div>
        </form>
    )
};
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props)=>{
    const onSubmit = (formData) => {
        console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe)
    };
    if(props.isAuth){
        return <Redirect to='/profile'/>
    }
    return(
        <div >
            <h3 className='text-center'>Login</h3>
            <div className='d-flex justify-content-center'>
                <LoginReduxForm onSubmit={onSubmit}  />
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return{
        isAuth: state.authData.isAuth
    }
};
const actions ={
    login
};
export default connect(mapStateToProps,actions)(Login)
