import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import virat from "../assets/virat.png"
import PlayerSearch from './PlayerSearch';

const SearchedPlayer = () => {
    const [soldPrice, setSoldPrice] = useState("");
    const [soldTo, setSoldTo] = useState("");

    const { searchedplayer } = useParams()
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const [player, setPlayer] = useState();

    const [playersList, setPlayersList] = useState();
    const [isAdmin, setIsAdmin] = useState(true);

    const [disableSold, setDisableSold] = useState(false);

    useEffect(() => {
        const storedPlayers = JSON.parse(localStorage.getItem('players'));
        const isAdmin = localStorage.getItem("isAdmin");
        if (isAdmin == "true") {
            setIsAdmin(true);
        }
        if (storedPlayers) {
            setPlayersList(storedPlayers);
            console.log(storedPlayers);
            const sp = storedPlayers.filter((player) => player.id === Number(searchedplayer));
            console.log(sp, searchedplayer);
            setPlayer(sp);
            setLoading(true);
        }

    }, [searchedplayer])


    const playerSold = async (e) => {
        e.preventDefault();
        if (disableSold) return;
        else {
            setDisableSold(true);
            setTimeout(() => {
                setDisableSold(false);
            }, 10000);
        }
        const updatedPlayers = playersList.map((player) =>
            player.id === Number(searchedplayer) ? { ...player, status: 'sold' } : player
        );
        if (player[0].basePrice > soldPrice) {
            alert("Sold price should be greater than base price")
            return;
        }
        const res = await fetch("https://cricwarsbackend.onrender.com/updatedb", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                img: player[0].img,
                id: player[0].id,
                name: player[0].name,
                rating: player[0].rating,
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
        // Update local storage and state with the updated players list
        // localStorage.setItem('players', JSON.stringify(updatedPlayers));
        updateLocalStorage(updatedPlayers);
        setPlayersList(updatedPlayers);
        navigate("/auction")
        setSoldPrice("");
        setSoldTo("")
    };

    const playerUnSold = () => {

        const updatedPlayers = playersList.map((player) =>
            player.id === Number(searchedplayer) ? { ...player, status: 'unsold' } : player
        );


        // Update local storage and state with the updated players list
        // localStorage.setItem('players', JSON.stringify(updatedPlayers));
        updateLocalStorage(updatedPlayers);
        setPlayersList(updatedPlayers);
        navigate("/auction")

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

    return player && loading && isAdmin && (
        <div>
            <PlayerSearch players={playersList} />
            <div>
                <div className="my-5 p-4 w-full text-center font-semibold text-4xl">
                    <h1>Auction</h1>
                </div>
                <div className="flex gap-4 justify-evenly items-center">
                    <div className="w-[65%]">
                        <div className="flex gap-2 flex-wrap">
                            <div className="w-[40%]">
                                <img src={player[0].img} alt="image" className="my-3 mx-4 w-[90%] h-[50vh] object-contain border-2 rounded-2xl" />
                                <p className="my-6 mx-4 p-2 bg-[#1d1d1d] border-2 rounded-xl text-3xl text-center">{player[0].name}</p>
                            </div>

                            <div className={`w-[40%]`}>
                                <div className="text-white text-lg p-4">
                                    <p className="my-6 border-2 p-4 rounded-xl">Base Price: {player[0].basePrice}</p>
                                    {/* <p className="my-6 border-2 p-4 rounded-xl">Buy Price: {player[0].buy_price ? player[0].buy_price : "25 Cr"}</p> */}
                                    <p className="my-6 border-2 p-4 rounded-xl">Rating: {player[0].rating}</p>
                                    <p className="my-6 border-2 p-4 rounded-xl">Role: {player[0].role}</p>
                                    <p className="my-6 border-2 p-4 rounded-xl">Previous Team: {player[0].previousTeam}</p>
                                    {/* <p className="my-1 shadow-sm shadow-white px-1 rounded-lg">Team: </p> */}
                                </div>
                            </div>

                        </div>
                    </div>




                    <div className="w-[32%] bg-slate-200 text-black rounded-xl text-center pt-8">
                        {/* <form onSubmit={playerSold}> */}
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
                            <input type="submit" value={`Submit`}
                                onClick={playerSold}
                                className={`${disableSold ? "bg-gray-500" : "bg-green-500"} text-black p-2 px-5 rounded-xl m-4 my-2 mx-auto font-medium text-lg`} />

                            <button
                                className="bg-red-500 text-black p-2 px-5 rounded-xl m-4 my-2 mx-auto font-medium text-lg"
                                onClick={playerUnSold}>
                                Unsold
                            </button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div >
        </div>
    )
}

export default SearchedPlayer
