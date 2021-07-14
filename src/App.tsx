import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {NewRoom} from "./pages/NewRoom";
import {Home} from "./pages/Home";
import {Room} from "./pages/Room";
import {AdminRoom} from "./pages/AdminRoom";
import {info} from "./pages/Info";

import {AuthContextProvider} from './contexts/AuthContext'

function App() {
  
  return (
    <BrowserRouter>
    <AuthContextProvider>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      <Route path="/rooms/:id" component={Room} />
      <Route path="/info" component={info} />

      <Route path="/admin/rooms/:id" component={AdminRoom} />
      </Switch>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;

// int/float = text={1} ou text={4232}
// array text={[1, 'bom dia', 50]}