import { Link, Typography } from "@material-ui/core";

export interface PublicationProps {
  reference: String;
  href?: string;
}

export const Publication = ({
  reference,
  href,
  ...props
}: PublicationProps) => {
  const Ref = () => <Typography variant="body1">{reference}</Typography>;
  return href ? (
    <Link href={href}>
      <Ref />
    </Link>
  ) : (
    <Ref />
  );
};

export default Publication;
