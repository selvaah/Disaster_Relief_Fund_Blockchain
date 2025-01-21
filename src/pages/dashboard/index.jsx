import React, { useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration
const MOCK_DONORS = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    joinDate: "2023-12-15",
    totalDonated: 1250.0,
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    joinDate: "2024-01-20",
    totalDonated: 750.5,
    status: "active",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    phone: "+1 (555) 456-7890",
    joinDate: "2023-11-05",
    totalDonated: 3200.75,
    status: "inactive",
  },
  {
    id: 4,
    name: "Emily Williams",
    email: "emily@example.com",
    phone: "+1 (555) 234-5678",
    joinDate: "2024-02-10",
    totalDonated: 500.0,
    status: "active",
  },
  {
    id: 5,
    name: "Michael Brown",
    email: "michael@example.com",
    phone: "+1 (555) 876-5432",
    joinDate: "2023-10-30",
    totalDonated: 1800.25,
    status: "active",
  },
];

const MOCK_TRANSACTIONS = [
  {
    id: "TXN-001",
    donorId: 1,
    donorName: "John Doe",
    amount: 500.0,
    date: "2024-02-15",
    status: "completed",
    paymentMethod: "Credit Card",
    logo: null,
  },
  {
    id: "TXN-002",
    donorId: 2,
    donorName: "Jane Smith",
    amount: 250.5,
    date: "2024-02-20",
    status: "completed",
    paymentMethod: "PayPal",
    logo: null,
  },
  {
    id: "TXN-003",
    donorId: 3,
    donorName: "Robert Johnson",
    amount: 1000.75,
    date: "2024-01-25",
    status: "completed",
    paymentMethod: "Bank Transfer",
    logo: null,
  },
  {
    id: "TXN-004",
    donorId: 1,
    donorName: "John Doe",
    amount: 750.0,
    date: "2024-02-28",
    status: "pending",
    paymentMethod: "Credit Card",
    logo: null,
  },
  {
    id: "TXN-005",
    donorId: 4,
    donorName: "Emily Williams",
    amount: 500.0,
    date: "2024-02-10",
    status: "completed",
    paymentMethod: "Credit Card",
    logo: null,
  },
  {
    id: "TXN-006",
    donorId: 5,
    donorName: "Michael Brown",
    amount: 800.25,
    date: "2024-01-30",
    status: "completed",
    paymentMethod: "Bank Transfer",
    logo: null,
  },
  {
    id: "TXN-007",
    donorId: 5,
    donorName: "Michael Brown",
    amount: 1000.0,
    date: "2023-12-15",
    status: "completed",
    paymentMethod: "PayPal",
    logo: null,
  },
];

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState("donors");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  // Filtered data based on search and date range
  const filteredDonors = MOCK_DONORS.filter((donor) => {
    const matchesSearch =
      donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      donor.email.toLowerCase().includes(searchTerm.toLowerCase());

    const donorDate = new Date(donor.joinDate);
    const isAfterStartDate = startDate
      ? donorDate >= new Date(startDate)
      : true;
    const isBeforeEndDate = endDate ? donorDate <= new Date(endDate) : true;

    return matchesSearch && isAfterStartDate && isBeforeEndDate;
  });
  const handleLogout = () => {
    localStorage.removeItem("adminLogin");
    navigate("/admin/login");
  };

  const filteredTransactions = MOCK_TRANSACTIONS.filter((transaction) => {
    const matchesSearch =
      transaction.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase());

    const transactionDate = new Date(transaction.date);
    const isAfterStartDate = startDate
      ? transactionDate >= new Date(startDate)
      : true;
    const isBeforeEndDate = endDate
      ? transactionDate <= new Date(endDate)
      : true;

    return matchesSearch && isAfterStartDate && isBeforeEndDate;
  });

  const clearFilters = () => {
    setSearchTerm("");
    setStartDate("");
    setEndDate("");
  };

  // Status badge component
  const StatusBadge = ({ status }) => {
    let bgColor = "";
    switch (status.toLowerCase()) {
      case "active":
      case "completed":
        bgColor = "bg-green-100 text-green-800";
        break;
      case "inactive":
        bgColor = "bg-gray-100 text-gray-800";
        break;
      case "pending":
        bgColor = "bg-yellow-100 text-yellow-800";
        break;
      default:
        bgColor = "bg-gray-100 text-gray-800";
    }

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${bgColor}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64  flex flex-col justify-between shadow-md">
        <div>
          <div className="p-4 border-b">
            <div className="flex items-center">
              <img src="/images/logo.svg" alt="" />
            </div>
          </div>

          <nav className="mt-6">
            <div
              className={`flex items-center px-6 py-3 cursor-pointer ${
                activeView === "donors"
                  ? "bg-[#F47C26] bg-opacity-10 border-l-4 border-[#F47C26]"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveView("donors")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  activeView === "donors" ? "text-[#F47C26]" : "text-gray-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span
                className={`ml-3 ${
                  activeView === "donors"
                    ? "font-medium text-white"
                    : "text-gray-700"
                }`}
              >
                Donors
              </span>
            </div>

            <div
              className={`flex items-center px-6 py-3 cursor-pointer ${
                activeView === "transactions"
                  ? "bg-[#F47C26] bg-opacity-10 border-l-4 border-[#F47C26]"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveView("transactions")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${
                  activeView === "transactions"
                    ? "text-[#F47C26]"
                    : "text-gray-500"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span
                className={`ml-3 ${
                  activeView === "transactions"
                    ? "font-medium text-white"
                    : "text-gray-700"
                }`}
              >
                Transactions
              </span>
            </div>
          </nav>
        </div>
        <button onClick={handleLogout} className="pb-4">
          <div
            className={`flex items-center px-6 py-3 cursor-pointer `}
            onClick={() => setActiveView("transactions")}
          >
            <span className={`ml-3 `}>Logout</span>
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            {activeView === "donors"
              ? "Donor Management"
              : "Transaction History"}
          </h1>

          {/* Filters and Search */}
          <div className="my-4 p-4 bg-white rounded-lg shadow">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={
                    activeView === "donors"
                      ? "Search by name or email..."
                      : "Search by donor name or transaction ID..."
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47C26]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47C26]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47C26]"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Content based on active view */}
          {activeView === "donors" ? (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Donor
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Contact Info
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Join Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Total Donated
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredDonors.map((donor) => (
                      <tr key={donor.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            {donor.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {donor.id}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {donor.email}
                          </div>
                          <div className="text-sm text-gray-500">
                            {donor.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {format(new Date(donor.joinDate), "MMM d, yyyy")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${donor.totalDonated.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={donor.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-[#F47C26] hover:text-[#e06c1b] mr-2">
                            View
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredDonors.length === 0 && (
                      <tr>
                        <td
                          colSpan="6"
                          className="px-6 py-4 text-center text-sm text-gray-500"
                        >
                          No donors found matching your criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <div className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">{filteredDonors.length}</span>{" "}
                  of <span className="font-medium">{MOCK_DONORS.length}</span>{" "}
                  donors
                </div>
                <div className="flex-1 flex justify-end">
                  <nav
                    className="relative z-0 inline-flex shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Transaction ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Donor
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Payment Method
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {transaction.donorName}
                          </div>
                          <div className="text-xs text-gray-500">
                            ID: {transaction.donorId}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-700">
                          ${transaction.amount.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {format(new Date(transaction.date), "MMM d, yyyy")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.paymentMethod}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={transaction.status} />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-[#F47C26] hover:text-[#e06c1b] mr-2">
                            View
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            Receipt
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredTransactions.length === 0 && (
                      <tr>
                        <td
                          colSpan="7"
                          className="px-6 py-4 text-center text-sm text-gray-500"
                        >
                          No transactions found matching your criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200">
                <div className="text-sm text-gray-700">
                  Showing{" "}
                  <span className="font-medium">
                    {filteredTransactions.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-medium">
                    {MOCK_TRANSACTIONS.length}
                  </span>{" "}
                  transactions
                </div>
                <div className="flex-1 flex justify-end">
                  <nav
                    className="relative z-0 inline-flex shadow-sm -space-x-px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
