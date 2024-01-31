import { useContext } from "react";
import { demoAdmin, userPageBg } from "../../assets/images/images";
import { UserContext } from "../../context/UserContextProvider";
import Breadcrumbs from "../../components/Breadcrumbs";
import Loader from "../../components/Loader";
import CustomHelmet from "../../components/CustomComponents/CustomHelmet";

const Profile = () => {
  const { userDetails, isLoading } = useContext(UserContext);
  const { name, email, photoURL, role } = userDetails;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl mt-16 p-4">
      <div className="mx-auto">
        <CustomHelmet pageName={"Profile"} />
        {/* Breadcrumb */}
        <Breadcrumbs fromPage={"Home"} pageTitle={"Profile"} fromURL={"/"} />

        {/* Profile Section Start */}
        <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-stroke-dark dark:bg-box-dark">
          <div className="relative z-20 h-35 md:h-65">
            <img
              src={userPageBg}
              alt="profile cover"
              className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            />
          </div>
          <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
            <div className="relative z-30 mx-auto -mt-10 sm:-mt-24 h-20 lg:h-30 w-full max-w-16 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative drop-shadow-2">
                {userDetails && photoURL ? (
                  <img
                    src={photoURL}
                    className="rounded-full w-full object-cover"
                    alt="users_image"
                  />
                ) : (
                  <img
                    src={demoAdmin}
                    className="rounded-full w-full object-cover"
                    alt="users_image"
                  />
                )}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-2xl font-medium text-black dark:text-white capitalize">
                {name}
              </h3>
              <p className="mb-1 font-medium text-blue-600 uppercase">{role}</p>
              <p className="font-medium">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
