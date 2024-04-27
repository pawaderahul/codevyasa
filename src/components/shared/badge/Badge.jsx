import "./Badge.scss";
import PropTypes from "prop-types";

const Badge = (props) => {
  const { children, clickHandler } = props;

  return (
    <figure className="badge" onClick={clickHandler}>
      {children}
    </figure>
  );
};

Badge.propTypes = { children: PropTypes.node, clickHandler: PropTypes.func };
export default Badge;
