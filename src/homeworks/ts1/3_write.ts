/*
 * Функции написанные здесь пригодятся на последующих уроках
 */

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

type Operation = Cost | Profit;

export type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

export type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

export const generateRandomNumber = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomString = (): string => {
  let outString = '';
  const inOptions = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < generateRandomNumber(3, 15); i++) {
    outString += inOptions.charAt(Math.floor(Math.random() * inOptions.length));
  }

  return outString;
};

export const createRandomProduct = (createdAt: string): Product => {
  const brand = brands[generateRandomNumber(0, 6)];
  const weight = weights[generateRandomNumber(0, 5)];
  const currentCategory = createRandomCategory();
  return {
    id: getRandomString(),
    name: brand + ' ' + weight,
    photo: getRandomString(),
    desc: generateRandomNumber(0, 10) < 5 ? currentCategory.name + ' ' + brand + ', ' + weight : undefined,
    createdAt: createdAt,
    oldPrice: generateRandomNumber(0, 10) < 5 ? generateRandomNumber(1, 1000) : undefined,
    price: generateRandomNumber(1, 1000),
    category: currentCategory,
  };
};
//
const categories: Category[] = [
  { id: 'dry food', name: 'Сухой корм', photo: 'Фото' },
  { id: 'semi-dry food', name: 'Полусухой корм', photo: 'Фото' },
  { id: 'canned food', name: 'Консервированный корм', photo: 'Фото' },
  { id: 'treat', name: 'Лакомство' },
];
const brands: string[] = ['Wiskas', 'ProPlan', 'Purina One', 'Родные корма', 'Perfect Fit', 'Sirius', 'Monge'];

const weights: string[] = ['75 г', '180 г', '350 г', '650 г', '1 кг', '1,2 кг'];

export const createRandomCategory = (): Category => {
  return categories[generateRandomNumber(0, 3)];
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  if (generateRandomNumber(0, 1) == 0) {
    const cost: Cost = {
      id: getRandomString(),
      name: getRandomString(),
      desc: generateRandomNumber(0, 10) < 5 ? getRandomString() : undefined,
      createdAt: createdAt,
      amount: generateRandomNumber(1, 1000),
      category: createRandomCategory(),
      type: 'Cost',
    };
    return cost;
  } else {
    const profit: Profit = {
      id: getRandomString(),
      name: getRandomString(),
      desc: generateRandomNumber(0, 10) < 5 ? getRandomString() : undefined,
      createdAt: createdAt,
      amount: generateRandomNumber(1, 1000),
      category: createRandomCategory(),
      type: 'Profit',
    };
    return profit;
  }
};
