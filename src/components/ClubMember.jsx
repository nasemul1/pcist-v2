import React from 'react'
import gs from '../assets/Members/gs.jpg'
import js1 from '../assets/Members/js-1.jpg'
import js2 from '../assets/Members/js-2.jpg'
import os1 from '../assets/Members/os-1.jpg'
import os2 from '../assets/Members/os-2.jpg'
import os3 from '../assets/Members/os-3.jpg'
import member1 from '../assets/Members/member-1.jpg'
import member2 from '../assets/Members/member-2.jpg'
import member3 from '../assets/Members/member-3.jpg'
import member4 from '../assets/Members/member-4.jpg'
import os4 from '../assets/Members/member-5.jpg'

const ClubMember = () => {
  return (
    <div className="mt-10 w-full">
      <div className="mb-5 flex flex-col items-center gap-2">
        <h3 className="text-2xl text-center font-semibold">COMMITTEE MEMBERS</h3>
        <hr className="w-[320px] border border-orange-500" />
      </div>

      <div className="flex flex-col items-center gap-10">
        {/* General Secretary */}
        <div className="flex flex-col items-center">
          <img className="w-40 rounded-sm border" src={gs} alt="General Secretary" />
          <p className="mt-2 font-semibold">General Secretary</p>
        </div>

        {/* Joint Secretaries */}
        <div className="flex flex-col items-center">
          <div className="h-10 w-1 bg-gray-400"></div>
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <img className="w-32 rounded-sm border" src={js1} alt="Joint Secretary 1" />
              <p className="mt-2 text-sm font-medium">Joint Secretary</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-32 rounded-sm border" src={js2} alt="Joint Secretary 2" />
              <p className="mt-2 text-sm font-medium">Joint Secretary</p>
            </div>
          </div>
        </div>

        {/* Organizing Secretaries */}
        <div className="flex flex-col items-center">
          <div className="h-10 w-1 bg-gray-400"></div>
          <div className="flex gap-8 flex-wrap justify-center">
            {[os1, os2, os3, os4].map((os, i) => (
              <div key={i} className="flex flex-col items-center">
                <img className="w-28 rounded-sm border" src={os} alt={`Organizing Secretary ${i + 1}`} />
                <p className="mt-1 text-xs font-medium">Organizing Secretary</p>
              </div>
            ))}
          </div>
        </div>

        {/* Members */}
        <div className="flex flex-col items-center">
          <div className="h-10 w-1 bg-gray-400"></div>
          <div className="flex gap-6 flex-wrap justify-center">
            {[member1, member2, member3, member4].map((m, i) => (
              <div key={i} className="flex flex-col items-center">
                <img className="w-24 rounded-sm border" src={m} alt={`Member ${i + 1}`} />
                <p className="mt-1 text-xs">Member</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClubMember
