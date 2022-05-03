/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from "theme-ui";

const SingleDatabaseCard = ({ data }) => {
  return (
    <div sx={styles.card}>
      <div sx={styles.content}>
        <img
          width="auto"
          height={64}
          src={data.logo?.src}
          sx={styles.img}
          variant="avatar"
          alt={data?.title}
        />
      </div>
      <a sx={styles.link} href={data?.link || "#"} target="_blank">
        {data?.title}
      </a>
    </div>
  );
};

export default SingleDatabaseCard;

const styles = {
  card: {
    boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.15)",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    transition: ".3s",
    ":hover": {
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
    },
  },
  content: {
    padding: "40px",
    flexGrow: 1,
  },
  link: {
    bg: "#F5F5F5",
    padding: "1rem 0",
    display: "block",
    color: "primary",
    textAlign: "center",
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: "2px",
    ":hover": {
      textDecoration: "none",
    },
  },
  img: {
    height: 90,
    display: "block",
    margin: "0 auto",
  },
};
