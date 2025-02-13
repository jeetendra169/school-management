import React from "react";

function Team() {
  return (
    <>
      <div id="team" className=" text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">Meet Our Team</h1>
        <div className="flex overflow-x-auto gap-10 px-4 justify-center whitespace-nowrap ">
            
          <div className="w-60 flex-shrink-0">
            <img
              alt="Portrait of Dennis Barrett, Professor"
              className="rounded-full mx-auto mb-4"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/3ADhYmi_NxuCNcXZl37eOw28OvrLP2gBDacPFy-dTAI.jpg"
              width="200"
            />
            <h2 className="text-xl font-medium text-gray-800 text-center">
              Dennis Barrett
            </h2>
            <p className="text-gray-600 text-center">Professor</p>
          </div>
          <div className="w-60 flex-shrink-0">
            <img
              alt="Portrait of Lori Stevens, Lecturer"
              className="rounded-full mx-auto mb-4"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/wYsVxMzrV5NuUpDxMuWALoifMW-Ry2afh4imI0Rb7JM.jpg"
              width="200"
            />
            <h2 className="text-xl font-medium text-gray-800 text-center">
              Lori Stevens
            </h2>
            <p className="text-gray-600 text-center">Lecturer</p>
          </div>
          <div className="w-60 flex-shrink-0">
            <img
              alt="Portrait of Billy Vasquez, Instructor"
              className="rounded-full mx-auto mb-4"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/aSfXiQdqY1iwFP-7-nS05sO69fXzzi32tjnamgl6Sco.jpg"
              width="200"
            />
            <h2 className="text-xl font-medium text-gray-800 text-center">
              Billy Vasquez
            </h2>
            <p className="text-gray-600 text-center">Instructor</p>
          </div>
          <div className="w-60 flex-shrink-0">
            <img
              alt="Portrait of Joan Wallace, Assistant professor"
              className="rounded-full mx-auto mb-4"
              height="200"
              src="https://storage.googleapis.com/a1aa/image/5Egdyk41Kv6-2sVe2p_QEZ_RZlhslp0rC_B0cT4Sbws.jpg"
              width="200"
            />
            <h2 className="text-xl font-medium text-gray-800 text-center">
              Joan Wallace
            </h2>
            <p className="text-gray-600 text-center">Assistant professor</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
