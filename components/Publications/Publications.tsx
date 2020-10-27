import Publication, { PublicationProps } from "./Publication";

interface PublicationsProps {
    pubs: PublicationProps[]
}
export const Publications = ({pubs}: PublicationsProps) => (
  <>
    <h2>Publications</h2>
    {pubs.map((pub) => (
      <Publication reference={pub.reference} />
    ))}
  </>
);

export default Publications;
