interface IMeal {
  id: string;
  name: string;
  img: string;
  instruction?: string;
  category?: string;
  drinkAlternate?: string;
  area?: string;
  tags?: string[];
  youtube?: string;
  source?: string;
  ingridients?: string[];
  description?: string;
}

export default IMeal;
