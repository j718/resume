import Publications from "../containers/Publications";
import Experiences from "../containers/Experiences";
import Education from "../containers/Education";
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
      <Grid container spacing={4} alignItems="center" justify="space-around">
        <Grid item xs={12} md={3}>
          <Avatar className={classes.avatar} src="/headshot.jpg" />
        </Grid>
        <Grid item md={9}>
          <Typography variant="h2">Jacob Clarke</Typography>
          <Typography variant="body1">
            Over the last few years, I have worked in several fields related to
            music, meidicine, and cycling. I am currently studying at St. Louis
            University School of Medicine as a prospective MD candidate and
            spend my free time exploring St. Louis bike trails and city parks
            with my wife Amanda.
          </Typography>
        </Grid>
      </Grid>
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
