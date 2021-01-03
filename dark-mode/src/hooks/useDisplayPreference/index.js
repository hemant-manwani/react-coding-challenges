import { useContext } from 'react';

// context
import { DisplayPreferenceContext } from '../../context';

const useDisplayPreference = () => {
  const displayPreference = useContext(DisplayPreferenceContext);

  return displayPreference;
};

export default useDisplayPreference;
