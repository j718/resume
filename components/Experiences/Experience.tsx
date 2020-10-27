export interface ExperienceProps {
  location: string;
  title: string;
  timeline: string;
  description: string;
  takeaways: [string];
}

export const Experience = (props: ExperienceProps) => (
  <>
    <h3>{props.location}</h3>
    <div>{props.title}</div>
    <div>{props.timeline}</div>
    <div>{props.description}</div>
    <ul>{props.takeaways?.map(item => <li>{item}</li>)}</ul>
  </>
);

export default Experience;
