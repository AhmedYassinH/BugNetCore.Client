import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const PROJECT_NAME = [
  'Nike Air Force 1 NDESTRUKT',
  'Nike Space Hippie 04',
  'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
  'Nike Blazer Low 77 Vintage',
  'Nike ZoomX SuperRep Surge',
  'Zoom Freak 2',
  'Nike Air Max Zephyr',
  'Jordan Delta',
  'Air Jordan XXXV PF',
  'Nike Waffle Racer Crater',
  'Kyrie 7 EP Sisterhood',
  'Nike Air Zoom BB NXT',
  'Nike Air Force 1 07 LX',
  'Nike Air Force 1 Shadow SE',
  'Nike Air Zoom Tempo NEXT%',
  'Nike DBreak-Type',
  'Nike Air Max Up',
  'Nike Air Max 270 React ENG',
  'NikeCourt Royale',
  'Nike Air Zoom Pegasus 37 Premium',
  'Nike Air Zoom SuperRep',
  'NikeCourt Royale',
  'Nike React Art3mis',
  'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
];
const PROJECT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

// ----------------------------------------------------------------------

export const projects = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.string.uuid(),
    cover: `/assets/images/projects/project_${setIndex}.jpg`,
    name: PROJECT_NAME[index],
    price: faker.number.int({ min: 4, max: 99, precision: 0.01 }),
    priceSale: setIndex % 3 ? null : faker.number.int({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PROJECT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PROJECT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PROJECT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PROJECT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PROJECT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PROJECT_COLOR.slice(5, 6)) ||
      PROJECT_COLOR,
    status: sample(['sale', 'new', '', '']),
  };
});
