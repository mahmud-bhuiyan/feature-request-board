import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContextProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
        or Sign in with
      </p>

      <button
        onClick={handleGoogleSignIn}
        className="flex flex-wrap items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
      >
        <FcGoogle className="text-2xl" />
        <span className="mx-2">Sign in with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
