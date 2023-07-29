import { useWindowSize } from 'usehooks-ts';

import { ReactComponent as Calendar } from '../assets/svg/calendar.svg';
import { ReactComponent as Temp } from '../assets/svg/temp.svg';

import { IDailyForecast } from '../types';

function DailyForecast({ dailyForecast }: { dailyForecast: IDailyForecast }) {
  // get screen size
  const { width } = useWindowSize();

  let content = [];

  // List with forecast cards for each day
  for (let i = 0; i < 4; i++) {
    content.push(
      <div key={i} className="flex flex-col items-center">
        <div className="flex text-xs sm:text-sm">
          <Calendar className="mr-1.5 w-3" />
          {width < 480 ? dailyForecast.nextDays[i].substring(0, 3) : dailyForecast.nextDays[i]}
        </div>
        <img className="w-14 sm:w-20" src={dailyForecast.dailyIcons[i]} alt="Daily weather icon" />
        <div className="flex text-xs sm:text-sm">
          <Temp className="mr-1.5 w-2" />
          <div className="xs:flex-row xs:space-x-1 flex flex-col items-start">
            <span>{dailyForecast.maxTemp[i]}°C</span>
            <span className="xs:inline-block hidden">/</span>
            <span>{dailyForecast.minTemp[i]}°C</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 rounded-md bg-gray-200/20 py-2 shadow-lg">
      <h2 className="mb-4 text-center text-base underline">daily forecast</h2>
      <div className="flex justify-around">{content}</div>
    </div>
  );
}

export default DailyForecast;
