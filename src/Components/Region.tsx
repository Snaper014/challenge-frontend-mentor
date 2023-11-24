import * as React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SearchAndFilter } from './SearchAndFilter';
import { AppBar } from './MenuBar';
import { BsArrowLeft } from 'react-icons/bs';
import { useContext } from '../Context/ContextProvider';
import { FlagCard } from './FlagCard';
import { data } from '../data';

export const Region = () => {
  const filters: (string | undefined)[] = 
      ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  let { region } = useParams();
  const navigate = useNavigate();
  let regionName = region === 'America' ? 'Americas' : region;
  const NewData = data.filter((element) => element?.region === regionName);
  const [filterText, setFilterText] = React.useState('');
  const [displayFilter, setDisplayFilter] = React.useState(false);
  const { DarkMode } = useContext();

  const OnTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  if (!filters.includes(region)) {
    return (
      <>
        <AppBar />
        <div
          className={`${
            DarkMode ? 'bg-[#202C36]' : 'bg-[#f9f9f9]'
          } w-full z-0 relative pr-[5%] pl-[5%] top-[10vh] h-full`}
        >
          <button
            onClick={() => navigate('/')}
            className={`${
              DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
            } h-[38px] w-[218px] mt-[30px] mb-[30px] flex items-center justify-center rounded-[6px] shadow-md`}
            style={{ textDecoration: 'none' }}
          >
            <BsArrowLeft
              color={`${DarkMode ? '#FFFFFF' : '#2B3845'}`}
              fontSize={17}
              style={{ marginRight: '3px' }}
            />
            <h2
              className={`${
                DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
              } p-[10%] text-[14px] font-[300] whitespace-pre`}
            >
              Retour à l'acceuil
            </h2>
          </button>
          <h1
            className={`font-[800] w-full text-[25px] text-center mt-[10px] ${
              DarkMode ? 'text-[#f9f9f9]' : 'text-[#202C36]'
            }`}
          >
            Region non trouver
          </h1>
        </div>
      </>
    );
  }

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
          select={region}
          setDisplayFilter={setDisplayFilter}
          displayFilter={displayFilter}
        />
        <div className="w-full flex flex-wrap flex-row">
          {filterText === '' ? (
            <>
              {NewData.map((items, index) => (
                <FlagCard key={index} element={items} />
              ))}
            </>
          ) : (
            <>
              {NewData.map((items, index) => {
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
