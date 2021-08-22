import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import PortFolio from './pages/PortFolio';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/competences' component={Knowledges} />
          <Route path='/portfolio' component={PortFolio} />
          <Route path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>     
      </BrowserRouter>
    </div>
  );
};

export default App;
