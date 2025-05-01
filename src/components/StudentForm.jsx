import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2"; // make sure you imported Swal

function StudentForm() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState(""); // added branch field
  const [purpose, setPurpose] = useState("");
  const [outTime, setOutTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "logs"), {
        name,
        roll,
        branch,
        purpose,
        outTime,
      });

      // After successful submit, show this nice popup
      Swal.fire({
        title: "Successfully Submitted!",
        icon: "success",
        confirmButtonColor: "#6B3F26", // your brown color
        background: "#D7B49E", // soft background
        color: "#000", // text color
      });

      // Clear the form
      setName("");
      setRoll("");
      setBranch("");
      setPurpose("");
      setOutTime("");
    } catch (error) {
      console.error("Error submitting log:", error);
      Swal.fire({
        title: "Submission Failed!",
        icon: "error",
        confirmButtonColor: "#6B3F26",
        background: "#FFD1D1",
        color: "#000",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-8 text-center">Student Logbook</h1>

        {/* Name input */}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3F26]"
          required
        />

        {/* Roll Number input */}
        <input
          type="text"
          placeholder="Enter your roll number"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3F26]"
          required
        />

        {/* Branch input */}
        <input
          type="text"
          placeholder="Enter your branch"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3F26]"
          required
        />

        {/* Purpose input */}
        <input
          type="text"
          placeholder="Purpose of visit"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          className="w-full mb-4 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3F26]"
          required
        />

        {/* Out Time input */}
        <input
          type="text"
          placeholder="Out Time (e.g., 10:20 PM)"
          value={outTime}
          onChange={(e) => setOutTime(e.target.value)}
          className="w-full mb-6 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B3F26]"
          required
        />

        {/* Submit Button */}
        <button type="submit" className="button w-full mt-4">
          Submit
        </button>

      </form>
    </div>
  );
}

export default StudentForm;
