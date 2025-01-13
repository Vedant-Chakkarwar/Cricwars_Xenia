/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PlayerSearch = ({ players }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        // Filter players based on the search term
        const filtered = players.filter(player =>
            player.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPlayers(filtered);
    }, [searchTerm, players]);

    const handleSelectPlayer = (selectedPlayer) => {
        // Perform actions when a player is selected
        console.log('Selected Player:', selectedPlayer);
        setSearchTerm('')
        navigate(`/auction/${selectedPlayer.id}`)
        // Add your logic to handle the selected player
    };

    return (
        <div className='w-full text-center  text-black'>
            <input
                type="text"
                className=' w-72 mx-auto text-white border-white bg-[#242424] outline-none px-10 py-2 border-2 rounded-lg    focus:border-slate-500 focus:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  hover:shadow-lg focus:outline-none focus:ring-2  focus:ring-opacity-50'
                placeholder="Search for a player..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && <ul className='bg-[#242424] text-white w-72 mx-auto h-60 overflow-y-scroll cursor-pointer'>
                {filteredPlayers.map(player => (
                    <li key={player.id} onClick={() => handleSelectPlayer(player)}>
                        {player.name}
                    </li>
                ))}
            </ul>}
        </div>
    );
};

export default PlayerSearch;
