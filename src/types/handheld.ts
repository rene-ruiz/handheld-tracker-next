export interface HandHeld {
  id: string;
  name: string;
  description: string;
  image: string;
  original_price: string;
  is_favorite: boolean;
}

export type CardHandHeldProps = {
  handheldData: HandHeld;
};
