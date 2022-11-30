import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const { isAdmin } = useSelector(state => state.user);

  console.log("Admin in protected : ", isAdmin)
  return !isAdmin ? children : <Navigate to="/admin" />;   
}

export default ProtectedRoutes;
