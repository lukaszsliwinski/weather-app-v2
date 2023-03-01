import { IDataObject } from './types';

function Main({ data }: {data: IDataObject}) {
    return (
        <>
            <span className="fs-3">{data.place}</span><span>&nbsp;{data.today}</span><span>&nbsp;{data.now}</span>
            <div className='d-flex'>
                <div>
                    <div className="d-flex justify-content-center">
                        <img src={data.weather.icon} alt="Weather icon" />
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <span className="fs-1">
                                {data.weather.temp}°C
                            </span>
                            <span className="fs-080">
                                sensed&nbsp;
                                <span className="fs-6 fw-semibold">
                                    {data.weather.sensed}°C
                                </span>
                            </span>
                        </div>
                    </div>
                    <span className="fs-090">{data.weather.description}</span>
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