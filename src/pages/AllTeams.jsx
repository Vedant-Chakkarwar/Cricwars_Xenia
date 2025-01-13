// import React from 'react'

import { Link } from "react-router-dom";
import { teamslogo } from "../components/teamslogo";

const AllTeams = () => {

    const iplTeams = [
        { fullName: 'Chennai Super Kings', initials: 'CSK', link: '/csk', img: teamslogo.csk },
        { fullName: 'Delhi Capitals', initials: 'DC', link: '/dc', img: teamslogo.dc },
        { fullName: 'Punjab Kings', initials: 'KXIP', link: '/pbks', img: teamslogo.pbks },
        { fullName: 'Kolkata Knight Riders', initials: 'KKR', link: '/kkr', img: teamslogo.kkr },
        { fullName: 'Mumbai Indians', initials: 'MI', link: '/mi', img: teamslogo.mi },
        { fullName: 'Rajasthan Royals', initials: 'RR', link: '/rr', img: teamslogo.rr },
        { fullName: 'Royal Challengers Bangalore', initials: 'RCB', link: '/rcb', img: teamslogo.rcb },
        { fullName: 'Sunrisers Hyderabad', initials: 'SRH', link: '/srh', img: teamslogo.srh },
        { fullName: 'Lucknow Super Giants', initials: 'LSG', link: '/lsg', img: teamslogo.lsg },
        { fullName: 'Gujrat Titans', initials: 'GT', link: '/gt', img: teamslogo.gt }
    ];

    return (
        <div>
            <div className="sm:w-[50%] w-full border-x-2 border-zinc-700 m-auto my-3 p-2 sm:px-8 px-4 h-[70%]">

                {iplTeams.map((team, i) =>
                    <Link key={i} to={team.link}>
                        <div
                            className="border-b-2 border-zinc-800 p-2 my-3 sm:my-3 rounded-xl grid grid-cols-8 sm:grid-cols-10 gap-4 items-center shadow-md shadow-gray-600 ">
                            <img src={team.img} alt="image" className="w-16 rounded-full col-start-1 col-span-2 mx-auto" />
                            <h1 className="text-base sm:text-xl font-medium sm:font-semibold col-start-3 col-span-6">{team.fullName}</h1>
                            <p className="col-start-9">{team.initials}</p>
                            {/* <p className="col-start-8 col-span-3 text-sm">&#8377;{`${team.price} Cr`}</p> */}
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default AllTeams
