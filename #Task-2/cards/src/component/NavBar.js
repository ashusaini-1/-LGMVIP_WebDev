import React from 'react'
import Scean from './Scean.jpg'

import { useState } from 'react';

const NavBar = () => {

    const [Users, setUsers] = useState([])


    const GetUsers = async () => {
        const response = await fetch("https://reqres.in/api/users?page=1");

        const json = await response.json();
        setUsers(json.data);

    };



    return (

        <div className="container">




            <img src={Scean} className="image"></img>


            <div className="nav-bar">
                <a href="/">LOGOS</a>
                <a href="/">HOME</a>
                <a href="/">SERVICE</a>
                <a href="/">PROJECT</a>
                <a href="/">ABOUT</a>
                <button type="button" className="button" onClick={GetUsers}>ClickMe</button>
            </div>

            <div className="Card-wrapper">


                {Users.map(({ id, email, first_name, last_name, avatar }) => {
                    return (


                        <div className="cards">
                            <div className="images">
                                <img className="imaging" src={avatar}></img></div>
                            <div className="name">{first_name}{last_name}</div>
                            <div className="id">Id:-{id}</div>
                            <div className="email">Email:-{email}</div>

                        </div>




                    )



                }

                )
                }





            </div>


        </div>





    );
}
export default NavBar;