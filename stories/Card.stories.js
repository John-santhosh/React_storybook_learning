import Card, { options } from "./Card";

export default {
  title: "Card",
  component: Card,
  args: {
    children: "Iam a card by default in the stories(default)",
  },
  argTypes: {
    color: {
      description: "**options:**",
      table: {
        type: {
          summary: options.colors,
        },
      },
      control: {
        // type of input like select dropdown, radio button
        type: "select",
        options: options.colors,
      },
    },
    size: {
      description: "**options:**",
      table: {
        type: {
          summary: options.sizes,
        },
      },
      control: {
        type: "select",
        options: options.sizes,
      },
    },
  },
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

export const Default = Template.bind({});

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
  items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
  items: options.sizes.map((size) => ({ size })),
};
