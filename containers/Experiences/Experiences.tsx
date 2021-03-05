import Experience from "../../components/Experience";
import { experiences } from "../../data";
import { Typography } from "@material-ui/core";

export const Publications = () => (
  <>
    <Typography variant="h4">Experiences</Typography>
    {experiences.map((experience) => (
      <Experience
        key={experience.location}
        title={experience.title}
        subtitle={experience.location}
        achievements={experience.takeaways}
        timeline={experience.timeline}
        description={experience.description}
      />
    ))}
  </>
);

export default Publications;
