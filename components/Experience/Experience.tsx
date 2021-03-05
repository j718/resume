import { Typography, Grid } from "@material-ui/core";

export interface ExperienceProps {
  title: string;
  subtitle: string;
  timeline: string;
  achievements: Array<string>;
  description?: string;
}

export const Experience = (props: ExperienceProps) => (
  <div>
    <Typography variant="h5">{props.title}</Typography>
    <Grid container justify="space-between">
      <Grid item>
        <Typography variant="subtitle1">{props.subtitle}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2">{props.timeline}</Typography>
      </Grid>
    </Grid>
    <Typography variant="body1">{props.description}</Typography>
    <ul>
      {props.achievements?.map((item, index) => (
        <li key={index}>
          <Typography variant="body1">{item}</Typography>
        </li>
      ))}
    </ul>
  </div>
);

export default Experience;
