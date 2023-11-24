import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { DataProvider } from '../Context/ContextProvider';
import { Home } from '../Components/Home';
import { Error } from '../Components/Error';
import { BrowserRouter, Routes, Route, MemoryRouter } from 'react-router-dom';

const AllTheProviders = ({ children }: {children: React.ReactNode}) => {
  return (
    <BrowserRouter>
      <DataProvider>{children}</DataProvider>
    </BrowserRouter>
  );
};

const ContextProvider = ({ children }: {children: React.ReactNode}) => {
  return <DataProvider>{children}</DataProvider>;
};
const renderRoute = (composant: React.JSX.Element, initialRoute: string, NewRoute: string) =>
  render(
    <MemoryRouter initialEntries={[NewRoute]}>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={initialRoute} element={composant} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DataProvider>
    </MemoryRouter>
  );

const customRender = (
    ui: React.ReactElement, 
    options?: Omit<RenderOptions, 'wrapper'>, 
) => render(ui, { wrapper: AllTheProviders, ...options });

export { customRender, ContextProvider, renderRoute };
