import { useContext } from "react";
import { AppContext } from "../AppContext";
import { IFlashcard } from "../interfaces";

interface IProp {
  flashCard: IFlashcard;
}

export const FlashCard = ({ flashCard }: IProp) => {
  const { handleToggleFlashCards } = useContext(AppContext);
  return (
    <div
      className="front flashcard"
      onClick={() => handleToggleFlashCards(flashCard)}
    >
      <span className="category">{flashCard.category.toUpperCase()}:</span>
      {flashCard.front}

      <div>
        {flashCard.isOpen && (
          <div
            className="back"
            dangerouslySetInnerHTML={{
              __html: flashCard.backHtml,
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
