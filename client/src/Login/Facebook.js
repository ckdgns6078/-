import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = (response) => {
        console.log(response);
        if (response.status !== "unknown") {
            this.setState({
                isLoggedIn: true,
                userID: response.userID,
                name: response.name,
                email: response.email,
                picture: response.picture.data.url
            });
        }
        sessionStorage.setItem("frontid", response.name);
        sessionStorage.setItem("profile", response.picture.data.url);
        sessionStorage.setItem("id", response.userID);

        this.setState({
            isLoggedIn: "",
            userID: "",
            name: "",
            email: "",
            picture: ""
        })

    };

    componentClicked = () => {
        console.log("clicked");
    };

    render() {
        let fbContent;

        fbContent = (
            <FacebookLogin
                appId="1480672229110640"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                icon="fa-facebook"
            />
        );
        function clickFb() {

        }

        return (

            <button id="facebookbutton" className="facebookbutton" onClick={fbContent}>
                Login with Facebook
            </button>
        );
    }
}