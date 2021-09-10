import React, {useState} from 'react';

import {Button, Form as FormComp, FormGroup, Label, Input, FormFeedback} from 'reactstrap';

import '../styles/form.scss';

const Form = () => {

    const [fieldData, setFieldData] = useState({
        aname: '',
        surname: '',
        phone: '',
        email: '',
        password: '',
        anameValid: false,
        surnameValid: false,
        phoneValid: false,
        emailValid: false,
        passwordValid: false,   
        anameError: '',
        surnameError: '',
        phoneError: '',
        emailError: '',
        passwordError: '',
        formValid: false
    });

    const handleInput = ({ target: {name, value} }) => {
        setFieldData(state => ({...state, [name]: value }));
    }

    const onFocus = ({ target: {name} }) => {
        name = name+'Error';
        setFieldData(state => ({...state, [name]: '' }));
    }

    const onBlur = ({ target: {name, value} }) => {
            validateField(name, value);
    }

    const validateField = (fieldName, value) => {
        let { anameError, surnameError, 
            phoneError, emailError, passwordError,
            anameValid, surnameValid,
            phoneValid, emailValid, passwordValid } = fieldData;
        
        switch(fieldName) {
            case 'aname':
                anameValid = value.length >= 2;
                anameError = anameValid ? '': 'Name needs to be at least 2 characters long';
            break;
            case 'surname':
                surnameValid = value.length >= 2;
                surnameError = surnameValid ? '' : 'Surname needs to be atleast 2 characters long';
            break;
            case 'phone':
                phoneValid = value.match(/^\+1( ?)[0-9]{3}( ?)[0-9]{2,3}(-?)[0-9]{2}(-?)[0-9]{2}$/);
                phoneError = phoneValid ? '': 'Only USA (e.g: +1 999 999-99-99)(spaces and dashes is not required)';
            break;
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                emailError = emailValid ? '' : 'E-mail';
            break;
            case 'password':
                passwordValid = value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8}/);
                passwordError = passwordValid ? '': 'at least 8 characters and contains one uppercase latin letter, one lowercase latin letter, one number, one special character';
            break;
          default:
            break;
        }

        setFieldData(state => ({
            ...state, 
            anameError: anameError,
            surnameError: surnameError,
            phoneError: phoneError,
            emailError: emailError,
            passwordError: passwordError,
            anameValid: anameValid,
            surnameValid: surnameValid,
            phoneValid: phoneValid,
            emailValid: emailValid,
            passwordValid: passwordValid,
            formValid: anameValid && surnameValid  &&
                phoneValid && emailValid && passwordValid
        }));
    }

    const handleSubmit = () => { 
        if (fieldData.formValid) {
            localStorage.account = JSON.stringify({
               name: fieldData.aname, surname: fieldData.surname,
            phone: fieldData.phone, email: + fieldData.email, password: fieldData.password
            })
            // alert ('Hello,  '+ fieldData.aname + ', ' + fieldData.surname + '  phone: ' +
            // fieldData.phone + ',  e-mail: ' + fieldData.email);
        }       
    }
        
    return(
    <>      
    <FormComp onSubmit = {handleSubmit} className="form">
        <FormGroup>
            <Label for="examplePassword">Name:</Label>
            <Input valid = {fieldData.anameValid ? true : false} invalid = {fieldData.anameError ? true : false}
            type='text' value={fieldData.aname} name='aname' onChange={handleInput} onBlur = {onBlur} onFocus = {onFocus}/>
            <FormFeedback>{fieldData.anameError}</FormFeedback>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Surname:</Label>
            <Input valid = {fieldData.surnameValid ? true : false} invalid = {fieldData.surnameError ? true : false}
            type='text' value={fieldData.surname} name='surname' onChange={handleInput} onBlur = {onBlur} onFocus = {onFocus}/>
            <FormFeedback>{fieldData.surnameError}</FormFeedback>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">PhoneUSA:</Label>
            <Input valid = {fieldData.phoneValid ? true : false} invalid = {fieldData.phoneError ? true : false}
            type='text' value={fieldData.phone} name='phone' onChange={handleInput} onBlur = {onBlur} onFocus = {onFocus}/>
            <FormFeedback>{fieldData.phoneError}</FormFeedback>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">E-mail:</Label>
            <Input valid = {fieldData.emailValid ? true : false} invalid = {fieldData.emailError ? true : false}
            type='text' value={fieldData.email} name='email' onChange={handleInput} onBlur = {onBlur} onFocus = {onFocus}/>
            <FormFeedback>{fieldData.emailError}</FormFeedback>
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Password:</Label>
            <Input valid = {fieldData.passwordValid ? true : false} invalid = {fieldData.passwordError ? true : false}
            type='text' value={fieldData.password} name='password' onChange={handleInput} onBlur = {onBlur} onFocus = {onFocus}/>
            <FormFeedback>{fieldData.passwordError}</FormFeedback>
        </FormGroup>
        
        <Button className="submitpush" type='submit' disabled={!fieldData.formValid} /*onClick = {handleSubmit}*/>Send</Button>
    </FormComp>
    </>
    )
}

export default Form;