import { HttpResponse, delay, http } from "msw";

export const handlers = [
  http.get("/highlights", async () => {
    await delay(1200);
    return HttpResponse.json(
      [
        {
          title: "Novidades!",
          message: "Confira nossa última coleção!",
          backgroundColor: "primary",
        },
        {
          title: "Promoção!",
          message: "Descontos imperdíveis em calçados!",
          backgroundColor: "secondary",
        },
        {
          title: "Estilo em alta!",
          message: "Descubra os modelos mais modernos!",
          backgroundColor: "default",
        },
      ],
      { status: 200 }
    );
  }),
];
