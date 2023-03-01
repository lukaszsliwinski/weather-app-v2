// import components
import { IForecast24 } from './types';

function Next24HoursForecast({ forecast24 }: { forecast24: IForecast24 }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
            <div>
                <div key={i} className="fw-semibold fs-115">{forecast24.time24[i]}</div>
                <div>
                    <img src={forecast24.icons24[i]} alt="Weather icon" />
                    <div className="fs-115 fw-semibold">
                        {forecast24.temp24[i]}°C
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <span>next 24 hours</span>
            <div className='d-flex'>{content}</div>
        </>
    );
};

export default Next24HoursForecast;