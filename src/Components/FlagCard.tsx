import { Link } from 'react-router-dom';
import { useContext } from '../Context/ContextProvider';
import { NumberPop } from '../helper/NumberPopulation';
import { PropsData } from '../type';


interface Props {
    element: PropsData,
}

export const FlagCard = ({ element }: Props) => {
  const { DarkMode } = useContext();
  return (
    <div
      className={`${
        DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
      } w-[250px] h-[auto] rounded-[5px] mb-[5%] mr-[2%] 
        shadow-md max-md:w-full max-md:mr-[0px] max-md:h-[auto] max-md:mb-[25px]`}
    >
      <Link
        to={`/country/${element?.name}`}
        className="w-[250px]"
        style={{
          textDecoration: 'none',
        }}
      >
        <img
          className="shadow-md rounded-tl-[5px] rounded-tr-[5px]"
          alt={element?.name}
          width={250}
          height={150}
          src={`${element?.flags?.png}`}
        ></img>
      </Link>

      <div className="w-full h-[60%] pl-[10%] pr-[10%]">
        <h2
          className={`${
            DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
          } mt-[5%] mb-[5%] text-[16px] font-[600]`}
        >
          {element?.name.length >= 23
            ? element?.name.substring(0, 23) + '...'
            : element?.name}
        </h2>
        <p className={`${DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'}`}>
          Population:{' '}
          <span
            className={`text-[14px] font-[300] ${
              DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
            }`}
          >
            {NumberPop(element?.population)}
          </span>
        </p>
        <p className={`${DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'}`}>
          Region:{' '}
          <span
            className={`text-[14px] font-[300] ${
              DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
            }`}
          >
            {element?.region}
          </span>
        </p>
        {!element?.capital ? null : (
          <p className={`${DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'}`}>
            Capital:{' '}
            <span
              className={`text-[14px] font-[300] ${
                DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
              }`}
            >
              {element?.capital}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};
