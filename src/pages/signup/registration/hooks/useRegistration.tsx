import { useEffect, useState } from 'react';

import { CustomerDetailsFormData } from '../components/customer-details';
import { CustomerAddressFormData } from '../components/customer-address';

interface CustomerRegistrationData
  extends CustomerDetailsFormData,
    CustomerAddressFormData {}

interface StorageFields {
  first_name?: string;
  last_name?: string;
  birth_date?: string;
  cpf?: string;
  phone?: string;
  cep?: string;
  address?: string;
  city?: string;
  street?: string;
  number?: string;
  district?: string;
  neighborhood?: string;
}

const CUSTOMER_REGISTRATION_FORM_DATA_KEY = `@ritz/signup/customer-registration-form`;

export const useRegistration = () => {
  const [customerRegistrationData, setCustomerRegistrationData] =
    useState<CustomerRegistrationData>();

  const updateStoragedRegistrationFields = (fields: StorageFields) => {
    const storagedFields = localStorage.getItem(
      CUSTOMER_REGISTRATION_FORM_DATA_KEY,
    );

    if (storagedFields) {
      const storagedFieldsParsed = JSON.parse(storagedFields);

      Object.assign(storagedFieldsParsed, fields);

      localStorage.setItem(
        CUSTOMER_REGISTRATION_FORM_DATA_KEY,
        JSON.stringify(storagedFieldsParsed),
      );

      setCustomerRegistrationData(storagedFieldsParsed);

      return;
    }

    localStorage.setItem(
      CUSTOMER_REGISTRATION_FORM_DATA_KEY,
      JSON.stringify(fields),
    );
  };

  useEffect(() => {
    const fetchStoraged = () => {
      const storagedcustomerRegistrationData = localStorage.getItem(
        CUSTOMER_REGISTRATION_FORM_DATA_KEY,
      );

      if (!storagedcustomerRegistrationData) return;

      setCustomerRegistrationData(JSON.parse(storagedcustomerRegistrationData));
    };

    fetchStoraged();
  }, []);

  return {
    customerRegistrationData,
    updateStoragedRegistrationFields,
  };
};
