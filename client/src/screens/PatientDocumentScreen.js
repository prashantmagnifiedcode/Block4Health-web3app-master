import React from "react";
import patients from "../patient-data";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillFilePdf } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const PatientDocumentScreen = () => {
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
                  <NavLink to="/getpatientfullprofile">
                    <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
                      Full Profile
                    </button>
                  </NavLink>
                </div>
              </div>
            );
          }
        })}

      <div className="flex md:flex-row flex-col gap-4 justify-between md:px-20 px-4 items-center">
        <h1 className="font-semibold text-2xl">Documents</h1>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-semibold">Date</h1>
          <select
            name="date"
            className="border-2 border-light2 outline-none p-2 rounded"
          >
            <option value="ascending" defaultValue>
              Ascending
            </option>
            <option value="decending">Decending</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="font-semibold">Category</h1>
          <select
            name="category"
            className="border-2 border-light2 outline-none p-2 rounded"
          >
            <option value="reports" defaultValue>
              Reports
            </option>
            <option value="soap_notes">SOAP Notes</option>
            <option value="prescription">Prescription</option>
            <option value="certificate">Certificate</option>
            <option value="referral">Referral</option>
          </select>
        </div>
        <div className="flex items-center">
          <form className=" w-full">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="border-2 border-light2 outline-none pl-10 py-2 md:w-96 w-80 rounded"
                placeholder="Type to search ..."
                required
              />
            </div>
          </form>
        </div>
      </div>
      <div className="md:px-20 px-4 md:my-20 my-10 flex md:flex-row flex-col md:items-start items-center gap-10 justify-between">
        <div className="bg-light2 md:w-2/5 w-4/5 h-1/5 rounded md:py-20 py-14 shadow-lg shadow-gray-500/50 flex flex-col items-center gap-4">
          <BsFillPlusCircleFill className="fill-white text-3xl hover:fill-black" />
          <h1 className="font-semibold text-white">New Document</h1>
        </div>
        <div className="flex md:flex-row flex-col flex-wrap justify-center items-center md:gap-x-28 gap-y-10 md:gap-y-14">
          <div className="border-2 border-light2 rounded-xl py-4 px-2 flex flex-col items-center">
            <AiFillFilePdf className="text-[150px] fill-red-500" />
            <h1 className="font-semibold text-xl">X-Ray</h1>
            <h1>19/03/2023</h1>
          </div>
          <div className="border-2 border-light2 rounded-xl py-4 px-2 flex flex-col items-center">
            <AiFillFilePdf className="text-[150px] fill-red-500" />
            <h1 className="font-semibold text-xl">Blood</h1>
            <h1>23/07/2021</h1>
          </div>
          <div className="border-2 border-light2 rounded-xl py-4 px-2 flex flex-col items-center">
            <AiFillFilePdf className="text-[150px] fill-red-500" />
            <h1 className="font-semibold text-xl">Covid-19</h1>
            <h1>12/09/2021</h1>
          </div>
          <div className="border-2 border-light2 rounded-xl py-4 px-2 flex flex-col items-center">
            <AiFillFilePdf className="text-[150px] fill-red-500" />
            <h1 className="font-semibold text-xl">Covid-19</h1>
            <h1>12/09/2021</h1>
          </div>
          <div className="border-2 border-light2 rounded-xl py-4 px-2 flex flex-col items-center">
            <AiFillFilePdf className="text-[150px] fill-red-500" />
            <h1 className="font-semibold text-xl">Covid-19</h1>
            <h1>12/09/2021</h1>
          </div>
          <div className="border-2 border-light2 rounded-xl py-4 px-2 flex flex-col items-center">
            <AiFillFilePdf className="text-[150px] fill-red-500" />
            <h1 className="font-semibold text-xl">Covid-19</h1>
            <h1>12/09/2021</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDocumentScreen;
