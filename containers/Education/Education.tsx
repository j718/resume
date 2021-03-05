import Experience, { ExperienceProps } from "../../components/Experience";
import { education } from "../../data";
import { Typography } from "@material-ui/core";
interface PublicationsProps {
  education: ExperienceProps[];
}
export const Publications = () => (
  <>
    <Typography variant="h4">Education</Typography>
    {education.map((school) => (
      <Experience
        key={school.institution}
        achievements={school.achievements}
        subtitle={school.degree}
        timeline={school.timeline}
        title={school.institution}
      />
    ))}
  </>
);

export default Publications;
