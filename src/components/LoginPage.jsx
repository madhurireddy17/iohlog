import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E3E3E3]">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center">iohlog</h1>
        <div className="flex flex-col space-y-4">
          <Link to="/student">
            <button className="button w-full">Student</button>
          </Link>
          <Link to="/teacher">
            <button className="button w-full">Teacher</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
