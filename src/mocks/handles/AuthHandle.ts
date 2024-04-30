import { HttpResponse, http, delay } from "msw";
import { AuthParams, AuthApiRequest, AuthApiResponse } from "../../types";

const users = [
  {
    id: "01",
    email: "renan.epd@gmail.com",
    password: "12345678",
  },
  {
    id: "02",
    email: "joaozinho@hotmail.com",
    password: "147852963",
  },
  {
    id: "03",
    email: "manoel@hotmail.com",
    password: "203045",
  },
];

export const handlers = [
  http.post<AuthParams, AuthApiRequest, AuthApiResponse>("/auth", async ({ request }) => {
    await delay(1200);
    const dataAuth = await request.json();
    const user = users.find(user => {
      return user.email === dataAuth.email && user.password === dataAuth.password;
    });

    return user
      ? HttpResponse.json(
          { token: "1q2w3e4r5t6y6u7i8ildksfnsldkfnsdlio9" },
          {
            status: 200,
          }
        )
      : HttpResponse.json(
          { message: "Usuário ou senha incorretos" },
          {
            status: 404,
          }
        );
  }),
];
