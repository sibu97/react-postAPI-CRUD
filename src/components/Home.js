import React from "react";
import "./home.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Blog } from "./Blog";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
//import { Blog } from "./components/Blog";
import { getPosts } from "./posts";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    });

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
      <>
         <div>
         <div className="navbar">
            <div className="p-2 box mt-1 text-center" style={{color:'orange'}}>
                {user && user.email}
            </div>
            <div className="d-grid gap-2">
              
                <Button variant="primary" onClick={handleLogout}>
                Log out
                </Button>
            </div>
       
       </div>
              <div><Blog /></div>
        </div> 
    </>
  );
};

export default Home;
