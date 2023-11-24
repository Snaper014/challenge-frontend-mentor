import { customRender } from './config';
import { useContext } from '../Context/ContextProvider';
import { ContextProvider } from './config';
import { renderHook, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect } from 'vitest';
import { act } from 'react-dom/test-utils';

const Compenent = ({ value }: {value: boolean}) => {
  return (
    <div>
      <p>{value ? 'Mode Dark' : 'Light Mode'}</p>
    </div>
  );
};
test('test du hook useContext provider', () => {
  const { result } = renderHook(
    () => {
      const { DarkMode, setDarkMode } = useContext();
      return { DarkMode, setDarkMode };
    },
    { wrapper: ContextProvider }
  );
  const { rerender } = customRender(
    <Compenent value={result.current.DarkMode} />
  );
  expect(result.current.DarkMode).toBe(false);
  expect(screen.getByText(/Light Mode/i)).toBeInTheDocument();
  act(() => {
    result.current.setDarkMode(true);
  });
  expect(result.current.DarkMode).toBe(true);
  rerender(<Compenent value={result.current.DarkMode} />);
  expect(screen.getByText(/Mode Dark/i)).toBeInTheDocument();
});
