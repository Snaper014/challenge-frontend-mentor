import { HiOutlineMoon } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';
import { useContext } from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';

export const AppBar = () => {
  const { DarkMode, setDarkMode } = useContext();
  const navigate = useNavigate();
  return (
    <header
      className={`fixed left-0 top-0 border-b-[1px solid black] z-10 shadow-md w-full h-[10vh]
              ${
                DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
              } flex items-center justify-between`}
    >
      <h1
        onClick={() => navigate('/')}
        className={`ml-[5%] cursor-pointer ${
          window.innerWidth <= 375 ? 'text-[0.8em]' : 'text-[20px]'
        }  font-[800] ${DarkMode ? 'text-[#FFFFFF]' : 'text-black'}`}
      >
        Where in the world?
      </h1>
      <button
        onClick={() => {
          const storage: string | null = localStorage.getItem("ThemeMode");
          if(storage === "lightMode"){
            localStorage.setItem("ThemeMode", "DarkMode");
            setDarkMode(prev => !prev);
          }else{
            localStorage.setItem("ThemeMode", "lightMode");
            setDarkMode(prev => !prev);
          }
        }}
        className="flex items-center justify-center h-full mr-[5%]"
      >
        {DarkMode ? (
          <BsFillSunFill
            fontSize={21}
            color="white"
            style={{ marginRight: '10px' }}
          />
        ) : (
          <HiOutlineMoon fontSize={21} style={{ marginRight: '10px' }} />
        )}
        <p
          className={`${
            DarkMode ? 'text-[#FFFFFF]' : 'text-black'
          } text-[14px] font-[600] whitespace-nowrap`}
        >
          {DarkMode ? 'Light Mode' : 'Dark Mode'}
        </p>
      </button>
    </header>
  );
};
