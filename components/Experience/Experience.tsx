import { Typography, Grid } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export interface ExperienceProps {
  title: string;
  subtitle: string;
  timeline: string;
  achievements: Array<string>;
  description?: string;
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

  return (
    <div>
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
};

export default Experience;
