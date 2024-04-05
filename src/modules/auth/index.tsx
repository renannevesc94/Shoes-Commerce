import { GoogleIcon, InstagramIcon } from "../../components/Icons";
import { FormLogin } from "./components/FormLogin";

export const Auth = () => {
  return (
    <div className="grid grid-rows-3 p-3 h-screen w-screen bg-whitep">
      <div className="flex items-center w-screen h-3/4">
        <h1 className="font-bold text-4xl">Login</h1>
      </div>
      <div className="w-11/12">
        <FormLogin />
      </div>
      <div className="flex justify-center mt-24 flex-wrap ">
        <p className="w-full text-center -mb-12">Or login with social account</p>

        <div className="flex w-1/3 justify-between">
          <GoogleIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};
