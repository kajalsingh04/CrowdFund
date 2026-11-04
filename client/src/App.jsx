import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import CreateCampaign from './pages/CreateCampaign'
import CampaignDetails from './pages/CampaignDetails'
import Dashboard from './pages/Dashboard'
import Explore from './pages/Explore'
import SavedCampaigns from './pages/SavedCampaigns'
import AdminPanel from './pages/AdminPanel'
import NGODashboard from './pages/NGODashboard'
import DonationHistory from './pages/DonationHistory'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/create-campaign' element={<CreateCampaign />} />
      <Route path='/campaign/:id' element={<CampaignDetails />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/saved-campaigns' element={<SavedCampaigns />} />
      <Route path='/admin' element={<AdminPanel />} />
      <Route path='/ngo-dashboard' element={<NGODashboard />} />
      <Route path='/donation-history' element={<DonationHistory />} />
    </Routes>
  )
}

export default App