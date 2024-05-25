export type AuthApiRequest = { email: string; password: string };
export type AuthApiResponse = { token: string };

export type AuthParams = { id: string };
export type productType = {
  id: string;
  title: string;
  price: string;
  rating: number;
  urlImage: string;
  availableNumbers: [];
};
