import { useState } from 'react';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

import { api } from '@/shared/services/api';
import Button from '@/shared/components/Button';
import TextInput from '@/shared/components/Inputs/TextInput';

import { errorHandler } from '@/shared/utils/error-handler';

import { Container, Form } from './styles';

interface SendEmailVerificationFormData {
  email: string;
}

const defaultValues: SendEmailVerificationFormData = {
  email: ``,
};

const schema = yup.object().shape({
  email: yup.string().required(`campo obrigatório`),
});

const SendEmailVerification = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit } = useForm<SendEmailVerificationFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email }: SendEmailVerificationFormData) => {
    try {
      setLoading(true);

      await api.post(`/signup/send_email_verification`, {
        email,
      });

      toast.success(
        `email de confirmação enviado com sucesso.\n Por favor, checar sua caixa de entrada`,
      );
    } catch (error) {
      const message = errorHandler(error);
      toast.error(message);
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
            render={({
              field: { name, value, onChange },
              fieldState: { error },
            }) => (
              <TextInput
                label="email"
                placeholder="Ex: jonhdoe@email.com"
                onChange={onChange}
                value={value}
                error={error?.message}
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
