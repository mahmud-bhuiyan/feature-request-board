import { ThreeDots } from "react-loader-spinner";

const CustomFormButton = ({ buttonText, loading, color, size }) => {
  const buttonColor =
    color === "custom"
      ? "bg-[#402F3F] text-[#F0F0F0]"
      : "bg-green-100 text-gray-800";

  const buttonSize = size === "small" ? "px-4 py-2 mt-2 rounded" : "w-full";

  return (
    <button
      type="submit"
      disabled={loading}
      className={`${buttonSize} font-semibold shadow-sm rounded-lg py-2 ${buttonColor} flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline`}
    >
      {loading ? (
        <span className="flex gap-2 justify-center align-middle">
          Submitting
          <ThreeDots
            visible={true}
            height="25"
            width="25"
            color="#000000"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </span>
      ) : (
        <>{buttonText}</>
      )}
    </button>
  );
};

export default CustomFormButton;
