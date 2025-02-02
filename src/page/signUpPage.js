import React, { Component} from 'react';
import Footer from './../components/footer';
import BreadCrumb from './../components/breadcrumb';
import Form from '../components/Login_SignUp/form';
import {infoForm, signUp} from '../components/variable/login_signin';
import '../styles/signup.css';
class SignUpPage extends Component {
    render(){
        return(
            <div>
                <BreadCrumb breadCrumb='đăng kí'/>
                <section className='signin'>
                    <Form value={infoForm}/>
                    <Form value={signUp}/>
                </section>
                <Footer />
            </div>
        );
    }
}
export default SignUpPage