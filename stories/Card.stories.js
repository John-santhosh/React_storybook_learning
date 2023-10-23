import Card from "./Card";
import { options } from "./constants";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = () => Template.bind({});

export const clickable = Template.bind({});
clickable.args = {
  isClickable: true,
};

export const Draggable = Template.bind({});
Draggable.args = {
  isDraggable: true,
};

export const Colors = () =>
  options.colors.map((color, index) => {
    return <Card key={index} color={color} />;
  });

export const Sizes = () =>
  options.sizes.map((size, index) => {
    return <Card key={index} size={size} />;
  });
