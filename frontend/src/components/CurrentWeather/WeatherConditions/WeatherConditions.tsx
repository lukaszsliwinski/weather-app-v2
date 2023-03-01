// import react components
import Row from 'react-bootstrap/Row';

// import components
import { IDataObject } from '../../../types';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ConditionItem({ title, data, unit }: { title: string, data: string, unit: string | undefined }) {
    return (
        <Col xs={6} sm={3} lg={true} xl={3} className="d-flex justify-content-center align-items-center">
            <Card className="mb-1 border-0 bg-transparent">
                <Card.Body className="p-0 text-center">
                    <Card.Text className="mb-0 fw-semibold fs-6">
                        {data}&nbsp;{unit}
                    </Card.Text>
                    <Card.Text className="mb-1 fw-semibold fs-070">{title}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};


function WeatherConditions({ data }: {data: IDataObject}) {
    return (
        <>
            <Row className="">
                <ConditionItem title="max temp" data={data.weather.max} unit="°C" />
                <ConditionItem title="min temp" data={data.weather.min} unit="°C" />
                <ConditionItem title="sunrise" data={data.weather.sunrise} unit={undefined} />
                <ConditionItem title="sunset" data={data.weather.sunset} unit={undefined} />
                <ConditionItem title="wind speed" data={data.weather.wind} unit="m/s" />
                <ConditionItem title="cloudiness" data={data.weather.cloudiness} unit="%" />
                <ConditionItem title="pressure" data={data.weather.pressure} unit="hPa" />
                <ConditionItem title="humidity" data={data.weather.humidity} unit="%" />
            </Row>
        </>
    );
};

export default WeatherConditions;