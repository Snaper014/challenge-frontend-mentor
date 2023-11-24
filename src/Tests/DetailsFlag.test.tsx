import { DetailsFlag } from '../Components/DetailsFlag';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { expect, test } from 'vitest';
import { renderRoute } from './config';

test("Affichage d'informations supplémentaires pour un pays", async () => {
  const user = userEvent.setup();
  const route = '/country/France';
  renderRoute(<DetailsFlag />, '/country/:country', route);
  expect(screen.getByText('French')).toBeInTheDocument();
  expect(screen.getByText('Paris')).toBeInTheDocument();
  await user.click(screen.getByText('Germany'));
  expect(screen.getByText('German')).toBeInTheDocument();
  expect(screen.getByText('Berlin')).toBeInTheDocument();
  expect(screen.queryByText('French')).not.toBeInTheDocument();
  expect(screen.queryByText('Paris')).not.toBeInTheDocument();
});
test("Le composant ne trouve aucun pays correspondant via l'url", () => {
  const route = '/country/inconnu';
  renderRoute(<DetailsFlag />, '/country/:country', route);
  expect(screen.getByText('Aucun Pays trouver')).toBeInTheDocument();
});
