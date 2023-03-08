import Link from 'next/link';
import { FormEvent } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Button from '@/shared/components/Button';
import TextInput from '@/shared/components/Inputs/TextInput';
import PasswordInput from '@/shared/components/Inputs/PasswordInput';

import {
  Container,
  Background,
  CoverImage,
  Content,
  AnimationContainer,
} from './styles';

interface SigninFormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Signin = (): JSX.Element => {
  const { control, handleSubmit } = useForm<SigninFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: ``,
      password: ``,
    },
  });

  const onSubmit = ({ email, password }: SigninFormData) => {
    console.log({ email, password });
  };

  return (
    <Container>
      <Background>
        <CoverImage />
      </Background>
      <AnimationContainer>
        <Content>
          <h1>Signin</h1>
          <p>Entre com as suas credenciais para ter acesso à sua conta</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <TextInput
                  type="text"
                  placeholder="email"
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <PasswordInput
                  placeholder="senha"
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                />
              )}
            />
            <Button type="submit">Entrar</Button>
          </form>

          <strong>
            Ainda não tem uma conta?
            <Link href="/signup/send-email-verification">Criar conta</Link>
          </strong>
        </Content>
      </AnimationContainer>
    </Container>
  );
};

export default Signin;
