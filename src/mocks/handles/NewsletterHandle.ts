import { HttpResponse, delay, http } from "msw";

export const handlers = [
  http.post("/newsletter", async () => {
    await delay(1200);
    return HttpResponse.json(
      {
        message: "Parabéns agora você vai receber descontoss e ofertas exclusivas!",
      },
      { status: 201 }
    );
  }),
];
