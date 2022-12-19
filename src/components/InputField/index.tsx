import React from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Container } from './styles';

type FormValues = {
  usuario: string;
  senha: string;
}

type dynamicJSON = {
  [key: string]: any
}

type Props = { 
  name: 'usuario' | 'senha';
  label: string; 
  register: UseFormRegister<FormValues>;
  errors: dynamicJSON;  
  required: boolean;
  type: string;
}

const InputField: React.FC<Props> = ({name, label, register, required, type, errors}) => {
  return (
    <Container error={ errors[name] !== undefined }>
      {label && <label htmlFor={name}>{label} {required && <span>*</span>}</label>}
      <input
        id={name}
        type={type}
        {...register(name)}
        
      />
      { errors[name] !== undefined && <p> {errors[name].message} </p> }
    </Container>
  );
}

export default InputField;