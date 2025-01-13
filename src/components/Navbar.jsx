import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import cricwars from "../assets/cricwars.jpg"

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [showInstructions, setShowInstructions] = useState(false);

    //navbar contents
    const navItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Teams',
            link: '/teams'
        },
        {
            name: 'Auction',
            link: '/auction'
        },
        {
            name: 'Instructions',
            // link: '/'
            onClick: () => {
                setShowInstructions(!showInstructions);
                setShow(false);
            }
        },

    ]



    return (
        <>
            <div className='flex flex-col sm:flex-row justify-between w-full h-16 gap-4 my-2 sm:items-center border-b-2'>
                <div className="flex items-center px-4">

                    <GiHamburgerMenu className='text-white text-2xl sm:hidden' onClick={() => setShow(!show)} />
                    <div className='p-3 flex gap-4 items-center'>
                        <img src={cricwars} alt="logo" className="w-12 rounded-xl" />
                        <h1 className='text-center font-semibold text-2xl sm:text-3xl'>CRICWARS</h1>
                    </div>
                </div>
                <div className="pr-4 z-10  min-h-max">
                    <ul className={`{hidden sm:flex ${show ? "flex flex-col bg-black w-full" : "hidden"} justify-center gap-4}`}>
                        {navItems.map((item, i) => (

                            item.link ?
                                (<Link key={i} to={`${item.link}`} className='text-white'>
                                    <li
                                        className="hover:bg-blue-500 hover:text-white rounded-3xl p-2 px-4"
                                        onClick={item.onClick}>
                                        {item.name}
                                    </li>
                                </Link>)
                                :
                                (<li
                                    className="hover:bg-blue-500 rounded-3xl p-2 px-4"
                                    key={i}
                                    onClick={item.onClick}>
                                    {item.name}</li>)

                        ))}
                    </ul>
                </div>
            </div>




            {/* instructions modal */}


            <div className={` w-[100%] ${showInstructions ? "inline" : "hidden"} absolute top-[12%] `}>
                <div className="h-[40rem] overflow-y-scroll justify-center items-center w-[75%] sm:w-[50%] mx-auto bg-[#eee] rounded-2xl px-10">

                    <div className="modal_title mt-5 text-black">
                        <h1>Instructions</h1>
                    </div>
                    <div className="mb-5 p-4 text-black ">
                        <h1 className="font-bold text-xl my-7">Auction Details</h1>

                        <ul className="list-disc">
                            <li>10 teams will enter the Auction.</li>
                            <li>The venue of the Auction will be conveyed beforehand.</li>
                            <li>Each team will be allotted a budget of 90 Crores to buy various players in the Auction.</li>
                            <li>There will be a grand pool of 180 players who will be auctioned.</li>
                            <li>Each player will enter the auction with an initial base price.</li>
                            <li>Bidding will start, and there are no restrictions on the value to which a player can go in the auction.</li>
                            <li>Players will be categorized into sets, and there will be a 5-minute break after the completion of each set.</li>
                            <li>The player being auctioned at the moment will be displayed to all the teams accordingly.</li>
                            <li>If a player fetches no bids, he goes unsold and may only return to a rebid after the completion of all sets.</li>
                            <li>2 Right To Match Cards (RTMs) allotted to each team to match the final bid of a player.</li>
                            <li>After the Auction, if any team fails to meet the squad constraints, the team will be disqualified.</li>
                            <li>A team must conclude with a squad of at least 13 and at most 17 players.</li>
                            <li>Playing 11 constraints: Batsmen (3-6), Bowlers (3-6), Wicketkeepers (1-3), Allrounders (1-3).</li>
                            <li>Overseas Players: 3 or 4 are mandatory in the playing 11; Maximum 6 in the squad.</li>
                            <li>Uncapped Players: At least 1 in playing 11.</li>
                            <li>Legends: At most 1 in the squad.</li>
                        </ul>

                        <h2 className="font-bold text-xl my-7">Team Formation</h2>

                        <ul className="list-disc">
                            <li>Qualifying participants need to form a team of 3 members.</li>
                            <li>Team members cannot be any of the other qualified participants.</li>
                            <li>Team members should have participated in Round 1.</li>
                            <li>Submit your team to the event coordinators before the deadline.</li>
                            <li>Teams get to select their bidding franchise based on the leaderboard of Round 2.</li>
                            <li>The bidding franchise chosen is vital for getting RTMs for a player who plays for that franchise.</li>
                        </ul>

                        <h2 className="font-bold text-lg my-7">Points System</h2>

                        <ul className="list-disc">
                            <li>Each player in the Auction pool will have a rating out of 10.</li>
                            <li>Teams submit Playing 11 with Captain and Vice-Captain after the Auction.</li>
                            <li>Playing 11 should follow squad constraints to avoid disqualification.</li>
                            <li>Captain and Vice-Captain tags act as score multipliers (2x and 1.5x, respectively).</li>
                            <li>Final scores are calculated by aggregating ratings (with multipliers) of all players in the Playing 11.</li>
                            <li>The top 3 teams with the highest aggregate ratings will be crowned the Winners of the Auction and CricWars.</li>
                        </ul>
                    </div>
                    <div className="my-5 text-center">
                        <button
                            className="bg-gray-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg"
                            onClick={() => setShowInstructions(false)}>
                            Close
                        </button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Navbar
