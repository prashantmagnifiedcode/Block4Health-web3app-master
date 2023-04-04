import React from "react";
import patients from "../patient-data";
import { NavLink } from "react-router-dom";
import VitalSignCheck from "../components/VitalSignCheck";

const PatientFullProfile = () => {
  let id = localStorage.getItem("id")
    ? JSON.parse(localStorage.getItem("id"))
    : null;

  const handleDelete = () => {
    localStorage.removeItem("id");
    window.location.href = "/";
  };
  return (
    <>
      {patients &&
        patients.map((patient) => {
          if (patient.id === id) {
            return (
              <div
                key={patient.id}
                className="flex md:flex-row flex-col items-center md:px-20 px-4 md:py-20 py-10 gap-10 justify-between"
              >
                <div className="flex md:flex-row flex-col md:w-4/5 w-full items-center justify-start md:gap-32 gap-10">
                  <div className="flex flex-col items-center gap-3">
                    <div className="rounded-full overflow-hidden border-2 border-teal-900/50 shadow-xl h-36 w-36">
                      <img
                        className="object-fill w-full"
                        src={patient.profile}
                        alt="not valid"
                      />
                    </div>
                    <h1>
                      <span className="font-semibold">Patient ID :</span>{" "}
                      {patient.id}
                    </h1>
                  </div>

                  <div className="flex md:flex-row flex-col md:gap-32 gap-10">
                    <div className="flex flex-col gap-2">
                      <h1>
                        <span className="font-semibold">Name :</span>{" "}
                        {patient.name}
                      </h1>
                      <h1>
                        <span className="font-semibold">Age :</span>{" "}
                        {patient.age}
                      </h1>
                      <h1>
                        <span className="font-semibold">Gender :</span>{" "}
                        {patient.gender}
                      </h1>
                    </div>

                    <div className="flex flex-col gap-2">
                      <h1>
                        <span className="font-semibold">Weight :</span>{" "}
                        {patient.weight}
                      </h1>
                      <h1>
                        <span className="font-semibold">Height :</span>{" "}
                        {patient.height}
                      </h1>
                      <h1>
                        <span className="font-semibold">Maritial Status :</span>{" "}
                        {patient.maritialstatus}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="flex md:flex-col flex-row md:w-48 w-full md:justify-center justify-between gap-4">
                  <button
                    onClick={handleDelete}
                    className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900"
                  >
                    Back to Dashboard
                  </button>
                  <NavLink to="/getdocument">
                    <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
                      Close Profile
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          }
        })}

      <div className="flex md:flex-row flex-col px-4 justify-center md:gap-20 gap-4">
        <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
          Vital Sign Check
        </button>
        <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
          Allergies
        </button>
        <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
          Medical History
        </button>
        <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
          Clinic Visit
        </button>
        <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
          Patient Information
        </button>
      </div>
      <VitalSignCheck />
      <VitalSignCheck />
      <VitalSignCheck />
      <VitalSignCheck />
      <VitalSignCheck />
      <VitalSignCheck />
      <VitalSignCheck />
    </>
  );
};

export default PatientFullProfile;
