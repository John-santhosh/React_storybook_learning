import PropTypes from "prop-types";
import { options } from "./constants";
import "../styles/token.css";

export const Card = ({
  children = "I'm card",
  color = "primary",
  size = "sm",
}) => {
  return <div className="card">{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
};

export default Card;
