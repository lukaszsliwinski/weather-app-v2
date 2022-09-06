// import react components
import Card from 'react-bootstrap/Card';

// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ConditionItem({ title, icon, data, unit }) {
    return (
        <Card className="mb-1 border-0 bg-transparent">
            <Card.Body className="p-0 text-center">
                <Card.Title className="mb-1">
                    <span className="border-bottom fs-085"><FontAwesomeIcon icon={icon} size="xs" fixedWidth />&nbsp;{title}</span></Card.Title>
                <Card.Text className="fs-5 fw-semibold">
                    {data}{unit}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ConditionItem;