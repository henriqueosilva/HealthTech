import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route} from 'react-router-dom';
import Landing from "./Landing";
import PatientList from "./Patients/List";
import PatientAdd from "./Patients/Add";
import AtendimentoAdd from "./Atendimento/Add";
import { AuthProvider } from "../Context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/" element={<Landing />}>
            <Route path="pacientes" element={<PatientList />}/>
            <Route path="pacientes/add" element={<PatientAdd />}/>
            <Route path="atendimento/add" element={<AtendimentoAdd />}/>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
