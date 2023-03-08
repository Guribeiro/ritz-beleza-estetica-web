import { useRouter } from 'next/router';
import { isAxiosError } from 'axios';
import { ibge } from '@/shared/services/ibge';
import cepPromise from 'cep-promise';

import { useForm, Controller } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import MaskedInput from '@/shared/components/Inputs/MaskedInput';
import TextInput from '@/shared/components/Inputs/TextInput';
import FormSection from '@/shared/components/FormSection';
import Button from '@/shared/components/Button';
import Select from '@/shared/components/Select';

import { Container, Form } from './styles';
import { useEffect, useState } from 'react';

interface IBGEUFResponse {
  nome: string;
  sigla: string;
}

interface UFState extends IBGEUFResponse {
  id: string;
}

interface ServiceError {
  message: string;
  service: string;
}

interface CepPromiseError {
  name: string;
  message: string;
  type: 'service_error';
  errors: ServiceError[];
}

interface CustomerDetailsFormData {
  cep: string;
  address: string;
  city: string;
  street: string;
  number: string;
  district: string;
  neighborhood: string;
}

const defaultValues: CustomerDetailsFormData = {
  cep: ``,
  address: ``,
  city: ``,
  street: ``,
  number: ``,
  district: `none`,
  neighborhood: ``,
};

const schema = yup.object().shape({
  cep: yup
    .string()
    .transform((value: string, originalValue: string) => {
      return originalValue ? originalValue.replace(/[-_]/g, ``) : ``;
    })
    .length(8, `Informe seu cep`)
    .required(`Informe seu cep`),
  address: yup.string().required(`Obrigatório`),
  city: yup.string().required(`Selecione a sua cidade`),
  street: yup.string().required(`Obrigatório`),
  number: yup.string().required(`Obrigatório`),
  district: yup
    .string()
    .required(`Obrigatório`)
    .notOneOf([`none`], `Selecione o seu estado`),
  neighborhood: yup.string().required(`Obrigatório`),
});

const CustomerDetails = (): JSX.Element => {
  const { push } = useRouter();
  const [ufs, setUfs] = useState<UFState[]>([]);

  const { control, handleSubmit, getValues, reset } =
    useForm<CustomerDetailsFormData>({
      defaultValues,
      resolver: yupResolver(schema),
    });

  const onSubmit = (formData: CustomerDetailsFormData) => {
    console.log(formData);
  };

  async function fetchCep() {
    try {
      const [cep] = getValues([`cep`]);

      const cepFormatted = cep.replace(/[-_]/g, ``);

      if (cepFormatted.length < 8) {
        return;
      }

      const { neighborhood, city, state, street } = await cepPromise(
        cepFormatted,
      );

      reset({ ...getValues(), neighborhood, district: state, city, street });
    } catch (error) {
      const err = error as CepPromiseError;
      if (err.name === `CepPromiseError`) {
        alert(err.message);
        return;
      }
      alert(error);
    }
  }
  useEffect(() => {
    async function fetchUfs() {
      try {
        const storagedUfs = localStorage.getItem(`@ritz/ufs`);

        if (storagedUfs) {
          setUfs(JSON.parse(storagedUfs));

          return;
        }

        const { data } = await ibge.get<IBGEUFResponse[]>(
          `/localidades/estados`,
        );

        console.log(`chamou api`);

        const ufsFormatted = data.map(({ nome, sigla }) => ({
          id: sigla,
          nome,
          sigla,
        }));

        localStorage.setItem(`@ritz/ufs`, JSON.stringify(ufsFormatted));

        setUfs(ufsFormatted);
      } catch (error) {
        if (isAxiosError(error)) {
          alert(error.response?.data);
          return;
        }
        alert(error);
      }
    }

    fetchUfs();
  }, []);

  return (
    <Container>
      <section>
        <h3>Informações de endereço</h3>
        <p>
          Complete os campos abaixo para prosseguir com o seu cadastro na
          plataforma
        </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormSection label="Endereço">
            <div className="row">
              <div className="input-container">
                <Controller
                  name="cep"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <MaskedInput
                      label="cep"
                      mask={`99999-999`}
                      placeholder="00000-000"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                      onBlur={fetchCep}
                    />
                  )}
                />
              </div>
            </div>

            <div className="row">
              <div className="input-container">
                <Controller
                  name="district"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <Select
                      label="estado"
                      placeholder="Ex: São Paulo"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    >
                      <option value="none">Selecione um estado</option>
                      {ufs.map((uf) => (
                        <option key={uf.id} value={uf.sigla}>
                          {uf.nome}
                        </option>
                      ))}
                    </Select>
                  )}
                />
              </div>
              <div className="input-container">
                <Controller
                  name="city"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      label="cidade"
                      placeholder="Arujá"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
            </div>
            <div className="row address">
              <div className="input-container">
                <Controller
                  name="street"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      label="rua"
                      placeholder="Rodovia Alberto Hinoto"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div className="input-container">
                <Controller
                  name="number"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      placeholder="Nº"
                      onChange={(event) =>
                        onChange(event.target.value.replace(/[^\d.-]/g, ``))
                      }
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
                  name="address"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      placeholder="complemento"
                      onChange={onChange}
                      value={value}
                      error={error?.message}
                    />
                  )}
                />
              </div>
              <div className="input-container">
                <Controller
                  name="neighborhood"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextInput
                      placeholder="bairro"
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
