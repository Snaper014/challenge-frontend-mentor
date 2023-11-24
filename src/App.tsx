import { Home } from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Region } from './Components/Region';
import { DetailsFlag } from './Components/DetailsFlag';
import { Error } from './Components/Error';
import { DataProvider } from './Context/ContextProvider';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region/:region" element={<Region />} />
          <Route path="/country/:country" element={<DetailsFlag />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}

export { App };
