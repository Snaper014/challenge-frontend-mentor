import * as React from 'react';
import { AppBar } from './MenuBar';
import { SearchAndFilter } from './SearchAndFilter';
import { data } from '../data';
import { useContext } from '../Context/ContextProvider';
import { FlagCard } from './FlagCard';

export const Home = () => {
  const [filterText, setFilterText] = React.useState('');
  const select = 'Filter By Region';
  const [displayFilter, setDisplayFilter] = React.useState(false);
  const { DarkMode } = useContext();

  const OnTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  return (
    <>
      <AppBar />
      <div
        className={`${
          DarkMode ? 'bg-[#202C36]' : 'bg-[#f9f9f9]'
        } w-full z-0 relative pr-[5%] pl-[5%] top-[10vh] h-full`}
      >
        <SearchAndFilter
          OnTextChange={OnTextChange}
          select={select}
          setDisplayFilter={setDisplayFilter}
          displayFilter={displayFilter}
        />
        <div className="w-full flex flex-wrap flex-row">
          {filterText === '' ? (
            <>
              {data.map((items, index) => (
                <FlagCard key={index} element={items} />
              ))}
            </>
          ) : (
            <>
              {data.map((items, index) => {
                let name = items?.name.toLocaleLowerCase();
                let text = filterText.toLocaleLowerCase();
                if (name.includes(text)) {
                  return <FlagCard key={index} element={items} />;
                }
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};
