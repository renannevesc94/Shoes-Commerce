import { GoogleIcon, InstagramIcon } from "../../components/Icons";

import { FormLogin } from "./components/FormLogin";

export const Auth = () => {
  return (
    <div className="grid grid-rows-3 h-screen w-screen bg-whitep ">
      <div className="flex items-center w-full p-3 ">
        <h1 className="font-bold text-4xl">Login</h1>
      </div>
      <div className="w-full h-full p-3">
        <FormLogin />
      </div>
      <div className="flex justify-center flex-wrap mt-16">
        <p className="w-full text-center ">Or login with social account</p>
        <div className="flex w-1/3 justify-between -mt-14">
          <GoogleIcon />
          <InstagramIcon />
        </div>
      </div>
    </div>
  );
};
