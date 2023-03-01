// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import { IDataObject } from '../../../types';

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

function Main({ data }: {data: IDataObject}) {
    return (
        <Row className="h-100 px-1">
            <Col>
                <span className="fs-3">{data.place}</span><span>&nbsp;{data.today}</span><span>&nbsp;{data.now}</span>


                <div className="d-flex justify-content-center">
                    <Image className="w-9r" src={data.weather.icon} alt="Weather icon" />
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
            </Col>
            <Col>
                <Row className="">
                    <div>temp {data.weather.max} °C&emsp;temp {data.weather.min} °C</div>
                    <div>sun {data.weather.sunrise}&emsp;sun {data.weather.sunset}</div>
                    <div>wind speed {data.weather.wind} m/s</div>
                    <div>cloudiness {data.weather.cloudiness} %</div>
                    <div>pressure {data.weather.pressure} hPa</div>
                    <div>humidity {data.weather.humidity} %</div>
                </Row>
            </Col>
        </Row>
    );
};

export default Main;