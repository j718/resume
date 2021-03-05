import Publication, { PublicationProps } from "./Publication";
import { publications } from "../../data";
import { Typography } from "@material-ui/core";
export const Publications = () => (
  <>
    <Typography variant="h4">Publications</Typography>
    {publications.map((pub, index) => (
      <Publication reference={pub.reference} href={pub.href} key={index} />
    ))}
  </>
);

export default Publications;
