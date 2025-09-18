import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected route */}
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <HomePage />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />

        {/* Catch-all: redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
