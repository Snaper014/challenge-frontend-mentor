import { Region } from '../Components/Region';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { renderRoute } from './config';

test("Application d'un filtre pour une zone géographique", () => {
  const route = '/region/Europe';
  renderRoute(<Region />, '/region/:region', route);
  expect(screen.getByRole('heading', { name: /Europe/i })).toBeInTheDocument();
  expect(screen.getByText('France')).toBeInTheDocument();
  expect(screen.getByText('Croatia')).toBeInTheDocument();
  expect(screen.queryByText('Brazil')).not.toBeInTheDocument();
  expect(screen.queryByText('Argentina')).not.toBeInTheDocument();
});

test("Aplication d'un filtre méconnu via l'url ", () => {
  const route = '/region/Inconnu';
  renderRoute(<Region />, '/region/:region', route);
  expect(screen.getByText("Retour à l'acceuil")).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /Region non trouver/i })
  ).toBeInTheDocument();
});
