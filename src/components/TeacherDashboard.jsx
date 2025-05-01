import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function TeacherDashboard() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "logs"), orderBy("outTime", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const logsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLogs(logsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-8">Teacher Dashboard</h1>

      {/* If no logs found */}
      {logs.length === 0 ? (
        <p className="text-gray-500 text-lg">No entries yet.</p>
      ) : (
        <div className="w-full max-w-4xl space-y-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg"
            >
              <p><strong>Name:</strong> {log.name}</p>
              <p><strong>Roll No:</strong> {log.roll}</p>
              <p><strong>Branch:</strong> {log.branch}</p> {/* Branch showing */}
              <p><strong>Purpose:</strong> {log.purpose}</p>
              <p><strong>Out Time:</strong> {log.outTime}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TeacherDashboard;
