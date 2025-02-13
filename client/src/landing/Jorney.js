import React from 'react'

function Jorney() {
  return (
    <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-8">
     Meet The
     <span className="text-red-500">
      Tutors
     </span>
     Behind Your Learning Journey
    </h1>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
     <div className="text-center">
      <img alt="Portrait of Dennis Barrett" className="rounded-lg mx-auto mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/rqdbVICTkKYLxtII2MDuge3WUEUs-64_dHH5r8XGbuA.jpg" width="150"/>
      <h2 className="text-xl font-bold">
       Dennis Barrett
      </h2>
      <p className="text-gray-600">
       Professor
      </p>
     </div>
     <div className="text-center">
      <img alt="Portrait of Lori Stevens" className="rounded-lg mx-auto mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/do4DKd47-GOuTzas1oWTtfc_hvz_hsz4-Y2BFtpImJA.jpg" width="150"/>
      <h2 className="text-xl font-bold">
       Lori Stevens
      </h2>
      <p className="text-gray-600">
       Lecturer
      </p>
     </div>
     <div className="text-center">
      <img alt="Portrait of Billy Vasquez" className="rounded-lg mx-auto mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/YD6O5njVQE4llKwitf_CieRDH0EriPrGDT2-rE3ww8s.jpg" width="150"/>
      <h2 className="text-xl font-bold">
       Billy Vasquez
      </h2>
      <p className="text-gray-600">
       Instructor
      </p>
     </div>
     <div className="text-center">
      <img alt="Portrait of Joan Wallace" className="rounded-lg mx-auto mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/oJdUN27eOtwEvuEu8HE4PdcUx_SOO8kmaYr8O6lY5hM.jpg" width="150"/>
      <h2 className="text-xl font-bold">
       Joan Wallace
      </h2>
      <p className="text-gray-600">
       Assistant professor
      </p>
     </div>
     <div className="text-center">
      <img alt="Portrait of Jacqueline Miller" className="rounded-lg mx-auto mb-4" height="150" src="https://storage.googleapis.com/a1aa/image/cpFb3UpId3djz_5faYGk6tJtdgFqP_fItYWH8gtgTgM.jpg" width="150"/>
      <h2 className="text-xl font-bold">
       Jacqueline Miller
      </h2>
      <p className="text-gray-600">
       Lecturer
      </p>
     </div>
    </div>
    <div className="text-center mb-8">
     <p className="text-lg text-gray-700 mb-4">
      Join our learning community and gain access to a team of dedicated instructors who are committed to helping you succeed.
     </p>
     <div className="flex justify-center space-x-4">
      <a className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600" href="#">
       Meet our all tutors
      </a>
      <a className="border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-100" href="#">
       View all courses
      </a>
     </div>
    </div>
   </div>
 
 
  )
}

export default Jorney
