import React from "react";


const UserContext = React.createContext({
    LogedIn: "",
    updateLogedIn:(name) =>{}
});
export default UserContext;
 