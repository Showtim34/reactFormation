// App.tsx
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import LoginScreen from './src/screens/LoginScreen';

function App() {
    return (
        <PaperProvider>
            <LoginScreen />
        </PaperProvider>
    );
};

// eslint-disable-next-line import/no-default-export
export default App;