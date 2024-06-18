import { useAuthModalRegister, useAuthModalLogin } from "@/hooks/UseAuthModal";
import { apiRegister } from "@/services/auth";
import { RegisterTypes } from "@/services/data-types";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const [fullname, setFullname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const closeModalRegister = useAuthModalRegister((state) => state.onClose);
  const openModalLogin = useAuthModalLogin((state) => state.onOpen);

  const onClick = () => {
    closeModalRegister();
    openModalLogin();
  };

  async function onRegister() {
    if (!username && !fullname && !password && !confirmPassword) {
      return toast.error("Please fill all input");
    }

    if (password != confirmPassword) {
      return toast.error("Password not match");
    }

    const data: RegisterTypes = {
      username,
      fullname,
      password,
      confirmPassword,
    };

    const response = await apiRegister(data);

    if (response.error) {
      return toast.error(response.message);
    }

    closeModalRegister();
    openModalLogin();

    return toast.success("Success Register new Account");
  }

  return (
    <>
      <div className="mb-2 pb-3">
        <label
          htmlFor="Fullname"
          className="block text-white text-md font-bold mb-2"
        >
          Full Name
        </label>
        <input
          className="shadow appearance-none rounded-md w-full py-2 px-3 text-white placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-neutral-800"
          id="fullname"
          type="text"
          placeholder="Fullname"
          name="fullname"
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />
      </div>
      <div className="mb-2 pb-3">
        <label
          htmlFor="Username"
          className="block text-white text-md font-bold mb-2"
        >
          Username
        </label>
        <input
          className="shadow appearance-none rounded-md w-full py-2 px-3 text-white placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-neutral-800"
          id="Username"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="mb-2 pb-3">
        <label
          htmlFor="password"
          className="block text-white text-md font-bold mb-2"
        >
          Password
        </label>
        <input
          className="shadow appearance-none rounded-md w-full py-2 px-3 text-white placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-neutral-800"
          id="password"
          type="password"
          placeholder="*******"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mb-2 pb-3">
        <label
          htmlFor="confirmpassword"
          className="block text-white text-md font-bold mb-2"
        >
          Confirm Password
        </label>
        <input
          className="shadow appearance-none rounded-md w-full py-2 px-3 text-white placeholder-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-neutral-800"
          id="confirmpassword"
          type="password"
          placeholder="*******"
          name="confirmpassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
      </div>
      <div className="mb-3 pt-3">
        <button
          onClick={onRegister}
          className="bg-white w-full flex justify-center items-center text-neutral-800 font-bold py-2 px-4 rounded hover:opacity-75"
        >
          Register
        </button>
      </div>
      <p className="text-white text-center text-md mt-2 mb-6">
        Have an account?{" "}
        <button onClick={onClick} className="font-bold text-blue-600">
          Login
        </button>
      </p>
    </>
  );
};
export default Register;
