import { ReactComponent as Calendar } from '../assets/svg/calendar.svg';
import { ReactComponent as Temp } from '../assets/svg/temp.svg';

import { IDailyForecast } from '../types';

function DailyForecast({ dailyForecast }: {dailyForecast: IDailyForecast }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
            <div key={i} className="flex flex-col items-center">
                <div className='flex'>
                    <Calendar className='mr-1.5 w-3'/>{dailyForecast.nextDays[i]}
                </div>
                <img className='w-20' src={dailyForecast.dailyIcons[i]} alt="Weather icon" />
                <div className='flex'>
                    <Temp className='mr-1.5 w-2'/>{dailyForecast.maxTemp[i]}°C / {dailyForecast.minTemp[i]}°C
                </div>
            </div>
        );
    };

    return (
        <div className="mt-8">
            <h2 className='text-center my-2'>daily forecast</h2>
            <div className='flex justify-around'>{content}</div>
        </div>
    );
};

export default DailyForecast;