// import react components
import Card from 'react-bootstrap/Card';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ConditionItem({ title, icon, data, unit }) {
    return (
        <Card className="mb-1 border-0 bg-transparent">
            <Card.Body className="p-0 text-center">
                <Card.Text className="mb-0 fw-semibold fs-6">
                    <FontAwesomeIcon icon={icon} size="xs" fixedWidth />&nbsp;{data}&nbsp;{unit}
                </Card.Text>
                <Card.Text className="mb-1 fw-semibold fs-070">{title}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ConditionItem;