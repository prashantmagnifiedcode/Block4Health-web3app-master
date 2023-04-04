import React from "react";

const PatientCard = ({ patientdata }) => {

  const handleOpen = () => {
    localStorage.setItem('id', JSON.stringify(patientdata.id));
    window.location.href = '/getdocument';
  }

  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-5 md:gap-10 justify-center mb-10">
        <div className="rounded-full overflow-hidden border-2 border-teal-900/50 shadow-xl h-36 w-36">
          <img
            className="object-fill w-full"
            src={patientdata.profile}
            alt="not valid"
          />
        </div>
        <div className="flex flex-col gap-8 justify-between md:w-2/5 w-full md:px-0 px-4">
          <div className="flex flex-col gap-4">
            <span className="flex justify-between">
              <h1>
                <span className="font-semibold">Name :</span> {patientdata.name}
              </h1>
              <h1>
                <span className="font-semibold">New Report :</span>{" "}
                {patientdata.newreport}
              </h1>
            </span>
            <h1>
              <span className="font-semibold">Purpose :</span>{" "}
              {patientdata.purpose}
            </h1>
          </div>
          <div className="flex justify-between">
            <button className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
              Complete
            </button>
              <button onClick={handleOpen} className="bg-white border-2 border-solid border-light2 hover:bg-light2 hover:border-teal-900 hover:text-white py-2 px-4 rounded-3xl font-semibold text-teal-900">
                Open 
              </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientCard;
