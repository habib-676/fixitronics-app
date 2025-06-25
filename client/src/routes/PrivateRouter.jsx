import { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Loading from "../components/Loading";
import { Navigate } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to={"/auth/sign-in"}></Navigate>;
  }
  return children;
};

export default PrivateRouter;
