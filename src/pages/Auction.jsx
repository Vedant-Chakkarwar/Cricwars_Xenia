/* eslint-disable no-unused-vars */

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import PlayerSearch from "../components/PlayerSearch";

const Auction = () => {

    const [soldPrice, setSoldPrice] = useState("");
    const [soldTo, setSoldTo] = useState("");

    const [searchedPlayer, setSearchedPlayer] = useState({});
    const searchPlayerHandler = (player) => {
        setSearchedPlayer(player);
    }
    const [loading, setLoading] = useState(false);
    const [isSetSelected, setIsSetSelected] = useState(false);
    const [setofP, setSetofP] = useState();
    const [disableSold, setDisableSold] = useState(false);

    function calculateSizeInMB(jsonObject) {
        // Convert the JSON object to a string
        const jsonString = JSON.stringify(jsonObject);

        // Calculate the size in bytes
        const bytes = new TextEncoder().encode(jsonString).length;

        // Convert bytes to megabytes
        const megabytes = bytes / (1024 * 1024);

        return megabytes.toFixed(2); // Limit to 2 decimal places
    }


    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();
    const players = useSelector(state => state.players);
    const [playersList, setPlayersList] = useState();
    const [unAuctionedPlayers, setUnAuctionedPlayers] = useState([]);
    const [unsoldPlayers, setUnsoldPlayers] = useState([]);

    const [password, setPassword] = useState('');
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

    useEffect(() => {
        updateLocalStorage(players);
    },[]);

    useEffect(() => {
        const storedPlayers = JSON.parse(localStorage.getItem('players'));
        const isAdmin = localStorage.getItem("isAdmin");
        console.log(isAdmin);
        if (isAdmin == "true") {
            setIsPasswordCorrect(true)
        }
        if (storedPlayers) {
            setPlayersList(storedPlayers);
            const unauctioned = storedPlayers.filter((player) => player.status === 'unauctioned');
            const unsold = storedPlayers.filter((player) => player.status === 'unsold');
            // console.log(storedPlayers);
            setUnAuctionedPlayers(unauctioned);
            setUnsoldPlayers(unsold);
            setLoading(true);
        }
        else {
            setPlayersList(players);
            const unauctioned = players.filter((player) => player.status === 'unauctioned');
            const unsold = players.filter((player) => player.status === 'unsold');
            // console.log(players);
            setUnAuctionedPlayers(unauctioned);
            setUnsoldPlayers(unsold);
            setLoading(true);
        }
    }, [players]);
    const batsman = players.filter(player => (player.role === "Batsman" && player.status === "unauctioned"));


    const playerSold = async (e) => {
        e.preventDefault();
        if (disableSold) {
            return
        }
        else {
            setDisableSold(true);
            setTimeout(() => {
                setDisableSold(false);
            }, 10000);
        }
        if (index === playersList.length - 1) {
            alert("All players are sold");
            return;
        }
        const soldPlayer = playersList[index];
        if (soldPlayer.basePrice > soldPrice) {
            alert("Sold price should be greater than base price")
            return;
        }
        const res = await fetch("https://cricwarsbackend.onrender.com/updatedb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                img: soldPlayer.img,
                id: soldPlayer.id,
                name: soldPlayer.name,
                rating: soldPlayer.rating,
                price: soldPrice,
                soldTo: soldTo,
            }),
            credentials: "include",
        })
        const data = await res.json();
        // console.log(data);
        if (!data.message) {
            alert(data.error)
            return;
        }
        const updatedPlayers = playersList.map((player) =>
            player.id === playersList[index].id ? { ...player, status: 'sold' } : player
        );
        // console.log(soldPlayer);

        // Update local storage and state with the updated players list
        // localStorage.setItem('players', JSON.stringify(updatedPlayers));
        updateLocalStorage(updatedPlayers);
        setPlayersList(updatedPlayers);
        setIndex(index + 1);
        setSoldPrice("");
        setSoldTo("");
    };

    const playerUnSold = () => {
        if (index === playersList.length - 1) {
            alert("All players are sold");
            return;
        }

        const updatedPlayers = playersList.map((player) =>
            player.id === playersList[index].id ? { ...player, status: 'unsold' } : player
        );

        // Update local storage and state with the updated players list
        // localStorage.setItem('players', JSON.stringify(updatedPlayers));
        updateLocalStorage(updatedPlayers);
        setPlayersList(updatedPlayers);
        setIndex(index + 1);
    };

    const updateLocalStorage = (updatedPlayers) => {
        // Filter out players with the status 'sold'
        const unauctionedAndUnsoldPlayers = updatedPlayers.filter(player => player.status !== 'sold');

        // Sort the players so that "unauctioned" players are first, followed by "unsold" players
        const sortedPlayers = unauctionedAndUnsoldPlayers.sort((a, b) => {
            if (a.status === "unauctioned" && b.status === "unsold") return -1;
            if (a.status === "unsold" && b.status === "unauctioned") return 1;
            return 0;
        });

        // Update local storage with the sorted players
        localStorage.setItem('players', JSON.stringify(sortedPlayers));
    };


    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleCheckPassword = (event) => {
        event.preventDefault();
        // Replace 'yourCorrectPassword' with your actual correct password
        const correctPassword = 'Aayushisadmin';

        if (password === correctPassword) {
            setIsPasswordCorrect(true);
            localStorage.setItem("isAdmin", "true")
        } else {
            setIsPasswordCorrect(false);
            alert("Wrong Pass")
        }
    };

    return loading && (
        <>
            {!isPasswordCorrect ?
                <div className="w-full text-center">
                    <form onSubmit={handleCheckPassword}>
                        <label className=" flex justify-center gap-4 py-4 text-lg">
                            Enter Password:
                            <input type="password" value={password} onChange={handlePasswordChange} className="text-black text-sm" />
                        </label>
                        <input type="submit" value={`submit`} className="mx-auto my-4 text-black px-4 py-2 bg-green-400 rounded-lg" />
                    </form>
                </div >
                :
                <>
                    <PlayerSearch handle={searchPlayerHandler} players={playersList} />
                    <div>
                        <div className="my-5 p-4 w-full text-center font-semibold text-4xl">
                            <h1>Auction</h1>
                        </div>
                        <div className="flex gap-4 justify-evenly items-center">
                            <div className="w-[65%]">
                                <div className="flex gap-2 flex-wrap">
                                    <div className="w-[40%]">
                                        <img src={playersList[index].img} alt="image" className="my-3 mx-4 w-[90%] h-[50vh] object-contain border-2 rounded-2xl" />
                                        <p className="my-6 mx-4 p-2 bg-[#1d1d1d] border-2 rounded-xl text-3xl text-center">{playersList[index].name}</p>
                                    </div>
                                    <div className={`w-[40%]`}>
                                        <div className="text-white text-lg p-4">
                                            <p className="my-6 border-2 p-4 rounded-xl">Base Price: {playersList[index].basePrice}</p>
                                            {/* <p className="my-6 border-2 p-4 rounded-xl">Buy Price: {playersList[index].buy_price ? playersList[index].buy_price : "25 Cr"}</p> */}
                                            <p className="my-6 border-2 p-4 rounded-xl">Rating: {playersList[index].rating}</p>
                                            <p className="my-6 border-2 p-4 rounded-xl">Role: {playersList[index].role}</p>
                                            <p className="my-6 border-2 p-4 rounded-xl">Previous Team: {playersList[index].previousTeam}</p>
                                            {/* <p className="my-1 shadow-sm shadow-white px-1 rounded-lg">Team: </p> */}
                                        </div>
                                    </div>

                                </div>
                            </div>




                            <div className="w-[32%] bg-slate-200 text-black rounded-xl text-center pt-8">
                                <form onSubmit={playerSold}>
                                    <div className="w-full text-center">
                                        <label className="flex justify-center gap-4 py-4 text-lg">
                                            Sell Price:
                                            <input
                                                type="number"
                                                value={soldPrice}
                                                placeholder="0 cr"
                                                onChange={e => setSoldPrice(e.target.value)}
                                                className="text-black border-2 border-black px-1 text-sm" />
                                        </label>
                                        <label className="flex justify-center gap-4 py-4 text-lg">
                                            Sold To:
                                            <input
                                                type="text"
                                                value={soldTo}
                                                placeholder="team name"
                                                onChange={e => setSoldTo(e.target.value)}
                                                className="text-black border-2 border-black px-1 text-sm" />
                                        </label>
                                        {/* <button type="submit" onClick={handleCheckPassword} className="mx-auto my-4 text-black px-4 py-2 bg-green-400 rounded-lg">Submit</button> */}
                                    </div >

                                    <div className="my-5 w-full text-center">
                                        <button type="submit"
                                            // onClick={() => setDisableSold(true)}
                                            className={`${disableSold ? "bg-gray-500" : "bg-green-500"} text-black p-2 px-5 rounded-xl m-4 my-2 mx-auto font-medium text-lg`}>
                                            Sold
                                        </button>
                                    </div>
                                </form>
                                <button
                                    className="bg-red-500 text-black p-2 px-5 rounded-xl m-4 my-2 mx-auto font-medium text-lg"
                                    onClick={playerUnSold}>
                                    Unsold
                                </button>
                            </div>
                        </div>
                    </div >
                </>
            }
        </>

    )
}

export default Auction
