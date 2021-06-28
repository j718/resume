import { Typography, Grid, Link } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export interface ExperienceProps {
  title: string;
  subtitle: string;
  timeline: string;
  link?: string;
  achievements?: Array<string>;
  description?: string;
  key: any;
}

export const Experience = (props: ExperienceProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const Subtitle = () => (
    <Typography variant="subtitle1">{props.subtitle}</Typography>
  );

  return (
    <div key={props.key}>
      <Typography
        ref={ref}
        variant="h5"
        component={motion.div}
        initial="visible"
        animate={controls}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { x: 0 },
          hidden: { x: -20 },
        }}
      >
        {props.title}
      </Typography>
      <Grid container justify="space-between">
        <Grid item>
          {props.link ? (
            <Link target="_blank" href={props.link} underline="always">
              <Subtitle />
            </Link>
          ) : (
            <Subtitle />
          )}
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
};

export default Experience;
