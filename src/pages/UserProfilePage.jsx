import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContextProvider";
import UpdateUserDetailsModal from "../components/User/UpdateUserDetailsModal";
import UpdateUserPasswordModal from "../components/User/UpdateUserPasswordModal";

const UserProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isPasswordUpdateModalOpen, setIsPasswordUpdateModalOpen] =
    useState(false);

  const openUpdateModal = () => {
    setIsUpdateModalOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateModalOpen(false);
  };

  const openPasswordUpdateModal = () => {
    setIsPasswordUpdateModalOpen(true);
  };

  const closePasswordUpdateModal = () => {
    setIsPasswordUpdateModalOpen(false);
  };

  return (
    <section className="bg-white">
      <div className="relative flex">
        <div className="h-[90%] lg:w-1/4"></div>
        <div className="hidden w-3/4 min-h-screen bg-gray-100 lg:block"></div>

        <div className="container flex flex-col justify-center w-full mx-auto p-2 md:p-4 lg:absolute lg:inset-x-0">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl md:ml-48">
            Welcome, <span className="text-blue-500">{user?.displayName}</span>
          </h1>

          <div className="mt-8 md:mt-12 lg:flex lg:items-center">
            <div className="mx-36"></div>
            <img
              className="object-cover object-center w-24 max-w-40 rounded"
              src={user?.photoURL}
              alt={user?.displayName}
            />

            <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800 lg:w-72 mb-2">
                Profile
              </h1>

              <h3>
                Name:{" "}
                <span className="mt-6 text-lg font-medium text-blue-500">
                  {user?.displayName}
                </span>
              </h3>
              <p>
                Email:{" "}
                <span className="max-w-lg mt-6 text-gray-500">
                  {user?.email}
                </span>
              </p>

              <div className="grid gap-4">
                <button
                  onClick={openUpdateModal}
                  className="w-full sm:w-1/4 md:w-1/3 lg:w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-400 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 mt-4"
                >
                  Update Details
                </button>

                <button
                  onClick={openPasswordUpdateModal}
                  className="w-full sm:w-1/4 md:w-1/3 lg:w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-sky-300 rounded-lg hover:bg-sky-400 focus:outline-none focus:bg-sky-400 focus:ring focus:ring-sky-300 focus:ring-opacity-50"
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Update User Details Modal */}
      <UpdateUserDetailsModal
        isOpen={isUpdateModalOpen}
        onClose={closeUpdateModal}
        user={user}
      />

      <UpdateUserPasswordModal
        isOpen={isPasswordUpdateModalOpen}
        onClose={closePasswordUpdateModal}
      />
    </section>
  );
};

export default UserProfilePage;