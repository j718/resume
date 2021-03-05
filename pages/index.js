import Publications from "../containers/Publications";
import Experiences from "../containers/Experiences";
import Education from "../containers/Education";
import { Divider, makeStyles, Typography, Container } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },
}));

export const Home = () => {
  const classes = useStyles();
  const Break = () => <Divider className={classes.divider} />;
  return (
    <Container maxWidth="md">
      <Typography variant="h2">Jacob Clarke</Typography>
      <Typography variant="body1">
        Over the last few years, I have worked in several fields related to
        music, meidicine, and cycling. I am currently studying at St. Louis
        University School of Medicine as a prospective MD candidate and spend my
        free time exploring St. Louis bike trails and city parks with my wife
        Amanda.
      </Typography>
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
