// import font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ConditionItem({ title, icon, data, unit }) {
    return (
        <>
            <div className="fw-semibold">{title}</div>
            <div><FontAwesomeIcon icon={icon} fixedWidth />&nbsp;{data}{unit}</div>
        </>
    );
};

export default ConditionItem;