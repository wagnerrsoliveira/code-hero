export type ICardListProps = {
  id: number;
  index: number;
  uri: string;
  description: string;
  onPress: (id: number) => void;
};
