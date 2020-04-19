import React from 'react';
import AuthFormComponent from '../AuthFormComponent';
import { TextField, Button } from '@material-ui/core';

const RegisterComponent = () => {
    return (
        <AuthFormComponent>
            <TextField type="text" label="Никнейм" />
            <TextField type="text" label="ФИО" />
            <TextField type="password" label="Пароль" />
            <br />
            <Button variant="contained" color="primary" size="small">Подтвердить</Button>
        </AuthFormComponent>
    );
}

export default RegisterComponent;