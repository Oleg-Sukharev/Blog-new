import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PostListContainer from '../../containers/PostListContainer';
import PostPageContainer from '../../containers/PostPageContainer';
import "./App.scss";

const App = () => {
    return (
        <Switch>
            <Route
                path="/" component={PostListContainer} exact>
            </Route>
            <Route path="/posts/:id"
                render={({ match }) => {
                    const { id } = match.params;
                    return <PostPageContainer itemId={+id} />
                }} />
            <Route render={() => {
                return <h2> Page not found</h2>
            }} />
        </Switch>
    );
}

export default App;
