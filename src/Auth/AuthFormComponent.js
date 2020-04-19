import React from 'react';
import './AuthForm.css'

const AuthFormComponent = (props) => {
    return (
        <div className="form">
            <form>
                {props.children}
            </form>
        </div>
    );
}

export default AuthFormComponent;