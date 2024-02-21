import "./App.css";
import {
  BrowserRouter,
  Route,
  // RouterProvider,
  Routes,
  // createBrowserRouter,
} from "react-router-dom";
import LoginView from "./views/login-view/login-view";
import RootLayout from "./routes/RouterLayout";
import SignUpView from "./views/signup-view/signup-view";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/login", element: <LoginView /> },
//       { path: "/signup", element: <SignUpView /> },
//       { index: true },
//     ],
//   },
// ]);

function App() {
  // return <RouterProvider router={router} />;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}></Route>
          <Route path="/login" element={<LoginView />}></Route>
          <Route path="/signup" element={<SignUpView />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
