import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";


const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className='m-3'>
                <Field placeholder={'login'} name='login' type='text' component='input' />
            </div>
            <div className='m-3'>
                <Field placeholder={'password'} name='password' type='text' component='input' />
            </div>
            <div className='m-3'>
                <Field name='rememberMe' type='checkbox' component='input' /> Remember me
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
        props.login(formData.login, formData.password)
    };
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
    return {
        email: state.authData.email
    }
};
const actions ={
    login
};
export default connect(mapStateToProps,actions)(Login)
