import { axiosSecureInstance } from "../../utils/axios";
import handleApiError from "../../utils/handleApiError";

// =============================================
//                 get all users
// =============================================
export const getAllUsers = async (page, limit) => {
  try {
    const response = await axiosSecureInstance.get("/admins/", {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// =============================================
//           Make a user an admin by ID
// =============================================
export const makeAdmin = async (userId) => {
  try {
    const response = await axiosSecureInstance.patch(
      `/admins/make-admin/${userId}`
    );

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// =============================================
//              Soft delete user by ID
// =============================================
export const softDeleteUserById = async (userId) => {
  try {
    const response = await axiosSecureInstance.patch(`/admins/${userId}`);

    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
