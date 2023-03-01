// import components
import { IForecast } from './types';

function DailyForecast({ forecast }: {forecast: IForecast }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
                <div className="text-center">
                    <div>{forecast.nextDays[i]}</div>
                    <img src={forecast.dailyIcons[i]} alt="Weather icon" />
                    <div key={i}>
                        <span>
                            &nbsp;{forecast.maxTemp[i]}°C
                        </span> /
                        <span>
                            {forecast.minTemp[i]}°C
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