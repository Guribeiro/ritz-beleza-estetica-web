import { keyframes } from 'styled-components';

export const pulse = keyframes`
  0% {
		box-shadow: 0 0 0 0 rgba(241, 154, 62, 1);
	}

	70% {
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`;

export const jumping = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(2px);
  }
`;

export const rotate = keyframes`
  from {

    transform: rotate(0deg);
  }
  to {

    transform: rotate(360deg);
  }
`;
