import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import NewPassword from "../containers/NewPassword";
import EmailSent from "../containers/EmailSent"
import "../styles/global.css";

const App = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="recovery-password" component={EmailSent} />
                    <Route component={NotFound} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
}

export default App