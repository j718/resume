export interface PublicationProps {
  reference: String;
}

export const Publication = ({ reference, ...props }: PublicationProps) => (
  <div>{reference}</div>
);

export default Publication
