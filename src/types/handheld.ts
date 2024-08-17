export interface HandHeld {
  id: string;
  name: string;
  description: string;
  image: string;
  original_price: string;
  obtained?: boolean;
}

export type CardHandHeldProps = {
  handheldData: HandHeld;
};
