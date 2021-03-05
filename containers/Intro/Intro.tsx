import { makeStyles, Typography, Grid, Avatar } from "@material-ui/core";
import { name, intro } from "../../data";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "auto",
    height: "auto",
    margin: "auto",
    marginBottom: theme.spacing(2),
    minHeight: theme.spacing(20),
    marginTop: theme.spacing(2),
    maxHeight: theme.spacing(30),
    maxWidth: theme.spacing(30),
  },
  root: {
    minHeight: theme.spacing(20),
  },
}));

export default function Intro() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      spacing={4}
      alignItems="center"
      justify="space-around"
    >
      <Grid item xs={12} md={3}>
        <Avatar className={classes.avatar} src="/headshot.jpg" />
      </Grid>
      <Grid
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        item
        md={9}
      >
        <Typography variant="h2">{name}</Typography>
        <Typography variant="body1">{intro}</Typography>
      </Grid>
    </Grid>
  );
}
