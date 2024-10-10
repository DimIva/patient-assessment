import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './routes';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="App">
      <AppRouter />
    </div>
  </QueryClientProvider>
  );
};

export default App;
