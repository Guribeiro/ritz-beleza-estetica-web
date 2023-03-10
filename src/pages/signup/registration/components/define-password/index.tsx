import { Container, Content, Form } from './styles';
import { useForm, Controller } from 'react-hook-form';
import { AxiosHeaders } from 'axios';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import PasswordInput from '@/shared/components/Inputs/PasswordInput';
import Button from '@/shared/components/Button';
import { IconArrowLeft } from '@tabler/icons-react';
import { useRouter } from 'next/router';
import { api } from '@/shared/services/api';
import { errorHandler } from '@/shared/utils/error-handler';
import { useRegistration } from '../../hooks/useRegistration';
import { useCallback, useState } from 'react';

interface DefinePasswordFormData {
  password: string;
  password_confirmation: string;
}

const defaultValues: DefinePasswordFormData = {
  password: ``,
  password_confirmation: ``,
};

const schema = yup.object().shape({
  password: yup.string().required(`Informe sua senha`),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref(`password`)], `Senhas não combinam`),
});

const DefinePassword = (props): JSX.Element => {
  const { query, push } = useRouter();

  const { customerRegistrationData } = useRegistration();
  const [loading, setLoading] = useState(false);

  const { token } = query;

  const { control, handleSubmit } = useForm<DefinePasswordFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    async ({ password }: DefinePasswordFormData) => {
      try {
        setLoading(true);
        await api.post(`/signup/register?token=${token}`, {
          ...customerRegistrationData,
          password,
        });

        push(`/signin`);
      } catch (error) {
        const message = errorHandler(error);
        console.log(error);
        alert(message);
      } finally {
        setLoading(false);
      }
    },
    [customerRegistrationData, token],
  );
  return (
    <Container>
      <Button onClick={props.previousStep}>
        <IconArrowLeft style={{ marginRight: 4 }} />
        Voltar
      </Button>
      <Content>
        <section>
          <h3>Senha de acesso</h3>
          <p>defina a senha que você usuará para acessar a aplicação</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <Controller
                name="password"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <PasswordInput
                    label="senha"
                    placeholder="Escolha uma senha segura"
                    onChange={onChange}
                    value={value}
                    error={error?.message}
                  />
                )}
              />
            </div>
            <div className="input-container">
              <Controller
                name="password_confirmation"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <PasswordInput
                    label="confirmar senha"
                    placeholder="Escolha uma senha segura"
                    onChange={onChange}
                    value={value}
                    error={error?.message}
                  />
                )}
              />
            </div>
            <Button type="submit" loading={loading}>
              Enviar
            </Button>
          </Form>
        </section>
      </Content>
    </Container>
  );
};

export default DefinePassword;
