import { HttpResponse, delay, http } from "msw";

export const handlers = [
  http.get("/novelties", async () => {
    await delay(1200);

    return HttpResponse.json([
      {
        id: "1",
        title: "Tênis Marca X",
        price: "255,50",
        rating: 3,
        urlImage: "tenis-card.png",
      },
      {
        id: "2",
        title: "Tênis da Adidas",
        price: "320,00",
        rating: 4,
        urlImage: "tenis-card2.png",
      },
      {
        id: "3",
        title: "Tênis da Puma",
        price: "700,50",
        rating: 2,
        urlImage: "tenis-card3.png",
      },
      {
        id: "4",
        title: "Tênis da New Balance",
        price: "125,50",
        rating: 5,
        urlImage: "tenis-card4.png",
      },
    ]);
  }),

  http.get("/releases", async () => {
    await delay(1200);
    return HttpResponse.json([
      {
        id: "5",
        title: "Tênis da Nike",
        price: "500,00",
        rating: 5,
        urlImage: "tenis-card5.png",
      },
      {
        id: "6",
        title: "Tênis da Adidas",
        price: "399,20",
        rating: 4,
        urlImage: "tenis-card6.png",
      },
      {
        id: "7",
        title: "Tênis da Puma",
        price: "778,99",
        rating: 4,
        urlImage: "tenis-card7.png",
      },
      {
        id: "8",
        title: "Tênis da New Balance",
        price: "1199,00",
        rating: 3,
        urlImage: "tenis-card8.png",
      },
    ]);
  }),
];
