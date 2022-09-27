// import react components
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ConditionItem({ title, icon, data, unit }) {
    return (
        <Col xs={6} sm={3} lg={true} xl={3} className="d-flex justify-content-center align-items-center">
            <Card className="mb-1 border-0 bg-transparent">
                <Card.Body className="p-0 text-center">
                    <Card.Text className="mb-0 fw-semibold fs-6">
                        <FontAwesomeIcon icon={icon} size="xs" fixedWidth />&nbsp;{data}&nbsp;{unit}
                    </Card.Text>
                    <Card.Text className="mb-1 fw-semibold fs-070">{title}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ConditionItem;