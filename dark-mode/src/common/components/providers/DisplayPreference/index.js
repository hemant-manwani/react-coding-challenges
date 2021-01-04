import React from 'react';

// constants
import constants from '../../../../constants';

// context
import { DisplayPreferenceContext } from '../../../../context';

// hooks
import { useLocalStorage } from '../../../../hooks';

const updateRootHTMLClassList = isDark => {
  if (isDark) {
    document.documentElement.classList.add(constants.DARK_MODE_CLASSNAME);
  } else {
    document.documentElement.classList.remove(constants.DARK_MODE_CLASSNAME);
  }
};

const DisplayPreferenceProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage();

  const [displayMode, setDisplayMode] = React.useState(undefined);
  const isDark = displayMode === constants.DARK_DISPLAY_MODE;

  // side effects - when component mounts
  React.useEffect(() => {
    // side effect 1 - get the stored value and assign to provider state.
    const storedDisplayMode = getItem(constants.DISPLAY_MODE) || constants.DEFAULT_DISPLAY_MODE;
    setDisplayMode(storedDisplayMode);
    
    // side effect 2 - update te root html class list
    const isDarkMode = storedDisplayMode === constants.DARK_DISPLAY_MODE;
    updateRootHTMLClassList(isDarkMode);
  }, [getItem]);

  // side effects - when user toggles dark mode state
  React.useEffect(() => {
    // side effect 1 - update te root html class list
    updateRootHTMLClassList(isDark);

    // side effect 2 - get the stored value and assign to provider state.
    const mode = isDark ? constants.DARK_DISPLAY_MODE : constants.LIGHT_DISPLAY_MODE;
    setItem(constants.DISPLAY_MODE, mode);
  }, [isDark, setItem]);

  // define provider value to be consumed by any of the childrens.
  const providerValue = {
    isDark,
    toggleDarkMode: () => {
      const mode = isDark ? constants.LIGHT_DISPLAY_MODE : constants.DARK_DISPLAY_MODE;
      // update state to reflect changes to the consumer of this provider
      setDisplayMode(mode);
    },
  };

  return (
    <DisplayPreferenceContext.Provider value={providerValue}>
      { children }
    </DisplayPreferenceContext.Provider>
  );
};

export default DisplayPreferenceProvider;