import { Container, Form } from './styles';

import { useForm, Controller } from 'react-hook-form';

import TextInput from '@/shared/components/Inputs/TextInput';
import Button from '@/shared/components/Button';

import { api } from '@/shared/services/api';
import { useState } from 'react';
import { errorHandler } from '@/shared/utils/error-handler';

interface SendEmailVerificationFormData {
  email: string;
}

const defaultValues: SendEmailVerificationFormData = {
  email: ``,
};

const SendEmailVerification = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<SendEmailVerificationFormData>({
    defaultValues,
  });

  const onSubmit = async ({ email }: SendEmailVerificationFormData) => {
    try {
      setLoading(true);

      await api.post(`/signup/send_email_verification`, {
        email,
      });

      alert(
        `email de confirmação enviado com sucesso.\n Por favor, chegue sua caixa de entrada`,
      );
    } catch (error) {
      const message = errorHandler(error);

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <section>
        <h3>Verificação de email</h3>
        <p>Antes de prosseguirmos, precisamos confirmar o seu email</p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="email"
            render={({ field: { name, value, onChange } }) => (
              <TextInput
                name={name}
                placeholder="email"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Button loading={loading} type="submit">
            Enviar
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default SendEmailVerification;
