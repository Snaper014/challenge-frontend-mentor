import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { data } from '../data';
import { FlagCard } from '../Components/FlagCard';
import { customRender } from './config';
import { screen } from '@testing-library/react';

test('Affichage du composant FlagCard comme pour valeur Angola', () => {
  customRender(<FlagCard element={data[6]} />);
  expect(screen.getByText('Angola')).toBeInTheDocument();
  expect(screen.getByText('Africa')).toBeInTheDocument();
  expect(screen.getByText('Luanda')).toBeInTheDocument();
});
test('Affichage du composant FlagCard comme pour valeur Brazil', () => {
  customRender(<FlagCard element={data[31]} />);
  expect(screen.getByText('Brazil')).toBeInTheDocument();
  expect(screen.getByText('Americas')).toBeInTheDocument();
  expect(screen.getByText('Brasília')).toBeInTheDocument();
});
