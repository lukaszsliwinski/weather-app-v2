// import components
import { IDailyForecast } from './types';

function DailyForecast({ dailyForecast }: {dailyForecast: IDailyForecast }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
                <div className="text-center">
                    <div>{dailyForecast.nextDays[i]}</div>
                    <img src={dailyForecast.dailyIcons[i]} alt="Weather icon" />
                    <div key={i}>
                        <span>
                            &nbsp;{dailyForecast.maxTemp[i]}°C
                        </span> /
                        <span>
                            {dailyForecast.minTemp[i]}°C
                        </span>
                    </div>
                </div>
        );
    };

    return (
        <>
            <span>daily forecast</span>
            <div className='flex'>{content}</div>
        </>
    );
};

export default DailyForecast;