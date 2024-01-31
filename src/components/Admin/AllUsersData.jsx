import { MdOutlineAdminPanelSettings, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { makeAdmin, softDeleteUserById } from "../../services/apis/Admin";
import { FeaturesContext } from "../../../../frontend/src/context/FeaturesContextProvider";
import { useContext } from "react";

const AllUsersData = ({ user, index, setRefresh }) => {
  const { _id, name, email, role } = user;

  const { setRefetch } = useContext(FeaturesContext);

  const showConfirmationDialog = async (title, text, actionType) => {
    return Swal.fire({
      title,
      text,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: actionType,
    });
  };

  const showToast = (message, type = "success") => {
    toast[type](message);
  };

  const handleAction = async (actionType) => {
    const actionText =
      actionType === "admin" ? `make ${name} an Admin` : `delete ${name}`;
    const confirmationResult = await showConfirmationDialog(
      "Are you sure?",
      `You want to ${actionText}`,
      actionType === "admin" ? "Yes, Make Admin" : "Yes, Delete"
    );

    if (confirmationResult.isConfirmed) {
      try {
        const response =
          actionType === "admin"
            ? await makeAdmin(_id)
            : await softDeleteUserById(_id);

        setRefresh((prevRefresh) => !prevRefresh);
        setRefetch((prevRefetch) => !prevRefetch);
        showToast(response.message);
      } catch (error) {
        console.error(error);
        showToast(
          actionType === "admin"
            ? "Failed to update user role"
            : "Failed to delete user",
          "error"
        );
      }
    }
  };

  return (
    <tr key={_id}>
      <td className="py-2 px-4 text-sm font-normal text-gray-800">
        {index + 1}
      </td>
      <td className="py-2 px-4 text-sm font-normal text-gray-800">{name}</td>
      <td className="py-2 px-4 text-sm font-normal text-gray-800">{email}</td>
      <td className="py-2 px-4 text-sm font-normal text-gray-800">{role}</td>

      <td className="py-2 px-4 text-sm font-normal text-gray-800 flex justify-center align-middle gap-4">
        {role !== "admin" && (
          <div
            className="tooltip-top tooltip"
            data-tip="Make Admin"
            onClick={() => handleAction("admin")}
          >
            <MdOutlineAdminPanelSettings className="text-2xl text-blue-400" />
          </div>
        )}
        <div
          className="tooltip-top tooltip"
          data-tip="Delete"
          onClick={() => handleAction("delete")}
        >
          <MdDelete className="text-2xl text-red-500 cursor-pointer" />
        </div>
      </td>
    </tr>
  );
};

export default AllUsersData;
