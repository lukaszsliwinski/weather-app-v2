import { IDataObject } from './types';

function Main({ data }: {data: IDataObject}) {
    return (
        <>
            <span>{data.place}</span><span>&nbsp;{data.today}</span><span>&nbsp;{data.now}</span>
            <div className='flex'>
                <div>
                    <div className="flex justify-center">
                        <img src={data.weather.icon} alt="Weather icon" />
                        <div className="flex flex-col justify-center items-center">
                            <span>
                                {data.weather.temp}°C
                            </span>
                            <span>
                                sensed&nbsp;
                                <span>
                                    {data.weather.sensed}°C
                                </span>
                            </span>
                        </div>
                    </div>
                    <span>{data.weather.description}</span>
                </div>
                <div>
                    <div>temp {data.weather.max} °C&emsp;temp {data.weather.min} °C</div>
                    <div>sun {data.weather.sunrise}&emsp;sun {data.weather.sunset}</div>
                    <div>wind speed {data.weather.wind} m/s</div>
                    <div>cloudiness {data.weather.cloudiness} %</div>
                    <div>pressure {data.weather.pressure} hPa</div>
                    <div>humidity {data.weather.humidity} %</div>
                </div>
            </div>
        </>
    );
};

export default Main;