import { AuthProvider } from "./auth/AuthProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router.jsx";

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
