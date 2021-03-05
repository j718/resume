import Publications from "../containers/Publications";
import Experiences from "../containers/Experiences";
import Education from "../containers/Education";
import Intro from "../containers/Intro";
import {
  Divider,
  makeStyles,
  Typography,
  Container,
  Grid,
  Avatar,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
  },
  avatar: {
    width: "auto",
    height: "auto",
    margin: "auto",
    maxHeight: theme.spacing(30),
    maxWidth: theme.spacing(30),
  },
  root: {
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing(2),
  },
}));

export const Home = () => {
  const classes = useStyles();
  const Break = () => <Divider className={classes.divider} />;
  return (
    <Container maxWidth="md" className={classes.root}>
      <Intro />
      <Break />
      <Publications />
      <Break />
      <Experiences />
      <Break />
      <Education />
    </Container>
  );
};

export default Home;
