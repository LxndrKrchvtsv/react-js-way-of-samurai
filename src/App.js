import React, {Suspense} from 'react';
import Style from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {BrowserRouter, Route, withRouter, Switch, Redirect} from 'react-router-dom';
import {compose} from "redux";
import {getErrorNull, getGlobalError, initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const Login = React.lazy(() => import("./components/Login/Login"));

//exact указывается в ссылке перед path и работает при точном совпадении URL.
/*<Route exact path='/dialogs' render={ () => <Dialogs Dialogs = {props.Dialogs} Messages = {props.Messages} />} />*/
class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        let promise = promiseRejectionEvent.reason.message
        this.props.getGlobalError(promise);
    }
    componentDidMount() {
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        const closeError = () => {
            document.querySelector('.error-wrap');
            this.props.getErrorNull();
        }

        return (
            <main className={Style.appWrapper}>
                {this.props.getError &&
                <div className={Style.errorWrap} onClick={closeError}>
                    <div>{this.props.getError}</div>
                </div>
                }
                <HeaderContainer/>
                <Navbar/>
                <div className={Style.appContentWrapper}>
                    <Switch>
                        <Redirect exact from='/' to='/profile'/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/login' render={withSuspense(Login)}/>
                        <Route path='*' render={() => <div>ERROR 404! PAGE NOT FOUND!</div>}/>
                    </Switch>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    getError: state.app.globalError
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp, getGlobalError, getErrorNull}))(App);

let SamuraiJSApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp;