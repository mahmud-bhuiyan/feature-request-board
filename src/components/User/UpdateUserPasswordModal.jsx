import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FiUnlock } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContextProvider";
import { passwordUpdate } from "../../services/apis/User";
import CustomPasswordField from "../CustomComponents/CustomPasswordField";
import CustomButton from "../CustomComponents/CustomButton";

const UpdateUserPasswordModal = ({ isOpen, onClose }) => {
  const { updateUserPassword } = useContext(AuthContext);
  const [updateClicked, setUpdateClicked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const updatePassword = async (data) => {
    const passwordData = {
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    };

    try {
      setUpdateClicked(true);

      // Check if new password and confirm password match
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        toast.error("New password and confirm password do not match.");
        setUpdateClicked(false);
        return;
      }

      // update in mongodb
      await passwordUpdate(passwordData);

      // update in firebase
      await updateUserPassword(passwordData.newPassword);

      onClose();
      setUpdateClicked(false);
      reset();
      toast.success("Password updated successfully.");
    } catch (error) {
      console.error("Error updating password:", error);
      toast.error("An error occurred while updating the password.");
      setUpdateClicked(false);
    }
  };

  const handleCancel = () => {
    onClose();
    reset();
  };

  return (
    <div
      className={`fixed inset-0 z-10 overflow-y-auto p-2 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <form
        onSubmit={handleSubmit(updatePassword)}
        className="flex items-center justify-center min-h-screen max-w-96 mx-auto"
      >
        <div className="bg-white w-full p-8 rounded-md drop-shadow-2xl">
          <h3 className="text-xl font-bold mb-4 text-center underline">
            Update Password
          </h3>

          <CustomPasswordField
            name="newPassword"
            placeholder="Enter new password"
            register={register}
            errors={errors}
            icon={FiUnlock}
          />

          <CustomPasswordField
            name="confirmPassword"
            placeholder="Confirm new password"
            register={register}
            errors={errors}
            icon={FiUnlock}
          />

          <div className="flex justify-center flex-wrap mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 md:px-10 py-2 rounded-md mr-2"
            >
              Cancel
            </button>
            <CustomButton buttonText="Update" loading={updateClicked} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserPasswordModal;
