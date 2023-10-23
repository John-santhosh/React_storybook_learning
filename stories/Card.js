import PropTypes from "prop-types";
import { options } from "./constants";
import "./card.css";
import classNames from "classnames";

export const Card = ({
  children = "I'm card",
  color = "primary",
  size = "sm",
  isClickable,
  isDraggable,
}) => {
  return (
    <div
      className={classNames("card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-draggable": isDraggable,
      })}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(options.colors),
  size: PropTypes.oneOf(options.sizes),
  isDraggable: PropTypes.bool,
  isClickable: PropTypes.bool,
};

export default Card;
