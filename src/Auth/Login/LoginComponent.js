import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import { Link, Button, TextField} from '@material-ui/core/'
import AuthFormComponent from '../AuthFormComponent';

const LoginComponent = () => {
    return (
        <AuthFormComponent>
            <TextField type="text" label="Никнейм"/>
            <TextField type="password" label="Пароль"/>
            <br />
            <LinkRouter to="/register">
                <Link>
                    Register
                </Link>
            </LinkRouter>
            <br />
            <Button variant="contained" color="primary" size="small">Вход</Button>
        </AuthFormComponent>
    );
}

export default LoginComponent;