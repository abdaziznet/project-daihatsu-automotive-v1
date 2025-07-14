export type Car = {
  id: number;
  name: string;
  price: string;
  image: string;
  promoImage: string;
  dataAiHint: string;
  specs: {
    engine: string;
    horsepower: string;
    fuelType: string;
    transmission: string;
    mileage: string;
  };
};
