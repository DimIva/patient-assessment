import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRouter from './routes';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App font-manrope font-medium h-screen w-screen p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] xl:p-[60px]">
      <AppRouter />
    </div>
  </QueryClientProvider>
  );
};

export default App;
