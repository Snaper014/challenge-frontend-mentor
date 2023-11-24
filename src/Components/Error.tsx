import { AppBar } from './MenuBar';
import { useContext } from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

export const Error = () => {
  const { DarkMode } = useContext();
  const navigate = useNavigate();

  return (
    <>
      <AppBar />
      <div
        className={`${
          DarkMode ? 'bg-[#202C36]' : 'bg-[#f9f9f9]'
        }  }w-full z-0 relative pr-[5%] pl-[5%] top-[10vh] h-full`}
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
          Tromper de chemin ?
        </h1>
      </div>
    </>
  );
};
