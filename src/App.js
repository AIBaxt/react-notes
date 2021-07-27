import DisplayNotes from './pages/DisplayNotes';
import CreateNote from './pages/CreateNote';
import Layout from './shared/Layout';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <DisplayNotes />
            </Route>
            <Route path="/create">
              <CreateNote />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div >
  );
}

export default App;
