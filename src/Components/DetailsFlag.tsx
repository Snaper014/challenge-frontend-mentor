import * as React from 'react';
import { AppBar } from './MenuBar';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { data } from '../data';
import { ACodeToName } from '../helper/ConvertCodeToName';
import { useContext } from '../Context/ContextProvider';
import { NumberPop } from '../helper/NumberPopulation';
import { BsArrowLeft } from 'react-icons/bs';

export const DetailsFlag = () => {
  let { country } = useParams();
  const navigate = useNavigate();
  const DataFilter = data.find((items) => items?.name === country);
  const NewData = DataFilter;
  const { DarkMode } = useContext();

  console.log("NewData", NewData);

  if (!NewData) {
    return (
      <>
        <AppBar />
        <div
          className={` ${
            DarkMode ? 'bg-[#202C36]' : 'bg-[#f9f9f9]'
          } w-full z-0 relative pr-[5%] pl-[5%] top-[10vh] h-full`}
        >
          <button
            onClick={() => navigate(-1)}
            className={`${
              DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
            } w-[120px] h-[38px] mt-[30px] mb-[30px] flex items-center justify-center rounded-[6px] shadow-md`}
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
              } p-[10%] text-[14px] font-[300]`}
            >
              Back
            </h2>
          </button>
          <h1
            className={`font-[800] w-full text-[25px] text-center mt-[10px] ${
              DarkMode ? 'text-[#f9f9f9]' : 'text-[#202C36]'
            }`}
          >
            Aucun Pays trouver
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <AppBar />
      <div
        className={` ${
          DarkMode ? 'bg-[#202C36]' : 'bg-[#f9f9f9]'
        } w-full z-0 relative pr-[5%] pl-[5%] top-[10vh] h-full`}
      >
        <div className="w-full h-[25vh] flex items-center">
          <button
            onClick={() => navigate(-1)}
            className={`${
              DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
            } w-[120px] h-[38px] flex items-center justify-center rounded-[6px] shadow-md`}
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
              } p-[10%] text-[14px] font-[300]`}
            >
              Back
            </h2>
          </button>
        </div>
        <div className="w-full flex flex-nowrap flex-row mb-[3%] max-md:flex-wrap max-md:flex-col">
          <div className="w-[50%] flex items-center justify-center max-md:w-full">
            <img
              alt={NewData?.name}
              width="70%"
              height="70%"
              src={`${NewData?.flag}`}
            />
          </div>
          <div className="w-[50%] max-md:w-full max-md:flex max-md:flex-col max-md:flex-wrap">
            <h1
              className={`${
                DarkMode ? 'text-[#FFFFFF]' : 'text-[#2B3845]'
              } w-full text-[20px] font-[800] mt-[4%] mb-[3%]`}
            >
              {NewData?.name}
            </h1>
            <div className="w-full flex flex-nowrap flex-row max-md:flex-wrap max-md:flex-col">
              <div className="w-[50%] max-md:w-full max-md:mb-[5%]">
                <p
                  className={`${
                    DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                  } max-md:mb-[1%]`}
                >
                  Native Name:{' '}
                  <span
                    className={`text-[14px] font-[300] ${
                      DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                    }`}
                  >
                    {NewData?.nativeName}
                  </span>
                </p>
                <p
                  className={`${
                    DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                  } max-md:mb-[1%]`}
                >
                  Population:{' '}
                  <span
                    className={`text-[14px] font-[300] ${
                      DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                    }`}
                  >
                    {NumberPop(NewData?.population)}
                  </span>
                </p>
                <p
                  className={`${
                    DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                  } max-md:mb-[1%]`}
                >
                  Region:{' '}
                  <span
                    className={`text-[14px] font-[300] ${
                      DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                    }`}
                  >
                    {NewData?.region}
                  </span>
                </p>
                <p
                  className={`${
                    DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                  } max-md:mb-[1%]`}
                >
                  Sub Region:{' '}
                  <span
                    className={`text-[14px] font-[300] ${
                      DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                    }`}
                  >
                    {NewData?.subregion}
                  </span>
                </p>
                {!NewData?.capital ? null : (
                  <p
                    className={`${
                      DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                    } max-md:mb-[1%]`}
                  >
                    Capital:{' '}
                    <span
                      className={`text-[14px] font-[300] ${
                        DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                      }`}
                    >
                      {NewData?.capital}
                    </span>
                  </p>
                )}
              </div>
              <div className="w-[50%] max-md:w-full">
                <p
                  className={`${
                    DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                  } max-md:mb-[1%]`}
                >
                  Top Level Domain:{' '}
                  <span
                    className={`text-[14px] font-[300] ${
                      DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                    }`}
                  >
                    {NewData?.topLevelDomain[0]}
                  </span>
                </p>
                {!NewData?.currencies ? null : (
                  <p
                    className={`${
                      DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                    } max-md:mb-[1%]`}
                  >
                    Currencies:{' '}
                    <span
                      className={`text-[14px] font-[300] ${
                        DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                      }`}
                    >
                      {NewData?.currencies[0]?.name}
                    </span>
                  </p>
                )}
                <p
                  className={`${
                    DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                  } max-md:mb-[1%]`}
                >
                  Languages:{' '}
                  <span
                    className={`text-[14px] font-[300] ${
                      DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                    }`}
                  >
                    {NewData?.languages.map((items, index) => (
                      <React.Fragment key={index}>
                        {items?.name}
                        {NewData?.languages.length - 1 === index ? null : ', '}
                      </React.Fragment>
                    ))}
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-row flex-wrap mt-[3%]">
              {!NewData?.borders ? null : (
                <p
                  className={`${
                    DarkMode ? 'text-[#f9f9f9c7]' : 'text-[#2B3845]'
                  } mr-[5%] mb-[2%] max-md:w-full max-md:mb-[4%] max-md:mr-0`}
                >
                  Border Countries:
                </p>
              )}
              {!NewData?.borders
                ? null
                : NewData?.borders.map((items, index) => {
                    const name = ACodeToName(items);
                    return (
                      <Link
                        key={index}
                        to={`/country/${name}`}
                        className={`${
                          DarkMode ? 'bg-[#2B3845]' : 'bg-[#FFFFFF]'
                        } mr-[3%] mb-[8px] flex items-center justify-center rounded-[6px] shadow-md`}
                        style={{ textDecoration: 'none' }}
                      >
                        <span
                          className={`text-[14px] m-[5px] font-[300] ${
                            DarkMode ? 'text-[#848484]' : 'text-[#2B3845]'
                          }`}
                        >
                          {name}
                        </span>
                      </Link>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
