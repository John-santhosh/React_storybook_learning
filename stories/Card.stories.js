import Card from "./Card";
import { options } from "./constants";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;
// this ...args used to pass additional properties to the card component from color.args
const ListTemplate = ({ items, ...args }) => {
  console.log({ items });
  console.log({ ...args });
  return items.map((item, index) => {
    // this ...args contains props like {isClickable, isDraggable}
    return <Card key={index} {...args} {...item} />;
  });
};

export const Default = () => Template.bind({});

export const clickable = Template.bind({});
clickable.args = {
  isClickable: true,
};

export const Draggable = Template.bind({});
Draggable.args = {
  isDraggable: true,
};

//the loop is because we could have multiple colors for a button and sizes. we are gonna replace this using listTemplate
export const Colors = ListTemplate.bind({});
Colors.args = {
  items: options.colors.map((color) => ({ color: color })),
  testArgs: "testing",
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
