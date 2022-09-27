// import react components
import Row from 'react-bootstrap/Row';

// import components
import DailyForecastCard from './DailyForecastCard/DailyForecastCard';


function DailyForecast({ forecast, forecastDetails }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
            <DailyForecastCard 
                day={forecast.nextDays[i]}
                icon={forecast.dailyIcons[i]}
                max={forecast.maxTemp[i]}
                min={forecast.minTemp[i]}

                modalDate={forecast.nextDates[i]}
                modalHours={forecastDetails.hours}
                modalIcons={forecastDetails.icons[i]}
                modalTemp={forecastDetails.temp[i]}
            />
        );
    };

    return (
        <>
            <Row className="translate-y-150 mx-3 fs-070 fw-bold">daily forecast</Row>
            <Row className="m-1 pt-4 pb-3 bg-section">
                {content}
            </Row>     
        </>
    );
};

export default DailyForecast;