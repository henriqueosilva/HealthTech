import React from "react";
import { AuthProvider } from "../Context/AuthContext";
import { UserProvider } from "../Context/UserContext"
import { BrowserRouter as Router , Routes as Switch, Route } from 'react-router-dom'
import Login from "./Login/Login";
import ForgotPassword from "./Login/ForgotPassword";
import Landing from "./Landing/Landing";
import Atendimentos from "./Atendimento/Atendimentos";
import Cadastro from "./Atendimento/Cadastro";
import ItemAtendimento from "./Atendimento/ItemAtendimento";
import Users from "./Users/Users";
import ItemUser from "./Users/ItemUser";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" element={<Landing />}/>
          <Route path="/atendimento" element={<Atendimentos />}>
            <Route path="cadastro" element={<Cadastro />}/>
            <Route path=":id" element={<ItemAtendimento />}/>
          </Route>
        </Switch>
        <UserProvider>
          <Switch>
            <Route path="/users" element={<Users />}>
              <Route path=":id" element={<ItemUser />}/>
            </Route>
          </Switch>
        </UserProvider>
        <Switch>
          <Route path="/login" element={<Login />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
        </Switch>
      </AuthProvider>
    </Router>
    );
  }
  
  export default App;
  