import { ReactComponent as Clock } from '../assets/svg/clock.svg';
import { ReactComponent as Temp } from '../assets/svg/temp.svg';

import { IHourlyForecast } from '../types';

function HourlyForecast({ hourlyForecast }: { hourlyForecast: IHourlyForecast }) {
  let content = [];

  // List with forecast cards for hours
  for (let i = 0; i < 4; i++) {
    content.push(
      <div key={i} className="flex flex-col items-center">
        <div className="flex text-xs sm:text-sm">
          <Clock className="mr-1.5 w-3" />
          {hourlyForecast.time[i]}
        </div>
        <img className="w-14 sm:w-20" src={hourlyForecast.icons[i]} alt="Hourly weather icon" />
        <div className="flex text-xs sm:text-sm">
          <Temp className="mr-1.5 w-2" />
          {hourlyForecast.temp[i]}°C
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-md bg-gray-200/20 py-2 shadow-lg">
      <h2 className="mb-4 text-center text-base underline">next 24 hours</h2>
      <div className="flex justify-around">{content}</div>
    </div>
  );
}

export default HourlyForecast;
