
// import { players } from "../utils/players"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { teamslogo } from "../components/teamslogo";

const TeamInfo = () => {
    const { teamInitials } = useParams();
    const [players, setPlayers] = useState([]);
    const [usedBudget, setUsedBudget] = useState(0);
    const [count, setCount] = useState(0);
    const [actualBudget, setActualBudget] = useState(0);
    const [img, setImg] = useState()

    useEffect(() => {
        ; (async function () {
            const res = await fetch("https://cricwarsbackend.onrender.com/getdb", {
                // const res = await fetch("http://localhost:5000/getdb", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
            const data = await res.json()
            if (data) {
                const temp = data.filter((team) => team.teamName === teamInitials)
                setPlayers(temp[0].players)
                if (teamInitials === "rcb") {
                    setImg(teamslogo.rcb)
                }
                if (teamInitials === "csk") {
                    setImg(teamslogo.csk)
                }
                if (teamInitials === "mi") {
                    setImg(teamslogo.mi)
                }
                if (teamInitials === "rr") {
                    setImg(teamslogo.rr)
                }
                if (teamInitials === "lsg") {
                    setImg(teamslogo.lsg)
                }
                if (teamInitials === "gt") {
                    setImg(teamslogo.gt)
                }
                if (teamInitials === "pbks") {
                    setImg(teamslogo.pbks)
                }
                if (teamInitials === "kkr") {
                    setImg(teamslogo.kkr)
                }
                if (teamInitials === "srh") {
                    setImg(teamslogo.srh)
                }
                if (teamInitials === "dc") {
                    setImg(teamslogo.dc)
                }
            }


        })()

    }, [teamInitials]);


    const teamsMap = {
        rcb: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=1685600933&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        csk: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=1238863763&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        mi: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=303307239&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        rr: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=178934596&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        lsg: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=1975065709&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        gt: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=463475614&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        pbks: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=2123798722&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        kkr: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=1015227127&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        srh: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=1846947657&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>,
        dc: <iframe className="w-full h-full" src={`https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=1002294126&amp;single=true&amp;widget=true&amp;headers=false`}></iframe>
    };


    // Assuming teamInitials exist in the teamIframes object
    const iframeCode = teamsMap[teamInitials];


    const [countdown, setCountdown] = useState(60); // Set the initial countdown time in seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Decrease the countdown by 1 second
            setCountdown((prevCountdown) => prevCountdown - 1);

            // If countdown reaches 0, reload the page
            if (countdown === 0) {
                window.location.reload();
            }
        }, 1000); // Run the interval every 1000 ms (1 second)

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [countdown]);

    useEffect(() => {
        // console.log(players);
        setActualBudget(90)
        players.map(player => {
            // console.log(Number(player.price));
            setUsedBudget(preval => preval + Number(player.price))
        })
        setCount(players.length)
        // console.log(img);
    }, [players])

    return iframeCode && (
        <div className="h-[70vh]">
            <p>This page will reload in {` ${countdown}`}</p>

            {/* {iframeCode} */}
            {/* team info */}
            {/* <div className="w-full flex flex-col justify-start items-center">
                <div className="flex gap-4 justify-center items-center h-16 px-5 shadow-sm shadow-white">
                    <h1 className="text-2xl font-semibold px-4">Team Name</h1>
                    <h1 className="text-xl">Team Leader</h1>
                </div>
            </div> */}

            {/* Budget */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 p-[1rem] text-center">

                <div className="w-[100%] sm:w-[25%] bg-[#eee] text-green-700  p-[1rem] rounded-2xl shadow-lg shadow-black">
                    <h1 className="mb-2 text-lg font-semibold">Remaining Budget</h1>
                    <p className="text-xl">{parseFloat(actualBudget - usedBudget).toFixed(2)}</p>
                </div>
                <div className="w-[100%] sm:w-[25%] bg-[#eee] text-red-500 p-[1rem] rounded-2xl shadow-lg shadow-black">
                    <h1 className="mb-2 text-lg font-semibold">No. of Players Bought</h1>
                    <p className="text-xl">{count}</p>
                </div>
            </div>

            {/* players */}

            <div
                className="border-b-2 sm:w-[50%] m-auto border-white p-2 my-3 sm:my-4 rounded-xl grid grid-cols-8 sm:grid-cols-12 gap-4 items-center">
                <img src={img} alt="image" className="w-16 rounded-full col-start-1 col-span-2" />
                <h1 className="text-base sm:text-xl font-medium sm:font-semibold col-start-1 sm:col-start-3 col-span-3 sm:col-span-3">Player Name</h1>
                <p className="col-start-7 text-base sm:text-xl font-medium sm:font-semibold text-center">Rating</p>
                <p className="col-start-10 col-span-3 text-base sm:text-xl font-medium sm:font-semibold">Price</p>
            </div>


            <div className="sm:w-[50%] w-full border-x-2 border-zinc-700 m-auto my-4 p-2 sm:px-8 px-4 overflow-y-scroll h-[70%]">

                {players.map((player, i) =>
                    <div
                        key={i}
                        className="border-b-2 border-zinc-800 p-2 my-3 sm:my-4 rounded-xl grid grid-cols-8 sm:grid-cols-10 gap-4 items-center sm:hover:-translate-y-3 shadow-md shadow-gray-600 ">
                        <img src={player.img} alt="image" className="w-16 h-16 object-top object-cover rounded-full col-start-1 col-span-2" />
                        <h1 className="text-base sm:text-xl font-medium sm:font-semibold col-start-3 col-span-4">{player.name}</h1>
                        <p className="col-start-7 textcenter">{player.rating}</p>
                        <p className="col-start-9 col-span-3 text-sm">&#8377;{`${player.price} Cr`}</p>
                    </div>
                )}

            </div>
            {/* <iframe className="w-full h-full" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTx3ICkdu7D4GNnh2eLPEkoPPgYP1ZFTnDDMdeL7LWW8SF5kaNieMumPiBYll3f9q44polSp174byHm/pubhtml?gid=1685600933&amp;single=true&amp;widget=true&amp;headers=false"></iframe> */}

        </div >
    )
}

export default TeamInfo
