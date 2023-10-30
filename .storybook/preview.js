import "minireset.css";
import "../styles/global.css";
import "../styles/token.css";

const styles = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
  background: "red",
};

// this is useful when we need to represent our stories with some default styles
export const decorators = [
  (Story) => {
    return (
      <div style={styles}>
        <Story />
      </div>
    );
  },
];
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
