import React from "react";
import { UserButton } from "@clerk/clerk-react";
import TokenHelper from "../components/TokenHelper";
import { useAuth } from "@clerk/clerk-react";
import { useSignalR } from "../Hooks/useSignalR";
import MessageList from "../Components/Chat/MessageList";
import MessageInput from "../Components/Chat/MessageInput";

const HomePage = () => {
    const { getToken } = useAuth();
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    const fetchToken = async () => {
      const t = await getToken({ template: "api" });
      setToken(t);
    };
    fetchToken();
  }, [getToken]);

  const { messages, sendMessage } = useSignalR(token);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <h1 className="text-xl font-bold">💬 Messengo</h1>
        <UserButton afterSignOutUrl="/login" />
      </header>

      <MessageList messages={messages} />
      <MessageInput sendMessage={sendMessage} />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Welcome to your ChatApp Home</h2>
        <p className="text-gray-600 mb-6">This is a placeholder chat dashboard.</p>

        {/* JWT Helper */}
        <div className="max-w-xl w-full">
          <TokenHelper />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
