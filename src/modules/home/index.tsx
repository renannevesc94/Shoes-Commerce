import { useAuth } from "../../providers/AuthProvider";

export const Home = () => {
  const { logout } = useAuth();
  return (
    <>
      <button onClick={logout}>SAIR</button>
      <h1>Bem vindo a Home Page</h1>
    </>
  );
};
