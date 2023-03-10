import StepWizard from 'react-step-wizard';

import CustomerDetails from './components/customer-details';
import CustomerAddress from './components/customer-address';
import DefinePassword from './components/define-password';

const Registration = (): JSX.Element => {
  return (
    <StepWizard>
      <CustomerDetails />
      <CustomerAddress />
      <DefinePassword />
    </StepWizard>
  );
};

export default Registration;
