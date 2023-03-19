import { ReactComponent as TempMax } from '../assets/svg/tempmax.svg';
import { ReactComponent as TempMin } from '../assets/svg/tempmin.svg';
import { ReactComponent as Sun } from '../assets/svg/sun.svg';
import { ReactComponent as Arrows } from '../assets/svg/arrows.svg';
import { ReactComponent as Wind } from '../assets/svg/wind.svg';
import { ReactComponent as Cloud } from '../assets/svg/cloud.svg';
import { ReactComponent as Pressure } from '../assets/svg/pressure.svg';
import { ReactComponent as Drop } from '../assets/svg/drop.svg';

import { IDataObject } from '../types';

function Main({ data }: { data: IDataObject }) {
  return (
    <div className="p-2 pt-4">
      <div className="xs:flex-row flex flex-col justify-between">
        <div>
          <h1 className="text-3xl">{data.place}</h1>
          <span className="text-base font-normal">{data.weather.description}</span>
        </div>
        <div className="xs:items-end xs:mt-0 mt-4 flex flex-col">
          <span className="text-base">
            {data.today} {data.now}
          </span>
          <div className="mt-1 flex text-sm font-normal">
            <Sun className="mr-0.5 w-3.5" />
            <Arrows className="mt-1 mr-2 h-3" />
            {data.weather.sunrise} - {data.weather.sunset}
          </div>
        </div>
      </div>
      <div className="xs:grid xs:grid-cols-3 xs:mt-8">
        <div className="xs:my-0 col-span-2 my-4 flex justify-center">
          <img className="xs:w-32 w-24" src={data.weather.icon} alt="Weather icon" />
          <div className="flex flex-col items-center justify-center">
            <span className="xs:text-5xl text-4xl">{data.weather.temp}°C</span>
            <span className="text-sm">
              sensed&nbsp;<span className="text-base">{data.weather.sensed}°C</span>
            </span>
          </div>
        </div>
        <div className="xs:flex-col xs:justify-start flex justify-around">
          <div className="grid w-28 grid-cols-5 text-sm font-normal">
            <div className="col-start-2 flex">
              <TempMax className="w-3.5" />
            </div>
            <div className="col-span-3">{data.weather.max}°C</div>
            <div className="col-start-2 flex">
              <TempMin className="w-3.5" />
            </div>
            <div className="col-span-3">{data.weather.min}°C</div>
            <div className="col-start-2 flex">
              <Wind className="w-3.5" />
            </div>
            <div className="col-span-3">{data.weather.wind} m/s</div>
          </div>
          <div className="grid w-28 grid-cols-5 text-sm font-normal">
            <div className="col-start-2 flex">
              <Cloud className="w-3.5" />
            </div>
            <div className="col-span-3">{data.weather.cloudiness} %</div>
            <div className="col-start-2 flex">
              <Pressure className="w-3" />
            </div>
            <div className="col-span-3">{data.weather.pressure} hPa</div>
            <div className="col-start-2 flex">
              <Drop className="w-2.5" />
            </div>
            <div className="col-span-3">{data.weather.humidity} %</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
