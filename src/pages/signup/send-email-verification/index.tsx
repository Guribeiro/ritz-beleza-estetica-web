import { Container, Form } from './styles';

import TextInput from '@/shared/components/Inputs/TextInput';
import Button from '@/shared/components/Button';

const SendEmailVerification = (): JSX.Element => {
  return (
    <Container>
      <section>
        <h3>Verificação de email</h3>
        <p>Antes de prosseguirmos, precisamos confirmar o seu email</p>
        <Form action="">
          <TextInput placeholder="email" />
          <Button>Enviar</Button>
        </Form>
      </section>
    </Container>
  );
};

export default SendEmailVerification;
