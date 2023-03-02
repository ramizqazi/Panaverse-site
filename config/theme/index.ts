import { extendTheme } from '@chakra-ui/react';

import styles from './styles';

const overrides = {
  styles,
  fonts: {
    body: 'Golos UI',
    text: 'Golos UI',
    heading: 'Golos UI',
  },
  config: {
    cssVarPrefix: 'panaverse',
  },
};

export default extendTheme(overrides);
