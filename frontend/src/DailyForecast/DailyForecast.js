// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import components
import DailyForecastCard from './DailyForecastCard/DailyForecastCard';


function DailyForecast({ forecast, forecastDetails }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<4; i++) {
        content.push(
            <Col>
                <DailyForecastCard 
                    day={forecast.nextDays[i]}
                    icon={forecast.dailyIcons[i]}
                    max={forecast.maxTemp[i]}
                    min={forecast.minTemp[i]}

                    modalHours={forecastDetails.hours}
                    modalIcons={forecastDetails.icons[i]}
                    modalTemp={forecastDetails.temp[i]}
                />
            </Col>
        );
    };

    return (
        <>
            <Row className=""><span className="frame-header">daily forecast</span></Row>
            <Row className="my-2 border p-3">
                {content}
            </Row>     
        </>
    );
};

export default DailyForecast;