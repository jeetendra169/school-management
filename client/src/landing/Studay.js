import React from 'react'

function Studay() {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen p-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
              <div className="bg-blue-500 text-white rounded-full p-2 mb-2">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="text-center">
                <p className="text-gray-600">Total students</p>
                <p className="text-red-500 text-3xl font-bold">2310</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/a1aa/image/QKJY4az9WTcpX2_jHvnczGED9Sj0E7gSEYfFjQ-rxkA.jpg"
                alt="A student wearing headphones and smiling at a laptop"
                className="rounded-lg w-full md:w-96"
                width="600"
                height="400"
              />
              <div className="absolute bottom-0 right-5 transform translate-x-1/4 translate-y-1/4">
                <img
                  src="https://storage.googleapis.com/a1aa/image/_VnWL1AxzdHqTEQfIL9jHPpufwgpFuTdpz37pCTYtV0.jpg"
                  alt="Another student smiling and looking at a book"
                  className="rounded-lg w-24 h-16 md:w-32 md:h-20 "
                  width="100"
                  height="100"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Ready To Achieve <span className="text-red-500">Greatness</span> In Your Studies?
            </h1>
            <div className="mt-4 flex justify-center space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Join for free</button>
              <button className="text-blue-500 px-4 py-2">Watch demo</button>
            </div>
          </div>
        </div>
  )
}

export default Studay
