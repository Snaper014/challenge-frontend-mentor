import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useContext } from '../Context/ContextProvider';


interface PropsSearchAndFilter {
  OnTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  displayFilter: boolean,
  setDisplayFilter: React.Dispatch<React.SetStateAction<boolean>>,
  select?: string,
}

export const SearchAndFilter = ({
  OnTextChange,
  displayFilter,
  setDisplayFilter,
  select,
}: PropsSearchAndFilter) => {
  const { DarkMode } = useContext();
  return (
    <form
      className="w-full h-[25vh] flex items-center justify-between max-md:mb-[5%]
          max-md:justify-around max-md:items-start max-md:flex-col max-md:flex-wrap"
    >
      <div
        className={`${
          DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
        } w-[35%] max-md:w-[95%] h-[48px] shadow-md flex flex-row items-start`}
      >
        <div
          className={`${
            DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
          } w-[15%] h-[100%] rounded-tl-[8px] rounded-bl-[8px] flex items-center justify-center`}
        >
          <AiOutlineSearch
            fontSize={18}
            height={'50%'}
            color={`${DarkMode ? '#FFFFFF' : 'black'}`}
            style={{ marginLeft: '10%' }}
          />
        </div>
        <input
          className={`${DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'} ${
            DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
          } w-[85%] h-[100%] rounded-tr-[8px] rounded-br-[8px]`}
          id={`${DarkMode ? 'Darksearch' : 'search'}`}
          type="text"
          onChange={OnTextChange}
          placeholder="Search for a country..."
        ></input>
      </div>
      <div
        onClick={() => setDisplayFilter(prev => !prev)}
        className={`${
          DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
        } h-[48px] z-[1] pointer-events-auto cursor-pointer relative rounded-[8px] text-[14px] shadow-md flex items-center justify-around`}
      >
        <h3
          className={`m-[15px] cursor-pointer text-[14px] font-[400] ${
            DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
          }`}
        >
          {(select === 'Filter By Region') || (select === undefined)
            ? 'Filter By Region' : select}
        </h3>
        <BiChevronDown
          color={`${DarkMode ? '#FFFFFF' : '#2B3845'}`}
          fontSize={18}
          style={{ margin: '15px' }}
        />
        {displayFilter ? (
          <ul
            className={`${
              DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
            } absolute p-[10%] z-[3] top-[54px] left-0 h-[160px] shadow-md w-full rounded no-underline`}
          >
            {select !== 'Africa' ? (
              <li className={`${DarkMode ? 'DarkHoverList' : 'HoverList'}`}>
                <Link
                  to={`/region/${'Africa'}`}
                  className={`w-full block ${
                    DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
                  }`}
                >
                  Africa
                </Link>
              </li>
            ) : null}
            {select !== 'America' ? (
              <li className={`${DarkMode ? 'DarkHoverList' : 'HoverList'}`}>
                <Link
                  to={`/region/${'America'}`}
                  className={`w-full block ${
                    DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
                  }`}
                >
                  America
                </Link>
              </li>
            ) : null}
            {select !== 'Asia' ? (
              <li className={`${DarkMode ? 'DarkHoverList' : 'HoverList'}`}>
                <Link
                  to={`/region/${'Asia'}`}
                  className={`w-full block ${
                    DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
                  }`}
                >
                  Asia
                </Link>
              </li>
            ) : null}
            {select !== 'Europe' ? (
              <li className={`${DarkMode ? 'DarkHoverList' : 'HoverList'}`}>
                <Link
                  to={`/region/${'Europe'}`}
                  className={`w-full block ${
                    DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
                  }`}
                >
                  Europe
                </Link>
              </li>
            ) : null}
            {select !== 'Oceania' ? (
              <li className={`${DarkMode ? 'DarkHoverList' : 'HoverList'}`}>
                <Link
                  to={`/region/${'Oceania'}`}
                  className={`w-full block ${
                    DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
                  }`}
                >
                  Oceania
                </Link>
              </li>
            ) : null}
            {select !== 'Filter By Region' ? (
              <li className={`${DarkMode ? 'DarkHoverList' : 'HoverList'}`}>
                <Link
                  to="/"
                  className={`w-full block ${
                    DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
                  }`}
                >
                  All Countries
                </Link>
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    </form>
  );
};
