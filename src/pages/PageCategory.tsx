import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { FlashCard } from "../components/Flashcard";

export const PageCategory = () => {
  const {
    appTitle,
    categories,
    currentCategoryItemIdCode,
    handleChangeCurrentCategoryItemIdCode,
    currentCategoryFlashcards,
  } = useContext(AppContext);
  return (
    <div className="page pageCategory">
      <Helmet>
        <title>{appTitle} - Categories</title>
      </Helmet>

      <div className="categories">
        <select
          value={currentCategoryItemIdCode}
          onChange={(e) =>
            handleChangeCurrentCategoryItemIdCode(e.target.value)
          }
        >
          {categories.map((category) => {
            return (
              <option value={category.idCode} key={category.id}>
                {category.name} (
                {`${category.total} flashcard${
                  category.total === 1 ? "" : "s"
                }`}
                )
              </option>
            );
          })}
        </select>
        <div>
          {currentCategoryFlashcards.map((flashcard) => {
            return <FlashCard key={flashcard.id} flashCard={flashcard} />;
          })}
        </div>
      </div>
    </div>
  );
};
