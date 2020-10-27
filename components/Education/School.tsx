export interface SchoolProps {
  institution: string;
  degree: string;
  timeline: string;
  achievements: [string];
}

export const School = (props: SchoolProps) => (
  <div>
    <h3>{props.institution}</h3>
    <div>{props.degree}</div>
    <div>{props.timeline}</div>
    <ul>{props.achievements?.map(item => <li>{item}</li>)}</ul>
  </div>
);

export default School;
