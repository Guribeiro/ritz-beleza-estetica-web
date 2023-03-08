import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import MaskedInput from '@/shared/components/Inputs/MaskedInput';
import TextInput from '@/shared/components/Inputs/TextInput';
import FormSection from '@/shared/components/FormSection';
import Button from '@/shared/components/Button';

import { Container, Form } from './styles';

interface CustomerDetailsFormData {
  first_name: string;
  last_name: string;
  birth_date: string;
  cpf: string;
  phone: string;
}

const defaultValues: CustomerDetailsFormData = {
  first_name: ``,
  last_name: ``,
  birth_date: ``,
  cpf: ``,
  phone: ``,
};

const schema = yup.object().shape({
  first_name: yup.string().required(`Obrigatório`),
  last_name: yup.string().required(`Obrigatório`),
  birth_date: yup
    .string()
    .transform((value: string, originalValue: string) => {
      return originalValue ? originalValue.replace(/[/_]/g, ``) : ``;
    })
    .length(8, `Formato inválido`)
    .required(`Informe seu nascimento`),
  cpf: yup
    .string()
    .transform((value: string, originalValue: string) => {
      return originalValue ? originalValue.replace(/[._-]/g, ``) : ``;
    })
    .length(11, `Formato inválido`)
    .required(`Informe seu nascimento`),
  phone: yup
    .string()
    .transform((value: string, originalValue: string) => {
      return originalValue ? originalValue.replace(/[()_-]/g, ``) : ``;
    })
    .length(16, `Formato inválido`)
    .required(`Informe seu nascimento`),
});

const CustomerDetails = (): JSX.Element => {
  const { push } = useRouter();

  const { control, handleSubmit } = useForm<CustomerDetailsFormData>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = ({
    first_name,
    last_name,
    birth_date,
    cpf,
    phone,
  }: CustomerDetailsFormData) => {
    try {
      const birth_date_formatted = birth_date.replace(
        /(\d{2})(\d{2})(\d{4})/,
        `$1/$2/$3`,
      );

      const cpf_formatted = cpf.replace(
        /(\d{3})(\d{3})(\d{3})(\d{2})/,
        `$1.$2.$3-$4`,
      );

      const phoneFormatted = phone.replace(/ +/g, ``);

      console.log({
        first_name,
        last_name,
        birth_date_formatted,
        cpf_formatted,
        phone: phoneFormatted,
      });

      push(`/signup/define-password`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <section>
        <h3>Informações pessoais</h3>
        <p>
          Complete os campos abaixo para prosseguir com o seu cadastro na
          plataforma
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormSection label="Dados Pessoais">
            <div className="row">
              <div className="input-container">
                <Controller
                  name="first_name"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      label="nome"
                      placeholder="Informe seu nome"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div className="input-container">
                <Controller
                  name="last_name"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      label="sobrenome"
                      placeholder="Informe seu sobrenome"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <Controller
                  name="birth_date"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <MaskedInput
                      label="data de nascimento"
                      mask={`99/99/9999`}
                      placeholder="Ex: 20/04/1997"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div className="input-container">
                <Controller
                  name="cpf"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <MaskedInput
                      label="cpf"
                      mask={`999.999.999-99`}
                      placeholder="000.000.000-00"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <Controller
                  name="phone"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <MaskedInput
                      label="telefone"
                      mask={`+55 (99) 99999-9999`}
                      placeholder="+55 (99) 99999-9999"
                      prefix="+55"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
            </div>
          </FormSection>

          <Button type="submit">Enviar</Button>
        </Form>
      </section>
    </Container>
  );
};

export default CustomerDetails;
