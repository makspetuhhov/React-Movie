import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../API";


export const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({ theme }) => theme.body};
   
  }
`;
export const StyledHeader = styled.div`
  background: rgba(224,228,220,0);

  .header-content {
    max-width: max-content;
    padding: 1px 0;
    margin: 0 auto;
    text-align: center;

    strong {
      font-family: "Montserrat", sans-serif;
      text-decoration: none;
      font-size: 2.2rem;
      color: rgba(246, 244, 241, 0.95);
    }

    p {
      line-height: 0;
      margin-top: 1.5rem;
      color: rgba(246, 244, 241, 0.95);
      font-family: "Montserrat", sans-serif;
      font-size: 3rem;
      font-weight: 900;
      text-decoration: none;
    }

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
    footer{
      color: blue;
    }
  }
`;
export const StyledMovieCard = styled.div`
  .card-rating {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    position: sticky;
    transform: translateX(5%) translateY(-125%);
    background: rgba(64, 64, 64, 0.66);
    color: whitesmoke;
    font-weight: 800;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 0, 1);
    margin: 0 0 0 0;
  }
  img {
    width: 100%;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 6px;
    animation: animateMovieCard 0.5s;
    transform: scale(0.9);
    border: none;
    opacity: 0.9;
    transition: all ease 0.3s;
    cursor: pointer;
    :hover {
      transform: scale(0.95);
      opacity: 1;
    }

    .clickable {
      cursor: pointer;
    }

    @keyframes animateMovieCard {
      from {opacity: 0;}
      to {opacity: 1; }
    }
  }
`;
export const StyledMovieDetails = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : "rgba(0,0,0,.5)"};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  border-radius: 6px;
  animation: animateMovieinfo 1s;

  .moviedetails-content {
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.8);
    border-radius: 20px;
    position: relative;
  }

  .moviedetails-thumb {
    width: 300px;
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .moviedetails-text {
    padding: 40px;
    color: ${({ theme }) => theme.body};
    overflow: hidden;

    h1 {
      font-size: 48px;
      margin: 0;
color: red;
      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: "Arial", sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .rating {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    color: whitesmoke;
    font-weight: 800;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 0, 1);
    margin: 0 0 0 0;
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const StyledMovieModal = styled.div`
  .modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.9);
    animation-name: appear;
    animation-duration: 0.5s;
  }

  .modal-dialog {
    border-radius: 5px 5px;
    max-width: 100%;
    background: transparent;
    position: relative;
    margin: 0 20px;
    max-height: calc(100vh - 100px);
    text-align: left;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: slide-in;
    animation-duration: 0.5s;
  }

  .modal-header,
  .modal-footer {
    display: flex;
    align-items: center;
    color: white;
    padding: 1rem;
    font-size: xx-large;
  }

  .modal-header {
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid rgba(239, 235, 231, 0.9);
    justify-content: flex-end;
  }

  .modal-close {
    cursor: pointer;
    padding: 1rem;
    margin: -1rem -1rem -1rem auto;
  }

  .modal-body {
    overflow: auto;
  }

  .modal-content {
    padding: 1rem;
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateY(-150px);
    }
    to {
      transform: translateY(0);
    }
  }
`;
export const StyledMovieWall = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  > h1 {
    font-family: 'Arial', sans-serif;
    filter: invert();
    color: grey;
    font-size: 32px;
    font-weight: 100;
    text-align: center;
    padding: 1rem 1rem;
    background: rgba(0,0,0,0.64);
    border-radius: 9px;
    opacity: 0.33;
    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
`;

export const StyledMovieWallContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const StyledSearchBar = styled.div`
  width: 100%;
  height: 10%;
  background: ${({ theme }) => theme.body};
  padding: 25px 20px 25px 20px;
  box-sizing: border-box;
  color: rgba(239, 235, 231, 0.9);
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: rgba(82, 82, 82, 1);
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: rgba(239, 235, 231, 0.9);

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: rgba(187, 0, 17, 1);
    z-index: 1000;
  }

  input {
    font-size: 1.5rem;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: rgba(239, 235, 231, 0.9);
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: rgba(239, 235, 231, 0.19);
    }

    @media screen and (max-width: 720px) {
      font-size: 1rem;
    }
  }
`;
export const ToggleContainer = styled.div`
  



  button{
  background-color: grey;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 1rem;
  position: relative;
  align: center;

  }

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

export const StyledRatingsFilter = styled.div`
  .star-wrapper {
    display: flex;
    place-content: center;
  }

  .star-wrapper p {
    font-family: "Arial";
    opacity: 0.5;
  }

  .star-group {
    font-size: 0;
    direction: rtl;
    margin-top: 0.55rem;
  }

  .star-group * {
    font-size: 2rem;
  }

  .star-group > input {
    display: none;
  }

  .star-group > input + label {
    display: inline-block;
    overflow: hidden;
    text-indent: 9999px;
    width: 1.65rem;
    white-space: nowrap;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .star-group > input + label:before {
    display: inline-block;
    text-indent: -9999px;
    content: "☆";
    color: rgba(159, 163, 167, 0.9);
    transition: all ease 0.2s;
  }

  .star-group > input:checked ~ label:before,
  .star-group > input + label:hover ~ label:before,
  .star-group > input + label:hover:before {
    content: "★";
    color: rgba(218, 50, 28, 0.9);
  }

  .star-group > .star-empty + label {
    text-indent: -9999px;
    width: 0.25em;
  }

  .star-group > .star-empty + label:before {
    width: 0.25em;
  }

  .star-group:hover > input + label:before {
    content: "☆";
    color: rgba(159, 163, 167, 0.9);
  }
  .star-group:hover > input + label:hover ~ label:before,
  .star-group:hover > input + label:hover:before {
    content: "★";
    color: rgba(218, 50, 28, 0.9);
  }
`;

