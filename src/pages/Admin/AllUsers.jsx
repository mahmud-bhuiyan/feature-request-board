import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContextProvider";
import { getAllUsers } from "../../services/apis/Admin";
import AllUsersData from "../../components/Admin/AllUsersData";
import CustomHelmet from "../../components/CustomComponents/CustomHelmet";
import TableTotalDataCount from "../../components/Admin/TableTotalDataCount";
import Breadcrumbs from "../../components/Breadcrumbs";
import Pagination from "../../components/Pagination";
import CustomTableHeader from "../../components/Admin/CustomTableHeader";
import Loader from "../../components/Loader";

const AllUsers = () => {
  const { allUsers, setAllUsers, isLoading } = useContext(UserContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalUsers, setTotalUsers] = useState(0);
  const [sortColumn, setSortColumn] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(currentPage, itemsPerPage);
        setAllUsers(usersData.users);
        setTotalUsers(usersData.pageInfo.totalUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [setAllUsers, currentPage, itemsPerPage, refresh]);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(totalUsers / itemsPerPage);
  const hasMorePrev = currentPage > 1;
  const hasMoreNext = currentPage < totalPages;

  // Handle page change event
  const handlePageChange = (newPage) => setCurrentPage(newPage);

  // Handle items per page change event
  const handleDataPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  // Column headers for the table
  const columns = ["#", "Name", "Email", "Role", "Action"];

  // Handle column header click event for sorting
  const handleSort = (column) => {
    const sortableColumns = ["name", "email", "role"];

    if (sortableColumns.includes(column)) {
      setSortOrder((prevOrder) =>
        column === sortColumn ? (prevOrder === "asc" ? "desc" : "asc") : "asc"
      );
      setSortColumn(column);

      // Sort the allUsers array based on the selected column and order
      const sortedUsers = allUsers.slice().sort((a, b) => {
        const valueA = a[column].toLowerCase();
        const valueB = b[column].toLowerCase();

        if (sortOrder === "asc") {
          return valueA.localeCompare(valueB, undefined, {
            sensitivity: "base",
          });
        } else {
          return valueB.localeCompare(valueA, undefined, {
            sensitivity: "base",
          });
        }
      });

      // Update the state with the sorted user array
      setAllUsers(sortedUsers);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {/* Helmet for custom page title */}
      <CustomHelmet pageName={"All Users"} />
      <div className="p-4 w-full mx-auto">
        {/* Breadcrumbs for navigation */}
        <Breadcrumbs
          fromPage={"Dashboard"}
          pageTitle={"Users"}
          fromURL={"/dashboard"}
        />

        {/* Table information and controls */}
        <div className="sm:flex justify-between items-center mb-2.5 bg-white py-2 rounded-lg">
          <div className="relative sm:w-[90%] ml-4">
            {/* Total data count component */}
            <TableTotalDataCount
              title="Total"
              count={totalUsers}
              tableName={"Users"}
            />
          </div>

          <div className="flex items-center w-auto mt-3 sm:mt-0 justify-end">
            {/* Items per page dropdown */}
            <label className="mr-2">Show</label>
            <select
              value={itemsPerPage}
              onChange={(e) =>
                handleDataPerPageChange(parseInt(e.target.value))
              }
              className="border rounded p-1 mr-2"
            >
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        {/* User data table */}
        <div className="flex flex-col mt-4">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 text-center">
                  {/* Using the CustomTableHeader component */}
                  <CustomTableHeader
                    columns={columns}
                    sortColumn={sortColumn}
                    sortOrder={sortOrder}
                    sortableColumns={["name", "email", "role"]}
                    onSort={handleSort}
                  />
                  {/* Table body */}
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* User data rows */}
                    {allUsers.map((user, index) => (
                      <AllUsersData
                        key={user._id}
                        user={user}
                        index={index}
                        setRefresh={setRefresh}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination controls */}
        <div className="mt-2 flex justify-end">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            hasMorePrev={hasMorePrev}
            hasMoreNext={hasMoreNext}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default AllUsers;
