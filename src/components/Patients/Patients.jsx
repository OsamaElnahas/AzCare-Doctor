import React from "react";
import PatientCard from "../PatientCard/PatientCard";

export default function Patients() {
  const recentPatients = [
    {
      id: "4186151515",
      name: "Muhammad Hammad",
      gender: "Male",
      age: 56,
      visits: 3,
    },
    {
      id: "9876543210",
      name: "Fatima Al-Zahra",
      gender: "Female",
      age: 34,
      visits: 5,
    },
    {
      id: "8765432109",
      name: "Omar Khattab",
      gender: "Male",
      age: 29,
      visits: 2,
    },
    {
      id: "7654321098",
      name: "Mariam Mansour",
      gender: "Female",
      age: 42,
      visits: 10,
    },
    {
      id: "1154377098",
      name: "Ahmed Ibrahim",
      gender: "Male",
      age: 50,
      visits: 1,
    },
  ];
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {recentPatients.map((patient, idx) => (
          <PatientCard key={idx} patient={patient} />
        ))}
      </div>
    </div>
  );
}
