import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-xl">
        <h1 className="text-2xl font-semibold text-center mb-6">Welcome to ChatApp</h1>
        <SignIn path="/login" routing="path" signUpUrl="/login" />
      </div>
    </div>
  );
};

export default LoginPage;
    