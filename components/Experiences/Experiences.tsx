import Experience, { ExperienceProps } from "./Experience";

interface PublicationsProps {
    experiences: ExperienceProps[]
}
export const Publications = ({experiences}: PublicationsProps) => (
  <>
    <h2>Experiences</h2>
    {experiences.map((experience) => (
      <Experience key={experience.location} {... experience} />
    ))}
  </>
);

export default Publications;
