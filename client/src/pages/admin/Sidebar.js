import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/");
    }, 5000);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar Toggle Button for Mobile */}
        <button
          className="lg:hidden fixed top-4 left-4 z-50 bg-purple-600 text-white p-2 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={20} />
        </button>

        {/* Sidebar */}
        <div
          className={`fixed lg:relative top-0 left-0 h-full w-64 bg-white shadow-md flex flex-col justify-between transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          {/* Close Button for Mobile */}
          <button
            className="lg:hidden absolute top-4 right-4 text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={20} />
          </button>

          {/* Sidebar Content */}
          <div>
            <div className="p-1 pt-6">
              <h1 className="text-2xl font-bold text-purple-600 flex items-center">
                <MdDashboard className="mr-2" />
                Admin Dashboard
              </h1>
            </div>
            <nav className="mt-6">
              {[
                 { path: "/admin/", icon: "fas fa-tachometer-alt", label: "Home" },
                { path: "/admin/activity", icon: "fas fa-tachometer-alt", label: "Activity" },
                { path: "/admin/library", icon: "fas fa-book", label: "Library" },
                { path: "/admin/security", icon: "fas fa-shield-alt", label: "Security" },
                { path: "/admin/schedules", icon: "fas fa-calendar-alt", label: "Schedules" },
                { path: "/admin/payouts", icon: "fas fa-money-bill-wave", label: "Payouts" },
                { path: "/admin/settings", icon: "fas fa-cog", label: "Settings" },
              ].map((item, index) => (
                <Link
                  key={index}
                  className="flex items-center p-2 text-gray-700 hover:bg-gray-200"
                  to={item.path} // ✅ Using React Router Link
                >
                  <i className={`${item.icon} text-gray-600`}></i>
                  <span className="ml-3">{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="absolute bottom-28 left-0 flex items-center gap-3 px-4 py-2 bg-red-500 rounded-2xl border border-gray-300 hover:bg-red-300 transition-all duration-300"
            >
              <CiLogout className="text-white text-xl" />
              <span className="text-white font-medium">Logout</span>
            </button>
          </div>

          {/* Upgrade to Pro Button */}
          <div className="px-2 pb-5">
            <button className="w-full bg-violet-600 text-white py-4 rounded-2xl">
              Upgrade to PRO to get access to all features!
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>

      {/* Logout Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-40">
          <div className="bg-red-500 p-16 rounded-2xl shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-white">🎉 Thank You! 🎉</h2>
            <p className="text-white text-lg mt-2">
              You have successfully logged out. See you again soon! 🚀
            </p>
            <button
              onClick={handleClosePopup}
              className="mt-4 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-red-600 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
