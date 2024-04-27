import "./ButtonWithIcon.scss";
import PropTypes from "prop-types";

const ButtonWithIcon = (props) => {
  const { icon, name, clickHandler } = props;

  return (
    <button className="btnWithIcon" onClick={clickHandler}>
      {icon}
      <p>{name}</p>
    </button>
  );
};

ButtonWithIcon.propTypes = {
  icon: PropTypes.node,
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};
export default ButtonWithIcon;
