import School, { SchoolProps } from "./School";

interface PublicationsProps {
    education: SchoolProps[]
}
export const Publications = ({education}: PublicationsProps) => (
  <>
    <h2>Education</h2>
    {education.map((school) => (
      <School key={school.institution} {... school} />
    ))}
  </>
);

export default Publications;
