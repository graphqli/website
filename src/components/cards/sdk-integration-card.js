/** @jsxRuntime classic */
/** @jsx jsx */
import { Heading, jsx, Text } from "theme-ui";

const SdkIntegrationCard = ({ data }) => {
  return (
    <div sx={styles.card}>
      <div sx={styles.content}>
        <Heading as="h3">{data?.title}</Heading>
        <Text as="p">{data?.description}</Text>
      </div>
      <div sx={styles.links}>
        <a href="#" rel="noreferrer" target="_blank">
          Create Project
        </a>
      </div>
    </div>
  );
};
export default SdkIntegrationCard;

const styles = {
  card: {
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
  },
  content: {
    padding: "40px",
    h3: {
      color: "heading",
      fontWeight: 700,
      fontSize: [18, null, null, 22],
      lineHeight: 1.32,
      textAlign: "center",
    },
    p: {
      fontSize: [16, null, null, 18],
      lineHeight: 1.7,
      color: "text",
      textAlign: "center",
    },
  },
  links: {
    padding: "1rem 0",
    borderTop: "1px solid #dfdfdf",
    a: {
      display: "block",
      color: "primary",
      textAlign: "center",
      fontWeight: 700,
      fontSize: 16,
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
  },
};
