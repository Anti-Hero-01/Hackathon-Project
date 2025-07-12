import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "@/components/ui/sonner";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("rewear_token");

  const { isError } = useQuery({
    queryKey: ["profile", token],
    queryFn: async () => {
      const response = await axios.get("http://localhost:8080/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    enabled: !!token,
    retry: false,
  });

  useEffect(() => {
    if (isError || !token) {
      toast.error("Please log in to access this page");
      localStorage.removeItem("rewear_token");
      navigate("/Login");
    }
  }, [isError, token, navigate]);

  return token ? children : null;
};

export default ProtectedRoute;