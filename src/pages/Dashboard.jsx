import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "@/components/ui/sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("rewear_token");

  const { data: user, isLoading } = useQuery({
    queryKey: ["profile", token],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    enabled: !!token,
  });

  const handleLogout = () => {
    localStorage.removeItem("rewear_token");
    toast.success("Logged out successfully!");
    navigate("/Login");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
          ReWear - Dashboard
        </h1>
        <h2 className="text-xl text-center mb-4">Welcome, {user?.email}!</h2>
        <button
          onClick={handleLogout}
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Logout
        </button>
      </div>
      <p className="mt-4 text-gray-600">
        ReWear: Swap clothes, reduce waste, embrace sustainable fashion!
      </p>
    </div>
  );
};

export default Dashboard;