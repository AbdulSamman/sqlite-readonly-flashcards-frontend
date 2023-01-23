import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AppContext } from "../AppContext";

import { FlashCard } from "../components/Flashcard";

export const PageRandomOrder = () => {
  const { appTitle, flashCards } = useContext(AppContext);

  return (
    <div className="page pageRandomOrder">
      <Helmet>
        <title>{appTitle} - RandomOrder</title>
      </Helmet>

      <div className="flashcards">
        {flashCards.map((flashCard) => {
          return <FlashCard flashCard={flashCard} key={flashCard.id} />;
        })}
      </div>
    </div>
  );
};
