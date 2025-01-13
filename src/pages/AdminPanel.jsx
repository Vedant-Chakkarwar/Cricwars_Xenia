import { useState } from "react";
import MyModal from "../components/MyModal";
import { Form, InputGroup } from "react-bootstrap";
import Card from "../components/Card";
import { players } from "../utils/players";
import { Link } from "react-router-dom";
import { teams } from "../utils/teams";
import { useSelector } from "react-redux";

const AdminPanel = () => {

    const isAdmin = useSelector(state => state.isAdmin);

    const [teamName, setTeamName] = useState("");
    const [leaderName, setLeaderName] = useState("");

    const [CreateTeamModal, setCreateTeamModal] = useState(false);
    const [viewTeamModal, setViewTeamModal] = useState(false);
    const [viewPlayersModal, setViewPlayersModal] = useState(false);
    const [startAuctionModal, setStartAuctionModal] = useState(false);

    const batsman = players.filter(player => player.role === "Batsman");
    const bowlers = players.filter(player => player.role === "Bowler");
    const allRounder = players.filter(player => player.role === "All Rounder");
    const wicketKeeper = players.filter(player => player.role === "Wicket Keeper");


    const saveTeam = () => {
        console.log(teamName, leaderName);
    }

    return (
        <>
            {isAdmin ?
                (
                    <><div className="w-full h-full flex flex-col justify-center items-center my-10 p-5">
                        <button
                            onClick={() => setCreateTeamModal(true)}
                            className="w-[15%] px-5 py-3 my-5 rounded-lg border-2">
                            Create Team
                        </button>
                        <button
                            onClick={() => setViewTeamModal(true)}
                            className="w-[15%] px-5 py-3 my-5 rounded-lg border-2">
                            View Team
                        </button>
                        <button
                            onClick={() => setViewPlayersModal(true)}
                            className="w-[15%] px-5 py-3 my-5 rounded-lg border-2">
                            View Players
                        </button>
                        <button
                            onClick={() => setStartAuctionModal(true)}
                            className="w-[15%] px-5 py-3 my-5 rounded-lg border-2">
                            Start Auction
                        </button>
                    </div>

                        {/* create team modal */}
                        <div>
                            <MyModal
                                title={"Create Team"}
                                show={CreateTeamModal}
                                setShow={setCreateTeamModal}
                                click={() => setCreateTeamModal(false)}
                                btn2={{
                                    text: "Save",
                                    click: saveTeam
                                }}
                            >
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1" className="label">Team Name</InputGroup.Text>
                                    <Form.Control
                                        className="inputbox"
                                        name="teamName"
                                        value={teamName}
                                        onChange={(e) => setTeamName(e.target.value)}
                                        placeholder="Team Name"
                                        aria-label="teamName"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon2" className="label">Leader Name</InputGroup.Text>
                                    <Form.Control
                                        className="inputbox"
                                        name="leaderName"
                                        value={leaderName}
                                        onChange={(e) => setLeaderName(e.target.value)}
                                        placeholder="Leader Name"
                                        aria-label="Leader Name"
                                        aria-describedby="basic-addon2"
                                    />
                                </InputGroup>

                            </MyModal>
                        </div>

                        {/* view teams modal */}
                        <div>
                            <MyModal
                                title={"Team List"}
                                show={viewTeamModal}
                                setShow={setViewTeamModal}
                                click={() => setViewTeamModal(false)}
                            >
                                <div className="">
                                    {teams.map((team, index) => (
                                        <div key={index} className="grid grid-cols-5 items-center w-full my-2 p-1 px-2 border-2 border-b-gray-500 rounded-lg">
                                            <span className="text-2xl font-semibold col-span-3 text-left px-2">{team.name}</span>
                                            <span className="text-lg font-semibold col-start-5 px-2">{team.teamLeader}</span>
                                        </div>
                                    ))}
                                </div>

                            </MyModal>
                        </div>

                        {/* view players modal */}

                        <div className={`bg-[#eee] w-[100%] ${viewPlayersModal ? "inline" : "hidden"} absolute top-[12%] `}>
                            <div className="flex flex-col justify-center items-center w-[95%] mx-auto bg-[#eee] rounded-2xl">

                                <div className="modal_title my-5 text-black">
                                    <h1>Players List</h1>
                                </div>

                                {/* Batsman */}
                                <div className="text-center text-black text-3xl font-medium my-10 border-y-2 border-black w-full py-4">
                                    Batsman
                                </div>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    {batsman.map((batter, i) =>
                                        <Card
                                            key={i}
                                            name={batter.name}
                                            imgsrc={batter.image}
                                            playerbaseprice={batter.baseprice}
                                            playerbuyprice={batter.buy_price >= 100 ? batter.buy_price / 100 + " Cr" : batter.buy_price + " L"}
                                            rating={batter.rating}
                                        // team={"RCB"}
                                        />
                                    )}

                                </div>

                                {/* Bowler */}
                                <div className="text-center text-black text-3xl font-medium my-10 border-y-2 border-black w-full py-4">
                                    Bowler
                                </div>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    {bowlers.map((player, i) =>
                                        <Card
                                            key={i}
                                            name={player.name}
                                            imgsrc={player.image}
                                            playerbaseprice={player.baseprice}
                                            playerbuyprice={player.buy_price >= 100 ? player.buy_price / 100 + " Cr" : player.buy_price + " L"}
                                            rating={player.rating}
                                        // team={"RCB"}
                                        />
                                    )}

                                </div>

                                {/* All Rounder */}
                                <div className="text-center text-black text-3xl font-medium my-10 border-y-2 border-black w-full py-4">
                                    All Rounder
                                </div>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    {allRounder.map((player, i) =>
                                        <Card
                                            key={i}
                                            name={player.name}
                                            imgsrc={player.image}
                                            playerbaseprice={player.baseprice}
                                            playerbuyprice={player.buy_price >= 100 ? player.buy_price / 100 + " Cr" : player.buy_price + " L"}
                                            rating={player.rating}
                                        // team={"RCB"}
                                        />
                                    )}

                                </div>

                                {/* Wicket Keeper */}
                                <div className="text-center text-black text-3xl font-medium my-10 border-y-2 border-black w-full py-4">
                                    Wicket Keeper
                                </div>
                                <div className="flex justify-center gap-2 flex-wrap">
                                    {wicketKeeper.map((player, i) =>
                                        <Card
                                            key={i}
                                            name={player.name}
                                            imgsrc={player.image}
                                            playerbaseprice={player.baseprice}
                                            playerbuyprice={player.buy_price >= 100 ? player.buy_price / 100 + " Cr" : player.buy_price + " L"}
                                            rating={player.rating}
                                        // team={"RCB"}
                                        />
                                    )}

                                </div>

                                <div className="my-5">
                                    <button
                                        className="bg-gray-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg"
                                        onClick={() => setViewPlayersModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* start auction modal */}

                        <div className={`bg-[#eee] w-[100%] ${startAuctionModal ? "inline" : "hidden"} absolute top-[12%] `}>
                            <div className="flex flex-col justify-center items-center w-[95%] mx-auto bg-[#eee] rounded-2xl">

                                <div className="modal_title my-5 text-black">
                                    <h1>Start Auction</h1>
                                </div>
                                <div className="my-5 p-4">
                                    <Link to={"/auction"}
                                        className="bg-blue-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg">
                                        Batsman Auction
                                    </Link>
                                    <Link to={"/auction"}
                                        className="bg-blue-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg">
                                        Bowler Auction
                                    </Link>
                                    <Link to={"/auction"}
                                        className="bg-blue-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg">
                                        Wicket Keeper Auction
                                    </Link>
                                    <Link to={"/auction"}
                                        className="bg-blue-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg">
                                        All Rounder Auction
                                    </Link>
                                </div>
                                <div className="my-5">
                                    <button
                                        className="bg-gray-500 text-black p-2 px-5 rounded-xl m-4 mt-2 mb-0 font-medium text-lg"
                                        onClick={() => setStartAuctionModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div></>)
                :
                <div className="w-full h-full flex flex-col justify-center items-center my-10 p-5">
                    <h1 className="text-3xl font-semibold">You are not an Admin</h1></div>
            }

        </>
    )
}

export default AdminPanel
