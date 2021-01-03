import React from 'react';
import { DisplayPreferenceProvider } from '../components';

export default function App({ children }) {
  return (
    <DisplayPreferenceProvider>
      { children }
    </DisplayPreferenceProvider>
 ); 
}
