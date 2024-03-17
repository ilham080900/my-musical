import { useAuthModalLogin, useAuthModalRegister } from "@/hooks/UseAuthModal";
import Link from "next/link";
import { Input } from "postcss";

const Login = () => {
  const closeModalLogin = useAuthModalLogin((state) => state.onClose);
  const openModalRegister = useAuthModalRegister((state) => state.onOpen);

  const onClick = () => {
    closeModalLogin();
    openModalRegister();
  };

  return (
    <form action="flex justify-center items-center flex-col">
      <div className="mb-4 pb-5">
        <label
          htmlFor="Username"
          className="block text-white text-md font-bold mb-2"
        >
          Username
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="Username"
          type="text"
          placeholder="Username"
          name="username"
        />
      </div>
      <div className="mb-4 pb-5">
        <label
          htmlFor="password"
          className="block text-white text-md font-bold mb-2"
        >
          Password
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="*******"
          name="password"
        />
      </div>
      <div className="mb-4 pt-2">
        <button
          className="bg-green-500 w-full flex justify-center items-center text-white font-bold py-2 px-4 rounded hover:bg-green-700"
          onClick={() => {}}
        >
          Login
        </button>
      </div>
      <p className="text-white text-center text-sm mt-2 mb-6">
        Don't Have an account?{" "}
        <button onClick={onClick} className="font-bold text-blue-600">
          Register
        </button>
      </p>
    </form>
  );
};
export default Login;
