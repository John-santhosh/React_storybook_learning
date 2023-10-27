import PropTypes from "prop-types";
import "./card.css";
import classNames from "classnames";

export const options = {
  colors: ["primary", "secondary"],
  sizes: ["sm", "lg"],
};

export const Card = ({
  // do not do like this
  children, //= "I'm card",
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
console.log(options);

export default Card;
