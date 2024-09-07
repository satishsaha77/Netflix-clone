import React from 'react'
// import loginImage from "../assets/loginImg.jpg";
import loginVideo from "../assets/loginVideo.mp4";
import styled from "styled-components";

function LoginVideo() {
    return (
        <Container>
        {/* <img src={loginImage} alt="background" /> */}
        <video autoPlay loop muted>
            <source src={loginVideo} type="video/mp4" />
        </video>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    overflow: hidden; 
`;
const Video = styled.video`
    object-fit: cover; /* Cover the entire container */
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export default LoginVideo;
