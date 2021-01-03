import { createContext } from 'react';

// constants
import constants from '../../constants';

const DisplayPreferenceContext = createContext({
  displayMode: constants.DEFAULT_DISPLAY_MODE,
  setDisplayMode: () => null,
});

export default DisplayPreferenceContext;
