import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = ({ children }) => {

  const { isAdmin } = useSelector(state => state.user);
  console.log("Admin private : ", isAdmin)

  return isAdmin ? children : <Navigate to="/" />;  
}

export default PrivateRoutes;
