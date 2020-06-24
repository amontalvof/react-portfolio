import styled from "styled-components";

export const TimelineWrapper = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 900;
    color: var(--darkGrey);
  }
  h4 {
    font-size: 20px;
    font-weight: 900;
    color: var(--darkGrey);
  }
  h5 {
    font-size: 16px;
    font-weight: 900;
    color: var(--darkGrey);
  }
  p {
    font-size: 16px;
    color: var(--darkGrey);
  }

  /* The actual timeline (the vertical ruler) */
  .timelineTitle {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 30px;
  }

  .timeline {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: "";
    position: absolute;
    width: 3px;
    background-color: var(--darkBlue);
    top: 0;
    bottom: 0;
    left: 0%;
    margin-left: -3px;
  }

  /* Container around content */
  .container {
    padding: 10px 10px;
    position: relative;
    width: 100%;
  }

  /* The circles on the timeline */
  .container::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    right: -9px;
    background-color: var(--lightBlue);
    border: 3px solid var(--darkBlue);
    top: 35px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the right */
  .right {
    left: 0%;
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: 30px;
    /*border: medium solid white;*/
    border-width: 10px 10px 10px 0;
    /*border-color: transparent white transparent transparent;*/
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -11px;
  }

  /* The actual content */
  .content {
    padding: 20px 30px;
    /*background-color: white;*/
    position: relative;
    border-radius: 6px;
  }

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 800px) {
    /* Place the timelime to the left */
    .timeline::after {
      left: 31px;
    }

    /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 30px;
      padding-right: 20px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 60px;
      /*border: medium solid white;*/
      border-width: 10px 10px 10px 0;
      /*border-color: transparent white transparent transparent;*/
    }

    /* Make sure all circles are at the same spot */
    .right::after {
      left: 19px;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
`;
