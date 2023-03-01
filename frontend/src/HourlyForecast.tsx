// import components
import { IHourlyForecast } from './types';

function HourlyForecast({ hourlyForecast }: { hourlyForecast: IHourlyForecast }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
            <div className="text-center">
                <div key={i}>{hourlyForecast.time[i]}</div>
                <div>
                    <img src={hourlyForecast.icons[i]} alt="Weather icon" />
                    <div>
                        {hourlyForecast.temp[i]}°C
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <span>next 24 hours</span>
            <div className='flex'>{content}</div>
        </>
    );
};

export default HourlyForecast;