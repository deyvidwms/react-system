import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { FaGoogle, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { CardLogin, CardLoginTitle, Container, LoginButton, OtherLogin, SocialIcons } from './styles';
import imgBg from '../../assets/images/login-bg.jpg';

import InputField from '../../components/InputField';

type FormValues = {
  usuario: string;
  senha: string;
}

const schema = yup
  .object()
  .shape({
    usuario: yup.string().required('Preencha o campo acima.'),
    senha: yup.string().min(8, 'O campo de senha deve conter no mínimo 8 caracteres.').max(32, 'O campo de senha deve conter no máximo 32 caracteres.').required('Preencha o campo acima.'),
  })
  .required();


const Login: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const handleRegistration = (data: any) => { console.log('data', data); reset() };

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <Container backgroundImage={imgBg}>
      <form onSubmit={handleSubmit(handleRegistration)}>

        <CardLogin>

          <CardLoginTitle>
            <h1>Login</h1>
            <hr />
          </CardLoginTitle>


          <InputField
            type='text'
            name='usuario'
            label='Usuario'
            register={register}
            errors={errors}
            required
          />


          <InputField
            type='password'
            name='senha'
            label='Senha'
            register={register}
            errors={errors}
            required
          />

          <LoginButton>
            <button>Entrar</button>
          </LoginButton>

          <OtherLogin>

            <div>
              <p>ou</p>
              <hr />
            </div>

            <SocialIcons>

              <p>
                <FaGoogle /> 
                Entrar com o Google
              </p>
              
              <p>
                <FaFacebookSquare /> 
                Entrar com o Facebook
              </p>
              
              <p>
                <FaTwitter />
                Entrar com o Twitter
              </p>

            </SocialIcons>

          </OtherLogin>

        </CardLogin>

      </form>
    </Container>
  );
}

export default Login;