export interface IRawFlashcard {
  id: number;
  category: string;
  categoryName: string;
  front: string;
  back: string;
}

export interface IFlashcard extends IRawFlashcard {
  isOpen: boolean;
  backHtml: string;
}

export interface ICategories {
  id: number;
  idCode: string;
  name: string;
  total: number;
}
