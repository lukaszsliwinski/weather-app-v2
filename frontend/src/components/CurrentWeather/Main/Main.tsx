// import react components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IDataObject } from '../../../types';


function Main({ data }: {data: IDataObject}) {
    return (
        <Row className="h-100 px-1">
            <Col>
                <div className="d-flex justify-content-between mt-3">
                    <div>
                        <span className="fs-3">{data.place}</span>
                        <br></br>
                        <span className="fs-090">{data.weather.description}</span>
                    </div>
                    <div>
                        {/* <FontAwesomeIcon icon="fa-regular fa-calendar" fixedWidth /><span>&nbsp;{data.today}</span> */}
                        <br></br>
                        {/* <FontAwesomeIcon icon="fa-regular fa-clock" fixedWidth /><span>&nbsp;{data.now}</span> */}
                    </div>
                </div>

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
            </Col>
        </Row>
    );
};

export default Main;