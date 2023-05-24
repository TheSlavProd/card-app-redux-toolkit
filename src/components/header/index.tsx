import { useDispatch, useSelector } from "react-redux";
import { addCard, sortCards } from "../../redux/slices/cardsSlice";
import { useEffect } from "react";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state: any) => state.cards.cards);

  const generateRandomUniqueNumber = (): number => {
    let randomNum = Math.floor(Math.random() * 100);
    while (cards?.includes(randomNum)) {
      randomNum = Math.floor(Math.random() * 100);
    }
    return randomNum;
  };

  const handleAddCard = () => {
    const randomNum = generateRandomUniqueNumber();
    dispatch(addCard(randomNum));
  };

  const handleSortCards = () => {
    dispatch(sortCards());
  };

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards, dispatch]);

  return (
    <header className="header">
      <button className="btn" onClick={handleAddCard}>
        Add card
      </button>
      <button className="btn" onClick={handleSortCards}>
        Sort cards
      </button>
    </header>
  );
};
