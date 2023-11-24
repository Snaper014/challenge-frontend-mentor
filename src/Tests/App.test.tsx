import userEvent from '@testing-library/user-event';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from '../App';
import { expect, test } from 'vitest';


test("rechercher un pays en particulier via l'input", async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(screen.getByText('San José')).toBeInTheDocument();
  const elementsearch = screen.getByPlaceholderText('Search for a country...');
  await user.type(elementsearch, 'Denmark');
  expect(screen.getByText('Copenhagen')).toBeInTheDocument();
  expect(screen.queryByText('San José')).not.toBeInTheDocument();
  await user.clear(elementsearch);
  expect(screen.getByText('San José')).toBeInTheDocument();
});

test('passer en dark mode ou light mode', async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(
    screen.getByRole('button', { name: /Dark Mode/i })
  ).toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: /Dark Mode/i }));
  expect(
    screen.getByRole('button', { name: /Light Mode/i })
  ).toBeInTheDocument();
  expect(
    screen.queryByRole('button', { name: /Dark Mode/i })
  ).not.toBeInTheDocument();
  await user.click(screen.getByRole('button', { name: /Light Mode/i }));
  expect(
    screen.getByRole('button', { name: /Dark Mode/i })
  ).toBeInTheDocument();
});

test('Filtrer par région', async () => {
  const user = userEvent.setup();
  render(<App />);
  expect(
    screen.queryByRole('heading', { name: /Belgium/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Taiwan/i })).toBeInTheDocument();
  await user.click(screen.getByText('Filter By Region'));
  await user.click(screen.getByRole('link', { name: 'Asia' }));
  expect(
    screen.queryByRole('heading', { name: /Belgium/i })
  ).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Taiwan/i })).toBeInTheDocument();
  await user.click(screen.getByRole('heading', { name: /Asia/i }));
  await user.click(screen.getByRole('link', { name: /All Countries/i }));
 
});

test('se rediriger vers la page Bahamas', async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(screen.queryByText("Bahamian dollar")).not.toBeInTheDocument();
    expect(screen.getByText(/Nassau/i)).toBeInTheDocument();
    await user.click(screen.getByRole("link", {name: /Bahamas/i}))
    expect(screen.getByText("Bahamian dollar")).toBeInTheDocument();
  });

