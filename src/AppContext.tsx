import axios from "axios";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { IFlashcard, IRawFlashcard, ICategories } from "./interfaces";

import * as tools from "./tools";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

interface IAppContext {
  appTitle: string;
  flashCards: IFlashcard[];
  handleToggleFlashCards: (flashCard: IFlashcard) => void;
  categories: ICategories[];
  currentCategoryItemIdCode: string;
  handleChangeCurrentCategoryItemIdCode: (idCode: string) => void;
  currentCategoryFlashcards: IFlashcard[];
}

interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const appTitle = "Info Site";

  const [flashCards, setFlashCards] = useState<IFlashcard[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [currentCategoryItemIdCode, setCurrentCategoryItemIdCode] =
    useState("");
  const [currentCategoryFlashcards, setCurrentCategoryFlashcards] = useState<
    IFlashcard[]
  >([]);

  useEffect(() => {
    (async () => {
      const rawFlashCards = (await axios.get(`${backendUrl}/flashcards`)).data;

      let _flashCards: IFlashcard[] = [];
      rawFlashCards.forEach((rawFlashCard: IRawFlashcard) => {
        const _flashCard: IFlashcard = {
          ...rawFlashCard,
          isOpen: false,
          backHtml: tools.convertMarkdownToHtml(rawFlashCard.back),
        };
        _flashCards.push(_flashCard);
      });
      _flashCards = tools.randomizeArray(_flashCards);
      setFlashCards(_flashCards);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const rawCategories = (await axios.get(`${backendUrl}/categories`)).data;

      setCategories(rawCategories);
      setCurrentCategoryItemIdCode(rawCategories[0].idCode);
    })();
  }, []);

  useEffect(() => {
    const _currentCategoryFlashcards = flashCards.filter(
      (m) => m.category === currentCategoryItemIdCode
    );

    setCurrentCategoryFlashcards(_currentCategoryFlashcards);
  }, [currentCategoryItemIdCode]);

  const handleToggleFlashCards = (flashCard: IFlashcard) => {
    flashCard.isOpen = !flashCard.isOpen;
    setFlashCards([...flashCards]);
  };
  const handleChangeCurrentCategoryItemIdCode = (idCode: string) => {
    setCurrentCategoryItemIdCode(idCode);
  };
  return (
    <AppContext.Provider
      value={{
        appTitle,
        flashCards,
        handleToggleFlashCards,
        categories,
        currentCategoryItemIdCode,
        handleChangeCurrentCategoryItemIdCode,
        currentCategoryFlashcards,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
