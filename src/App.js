import {
    Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import './assets/scss/app.scss';

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/votes">
                </Route>
                <Route path="/vote">
                </Route>
                <Route
                    link='/'
                    // render={() => <Redirect to="/mountain" />}
                >
                    <Home />
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
