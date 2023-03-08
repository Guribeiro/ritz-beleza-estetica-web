import { Container, Form } from './styles';
import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import PasswordInput from '@/shared/components/Inputs/PasswordInput';
import Button from '@/shared/components/Button';

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

const DefinePassword = (): JSX.Element => {
  const { control, handleSubmit } = useForm<DefinePasswordFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    password,
    password_confirmation,
  }: DefinePasswordFormData) => {
    try {
      console.log({ password, password_confirmation });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
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
                  placeholder="senha"
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
                  placeholder="confirmar senha"
                  onChange={onChange}
                  value={value}
                  error={error?.message}
                />
              )}
            />
          </div>
          <Button type="submit">Enviar</Button>
        </Form>
      </section>
    </Container>
  );
};

export default DefinePassword;
