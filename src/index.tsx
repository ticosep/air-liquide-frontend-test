import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { queryClient } from './setup';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClientProvider } from '@tanstack/react-query';
import RootStore from './stores';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RootStore.StoreProvider value={RootStore.initialInstance}>
                <App />
            </RootStore.StoreProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
