import React from "react";
import makeStyles from '@mui/styles/makeStyles';

import { motion } from "framer-motion";
import Grid from "@mui/material/Grid";

// import MessageIcon from '@mui/icons-material/Message'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: theme.colors.main.paleRobinEggBlue,
  },
  container: {
    width: 150,
    height: 150,
    display: "flex",
    margin: 0,
    placeContent: "center",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0.2)",
    borderRadius: 30,
  },
  item: {
    width: "56%",
    overflow: "visible",
    stroke: "#FEFEFE",
    strokeWidth: 2,
    strokeLinejoin: "round",
    strokeLinecap: "round",
  },
}));

const HomePage = ({ pageContext }) => {
  const classes = useStyles();

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      className={classes.root}
    >
      <Grid item xs={12}>
        <motion.div variants={container} initial="hidden" animate="visible">
          <div className={classes.container}>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className={classes.item}
            >
              <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 1, ease: "easeInOut" },
                  fill: { duration: 0.5, delay: 0.9, ease: [1, 0, 0.8, 1] },
                }}
              />
            </motion.svg>
          </div>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
