import { useState } from "react";
import { useAuth, useUser } from "@clerk/clerk-react";

const TokenHelper = () => {
  const { getToken, isSignedIn } = useAuth();
  const { user } = useUser();
  const [token, setToken] = useState("");
  const [copied, setCopied] = useState(false);

  const fetchToken = async () => {
    try {
      // ⚠️ If you created a JWT template in Clerk, pass its name:
      const authToken = await getToken({ template: "supabase" });
      setToken(authToken || "");
    } catch (error) {
      console.error("Error getting token:", error);
      alert("Error getting token: " + error.message);
    }
  };

  const copyToClipboard = async () => {
    if (!token) return;
    await navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-lg font-semibold mb-2">JWT Token Helper</h2>
      <p className="text-gray-600 mb-3">
        Signed in as <strong>{user?.primaryEmailAddress?.emailAddress}</strong>
      </p>
      <div className="flex gap-2 mb-3">
        <button
          onClick={fetchToken}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Get JWT
        </button>
        <button
          onClick={copyToClipboard}
          className={`px-4 py-2 rounded text-white ${
            copied ? "bg-green-600" : "bg-gray-600"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      {token && (
        <textarea
          className="w-full h-32 border p-2 rounded text-xs font-mono"
          value={token}
          readOnly
        />
      )}
    </div>
  );
};

export default TokenHelper;
