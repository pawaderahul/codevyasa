import "./Label.scss";
import PropTypes from "prop-types";

const Label = ({ name }) => {
  return <button className="label">{name}</button>;
};

Label.propTypes = { name: PropTypes.string };
export default Label;
