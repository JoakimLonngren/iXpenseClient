import { UserProvider } from "./Contexts/UserContext"
import Layout from "./Layout/Layout"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { InformationMessageProvider } from "./Contexts/InformationMessageContext"
import Login from "./Components/Login/Login"

function App() {
  return (
    <InformationMessageProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route element={<Layout />}>
            
            </Route>
          </Routes>
        </Router>
      </UserProvider>
    </InformationMessageProvider>
  )
}

export default App
