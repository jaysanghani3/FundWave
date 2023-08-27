import { Navigate } from "react-router-dom";

const Auth = () => {
    const token = localStorage.getItem('token');
    if (token) { return true; } else { return false; }
}

const ProtectedRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = Auth(); // Check if token exists
    return isAuthenticated ? <Element {...rest} /> : <Navigate to="/login" />
};
export default ProtectedRoute;