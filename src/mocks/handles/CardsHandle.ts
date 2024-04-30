import { HttpResponse, delay, http } from "msw";

export const handlers = [
  http.get("/novelties", async () => {
    await delay(1200);

    return HttpResponse.json([
      {
        title: "Tênis Marca X",
        price: "255,50",
        rating: 3,
        urlImage: "tenis-card.png",
      },
      {
        title: "Tênis da Adidas",
        price: "320,00",
        rating: 4,
        urlImage: "tenis-card2.png",
      },
      {
        title: "Tênis da Puma",
        price: "700,50",
        rating: 2,
        urlImage: "tenis-card3.png",
      },
      {
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
        title: "Tênis da Nike",
        price: "500,00",
        rating: 5,
        urlImage: "tenis-card5.png",
      },
      {
        title: "Tênis da Adidas",
        price: "399,20",
        rating: 4,
        urlImage: "tenis-card6.png",
      },
      {
        title: "Tênis da Puma",
        price: "778,99",
        rating: 4,
        urlImage: "tenis-card7.png",
      },
      {
        title: "Tênis da New Balance",
        price: "1199,00",
        rating: 3,
        urlImage: "tenis-card8.png",
      },
    ]);
  }),
];
