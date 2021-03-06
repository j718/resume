import Experience from "../../components/Experience";
import { experiences } from "../../data";
import { Typography } from "@material-ui/core";

export const Publications = () => (
  <>
    <Typography variant="h4">Experiences</Typography>
    {experiences.map((experience, index) => (
      <Experience
        key={index}
        title={experience.position}
        subtitle={experience.organization}
        timeline={experience.dates}
        description={experience.description}
        link={experience.link}
      />
    ))}
  </>
);

export default Publications;
