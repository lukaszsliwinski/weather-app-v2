// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import components
import HourlyForecastItem from './HourlyForecastItem';

function Next24HoursForecast({ forecast24 }) {
    let content = []

    // List with forecast cards for each day
    for (let i=0; i<8; i++) {
        content.push(
            <HourlyForecastItem 
                time={forecast24.time24[i]}
                icon={forecast24.icons24[i]}
                temp={forecast24.temp24[i]}
            />
        );
    };

    return (
        <>
            <Row className=""><span className="frame-header">next 24 hours</span></Row>
            <Row className="my-2 border p-3">
                <div className="d-flex justify-content-between">
                    {content}
                </div>
            </Row>     
        </>
    );
};

export default Next24HoursForecast;