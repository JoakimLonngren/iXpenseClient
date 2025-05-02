import { UserProvider } from "./Contexts/UserContext"
import Layout from "./Layout/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { InformationMessageProvider } from "./Contexts/InformationMessageContext"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import ProfilePage from "./Components/ProfilePage/ProfilePage"

function App() {
  return (
    <InformationMessageProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Register/>}/>
            <Route element={<Layout />}>
              <Route path='/profilePage' element={<ProfilePage/>}/>
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </InformationMessageProvider>
  )
}

export default App
