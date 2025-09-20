import { useState } from "react";
import { SignIn } from "@clerk/clerk-react";
import { dark, light } from "@clerk/themes";
import { Moon, Sun } from "lucide-react";
import { Img } from "react-image";

const LoginPage = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clerkAppearance = {
    elements: {
      card: "bg-transparent shadow-none border-0",
      headerTitle: darkMode ? "text-white" : "text-gray-900",
      headerSubtitle: darkMode ? "text-gray-400" : "text-gray-600",
      formButtonPrimary: `${darkMode
        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
        : "bg-emerald-600 hover:bg-emerald-700 text-white"
        } font-medium shadow-md rounded-lg`,
      formFieldInput: `${darkMode
        ? "bg-gray-800 text-white border-gray-700 focus:border-emerald-500 focus:ring-emerald-500"
        : "bg-white text-gray-900 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
        } rounded-lg`,
    },
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center transition-colors duration-300 ${darkMode
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
        : "bg-gray-100"
        }`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 rounded-full 
             bg-gray-700 hover:bg-gray-600 text-white 
             transition shadow-md"
      >
        {darkMode ? (
          <Sun className="h-5 w-5 transition-transform duration-300 rotate-0" />
        ) : (
          <Moon className="h-5 w-5 transition-transform duration-300 rotate-180" />
        )}
      </button>

      {/* Container */}
      <div
        className={`w-full max-w-md p-8 shadow-2xl rounded-2xl backdrop-blur-sm border ${darkMode
          ? "bg-gray-950/80 border-gray-800"
          : "bg-white border-gray-200"
          }`}
      >
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div
              className={`h-16 w-16 rounded-full flex items-center justify-center shadow-lg overflow-hidden ${darkMode
                ? "bg-gradient-to-tr from-emerald-500 to-green-400"
                : "bg-gradient-to-tr from-emerald-600 to-green-500"
                }`}
            >
              <div className="h-16 w-16 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/Messengo_logo.png"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          <h1
            className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-900"
              }`}
          >
            Messengo
          </h1>
          <p
            className={`text-sm mt-1 ${darkMode ? "text-gray-400" : "text-gray-600"
              }`}
          >
            Stay connected with your people
          </p>
        </div>

        {/* Clerk Sign In */}
        <div className="flex justify-center mt-6">
          <SignIn
            path="/login"
            routing="path"
            signUpUrl="/login"
            appearance={{
              baseTheme: darkMode ? dark : light,
              elements: {
                formButtonPrimary:
                  "bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg",
                card: "bg-transparent shadow-none border-0",
              },
            }}
          />
        </div>
      </div>
    </div >
  );
};

export default LoginPage;
