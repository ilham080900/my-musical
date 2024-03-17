import { useAuthModalRegister, useAuthModalLogin } from "@/hooks/UseAuthModal";
import Link from "next/link";
import { Input } from "postcss";

const Register = () => {
  const closeModalRegister = useAuthModalRegister((state) => state.onClose);
  const openModalLogin = useAuthModalLogin((state) => state.onOpen);

  const onClick = () => {
    closeModalRegister();
    openModalLogin();
  };

  return (
    <form action="flex justify-center items-center flex-col">
      <div className="mb-4 pb-5">
        <label
          htmlFor="Fullname"
          className="block text-white text-md font-bold mb-2"
        >
          Full Name
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-whtie leading-tight focus:outline-none focus:shadow-outline"
          id="fullname"
          type="text"
          placeholder="Fullname"
          name="fullname"
        />
      </div>
      <div className="mb-4 pb-5">
        <label
          htmlFor="Username"
          className="block text-white text-md font-bold mb-2"
        >
          Username
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-whtie leading-tight focus:outline-none focus:shadow-outline"
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
      <div className="mb-4 pb-5">
        <label
          htmlFor="confirmpassword"
          className="block text-white text-md font-bold mb-2"
        >
          Confirm Password
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
          id="confirmpassword"
          type="password"
          placeholder="*******"
          name="confirmpassword"
        />
      </div>
      <div className="mb-4 pt-2">
        <button className="bg-green-500 w-full flex justify-center items-center text-white font-bold py-2 px-4 rounded hover:bg-green-700">
          Register
        </button>
      </div>
      <p className="text-white text-center text-md mt-2 mb-6">
        Have an account?{" "}
        <button onClick={onClick} className="font-bold text-blue-600">
          Login
        </button>
      </p>
    </form>
  );
};
export default Register;
