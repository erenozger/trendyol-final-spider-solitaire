import './App.scss';
import { GameContext } from './utils/contexts/GameContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Onboarding from './pages/Onboarding/index';
import Game from './pages/Game';
import { useGameHook } from './utils/hooks/useGameHook';

function App() {

  const { gameState, useGame } = useGameHook();

  return (
    <GameContext.Provider value={{ gameState: gameState, useGame: useGame }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Onboarding />
          </Route>
          <Route exact path="/Game">
            <Game />
          </Route>
        </Switch>
      </Router>
    </GameContext.Provider>
  );
}

export default App;
