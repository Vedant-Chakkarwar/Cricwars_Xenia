import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import TeamInfo from './pages/TeamInfo'
import AdminPanel from './pages/AdminPanel'
import Auction from './pages/Auction'
import SearchedPlayer from './components/SearchedPlayer'
import Home from './pages/Home'
import AllTeams from './pages/AllTeams'

function App() {

  return (
    <>
      <div><Navbar /></div>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path="/:teamInitials" Component={TeamInfo} />
        <Route path='/teams' Component={AllTeams} />
        <Route path='/user/admin' Component={AdminPanel} />
        <Route path='/auction' Component={Auction} />
        <Route path='/auction/:searchedplayer' Component={SearchedPlayer} />
      </Routes>
    </>
  )
}

export default App
