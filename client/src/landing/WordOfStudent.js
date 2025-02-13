import React from 'react'

const WordOfStudent = () => {
  return (
    <div className=" flex items-center justify-center  py-10">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Words From Our <span className="text-pink-500">Students</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <img
          src="https://storage.googleapis.com/a1aa/image/yG3Txlnvw_Qo-dSn8_fDpCJVQmC4d_brRlSIXzlrRlY.jpg"
          alt="A student with headphones smiling and using a laptop"
          className="rounded-lg shadow-lg w-48 h-48 object-cover"
        />
        <div className=" bg-white border border-purple-200 rounded-lg p-8 text-center max-w-lg">
          <img
            src="https://storage.googleapis.com/a1aa/image/3rIvHas6aFIFkokcBWCFOupQBzbd6l-M5Vk7JPaFlGc.jpg"
            alt="Profile picture of Frances Guerrero"
            className="rounded-full mx-auto mb-4"
            width="50"
            height="50"
          />
          <h2 className="text-lg font-semibold text-gray-800">Frances Guerrero</h2>
          <p className="text-sm text-gray-500 mb-4">Founder</p>
          <p className="text-gray-700">
            As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.
          </p>
        </div>
        <img
          src="https://storage.googleapis.com/a1aa/image/f7rMuYyQrI2kOmHWi9xKvE4G0awFfv9q-THDzgFRA7s.jpg"
          alt="A student with headphones smiling and using a tablet"
          className="rounded-lg shadow-lg w-48 h-48 object-cover"
        />
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <button className="w-10 h-10 flex items-center justify-center border border-purple-200 rounded-full text-purple-500 hover:bg-purple-100">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-purple-200 rounded-full text-purple-500 hover:bg-purple-100">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
  )
}

export default WordOfStudent
