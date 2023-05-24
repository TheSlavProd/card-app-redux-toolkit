import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../../redux/slices/cardsSlice";
import { ReactComponent as RemoveIcon } from "../../assets/icons8-close.svg";

export const Middle: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: any) => state.cards.cards);

  const handleRemoveCard = (index: number) => {
    dispatch(removeCard(index));
  };

  return (
    <main className="main">
      {cards?.map((card: number, index: number) => (
        <div key={index} className="card">
          {card}
          <RemoveIcon
            className="removeIcon"
            onClick={() => handleRemoveCard(index)}
          />
        </div>
      ))}
    </main>
  );
};
