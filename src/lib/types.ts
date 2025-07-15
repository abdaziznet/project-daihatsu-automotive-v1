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

export type BannerImage = {
  id: number;
  name: string;
  image: string;
  dataAiHint: string;
}

export type ContactPerson = {
  name: string;
  phone: string;
  email: string;
  address: string;  
}
