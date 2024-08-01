import { FC } from "react";

export interface HandHeld {
  id: string;
  name: string;
  description: string;
}
type CardHandHeldProps = {
  handheldData: HandHeld;
};
const CardHandHeld: FC<CardHandHeldProps> = ({ handheldData }) => {
  return <div key={handheldData.id}>{handheldData.name}</div>;
};

export default CardHandHeld;
