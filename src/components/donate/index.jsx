import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Donate = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donaterName, setDonaterName] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDonationSuccess, setIsDonationSuccess] = useState(false);
  const navigate = useNavigate();
  const openModal = () => {
    const isUserLoggedIn = localStorage.getItem("login");
    if (isUserLoggedIn) {
      setIsDonationSuccess(false);
      setIsModalOpen(true);
    } else {
      navigate("/login");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setDonaterName("");
    setAmount("");
    setIsLoading(false);
    setIsDonationSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      setIsDonationSuccess(true);

      // Automatically close modal after success message
      setTimeout(() => {
        closeModal();
      }, 3000);
    }, 2000);
  };

  return (
    <>
      <button
        className={`flex items-center gap-x-3 bg-[#F47C26] h-14 px-6 
        rounded-2xl  justify-center
         hover:bg-[#e06c1b] transition-colors ${className}`}
        onClick={openModal}
      >
        <span className="text-white text-lg">Donate Now</span>
        <img src="/icons/gift.svg" alt="" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
            {!isDonationSuccess ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Make a Donation
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={donaterName}
                      onChange={(e) => setDonaterName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47C26]"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Donation Amount
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F47C26]"
                        placeholder="0.00"
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#F47C26] text-white py-3 px-4 rounded-lg hover:bg-[#e06c1b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#F47C26] focus:ring-offset-2"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </div>
                    ) : (
                      "Proceed"
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Donation Successful!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your generous donation of $
                  {parseFloat(amount).toFixed(2)}.
                </p>
                <div className="text-sm text-gray-500">
                  Closing automatically...
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Donate;
