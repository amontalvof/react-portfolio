import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  .navbar-phone {
    overflow: hidden;
    background-color: var(--darkBlue);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    /*border-bottom: 3px solid var(--mainBlue);*/
    box-shadow: 0 5px 5px var(--mainBlue);
  }

  .navbar-icon {
    color: var(--mainWhite);
    font-size: 20px;
    font-weight: 900;
    margin: 14px 26px;
  }

  .navbar {
    display: none;
    overflow: hidden;
    background-color: var(--darkBlue);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;
    /*border-bottom: 3px solid var(--mainBlue);*/
    box-shadow: 0 5px 5px var(--mainBlue);
  }

  .navbar a {
    float: left;
    display: block;
    color: var(--mainWhite);
    text-align: center;
    padding: 10px 30px;
    text-decoration: none;
    font-size: 20px;
    font-weight: 900;
  }

  .navbar a:hover {
    background: var(--mainWhite);
    color: var(--darkBlue);
    transition: var(--mainTransition);
  }

  @media screen and (min-width: 767px) {
    .navbar {
      display: block;
      padding: 0 100px;
    }

    .navbar-phone {
      display: none;
    }
  }

  @media screen and (min-width: 1025px) {
    .navbar {
      padding: 0 200px;
    }
  }
`;
