import { ReactComponent as TempMax } from '../assets/svg/tempmax.svg';
import { ReactComponent as TempMin } from '../assets/svg/tempmin.svg';
import { ReactComponent as Sun } from '../assets/svg/sun.svg';
import { ReactComponent as Arrows } from '../assets/svg/arrows.svg';
import { ReactComponent as Wind } from '../assets/svg/wind.svg';
import { ReactComponent as Cloud } from '../assets/svg/cloud.svg';
import { ReactComponent as Pressure } from '../assets/svg/pressure.svg';
import { ReactComponent as Drop } from '../assets/svg/drop.svg';

import { IDataObject } from '../types';

function Main({ data }: {data: IDataObject}) {
    return (
        <div className='p-2'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-3xl'>{data.place}</h1>
                    <span className='font-normal text-base'>{data.weather.description}</span>
                </div>
                <div className='flex flex-col items-end'>
                    <span className='text-base'>{data.today} {data.now}</span>
                    <div className='flex font-normal text-sm mt-1'>
                        <Sun className='mr-0.5 w-3.5'/><Arrows className='mt-1 mr-2 h-3'/>{data.weather.sunrise} - {data.weather.sunset}
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-3 mt-8'>
                <div className="col-span-2 flex justify-center">
                    <img className='w-32' src={data.weather.icon} alt="Weather icon" />
                    <div className="flex flex-col justify-center items-center">
                        <span className='text-5xl'>{data.weather.temp}°C</span>
                        <span className='text-sm'>sensed&nbsp;<span className='text-base'>{data.weather.sensed}°C</span>
                        </span>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='font-normal text-sm'>
                        <div className='flex'>
                            <TempMax className='mr-2 w-3.5'/>{data.weather.max}°C
                        </div>
                        <div className='flex'>
                            <TempMin className='mr-2 w-3.5'/>{data.weather.min}°C
                        </div>
                        <div className='flex'>
                            <Wind className='mr-2 w-3.5'/>{data.weather.wind} m/s
                        </div>
                        <div className='flex'>
                            <Cloud className='mr-2 w-3.5'/>{data.weather.cloudiness} %
                        </div>
                        <div className='flex'>
                            <Pressure className='mr-2 w-3'/> {data.weather.pressure} hPa
                        </div>
                        <div className='flex'>
                            <Drop className='mr-2 mx-0.5 w-2.5'/> {data.weather.humidity} %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;