import React, { useState, FC, useEffect } from "react";
import styled from "styled-components";
import {
  SectionContainer,
  colours,
  SharedSettings,
} from "../Shared/SharedStyles";

const TestimonialsSection = styled(SectionContainer)`
  min-height: 200px;
  justify-content: center;
  overflow: hidden;
  padding: 0 20px;
  position: relative;

  @media (max-width: ${SharedSettings.mobile}) {
    padding: 0;
  }
`;

const Testimonial = styled.a`
  font-style: italic;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${colours.dark};
  cursor: pointer;

  width: calc(100% - 500px);
  padding: 0 80px 10px;
  left: 0;

  span {
    font-size: 2em;
    font-weight: 500;
    font-style: normal;
    margin-left: 40px;
    min-width: 140px;
  }

  p {
    margin: 0;
    font-weight: 400;

    &:before,
    &:after {
      content: '"';
      color: ${colours.primary};
    }
  }

  &:hover {
    color: ${colours.primary};
  }

  @media (max-width: ${SharedSettings.mobile}) {
    width: 150%;
    padding: 0;
    flex-direction: column;
    align-items: flex-end;
    font-size: 0.6em;
    margin: 0 12px;
    text-align: center;

    span {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`;

interface CarouselProps {
  xPos?: number;
}

const Carousel = styled.div`
  display: flex;
  width: 300%;
  padding-top: 12px;
  transition: all 0.5s ease;
  transform: ${(p: CarouselProps) => (p.xPos ? `translateX(-${p.xPos}%)` : 0)};
`;

const Testimonials: FC = () => {
  const [seconds, setSeconds] = useState(5);
  const [xPos, setXPos] = useState(66.6);

  let updatedSeconds = seconds;
  let updatedXPos = xPos;

  const updateTime = () => {
    if (updatedSeconds > 0) {
      updatedSeconds--;
    } else {
      updatedSeconds = 10;

      if (updatedXPos === 66.6) {
        setXPos(33.3);
        updatedXPos = 33.3;
      } else if (updatedXPos === 33.3) {
        setXPos(0);
        updatedXPos = 0;
      } else if (updatedXPos === 0) {
        setXPos(66.6);
        updatedXPos = 66.6;
      }
    }
    return setSeconds(updatedSeconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  return (
    <TestimonialsSection>
      <Carousel xPos={xPos}>
        <Testimonial
          href="https://www.facebook.com/NorthMoves/posts/167827414801486"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {" "}
            <b>I cant recommend North Removals highly enough</b>. This is the{" "}
            <b>second time</b> they have moved us so that says it all.
            Comminuication at all times is first class. They are{" "}
            <b>punctual and reliable</b>. Always really pleasant and helpfull
            making <b>useful suggestions</b> and adjusting things to fit . They
            dismantled a couple of wardrobes and built them up and they fitted
            better than before. <b>A First Class Job.</b> Thanks{" "}
          </p>
          <span>- Ian</span>
        </Testimonial>

        <Testimonial
          href="https://www.facebook.com/laura.beasley.737/posts/1267722413435572"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {" "}
            Very <b>professional</b>, clean van, on time,{" "}
            <b>highly recommend!</b> Thanks for a great service!{" "}
          </p>
          <span>- Laura</span>
        </Testimonial>

        <Testimonial
          href="https://www.facebook.com/NorthMoves/posts/166240161626878"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            {" "}
            Nathan and his team moved our family into our new home on one of the
            hottest days of the year, on Friday. We couldn’t have asked for a
            better team and <b>nothing was too much trouble</b>. They worked
            tirelessly and <b>went massively over and above</b> what they quoted
            to do. They <b>made our moving day</b>, which we have previously
            found very stressful, a breeze.{" "}
            <b>Cannot recommend them highly enough.</b>{" "}
          </p>
          <span>- Michelle</span>
        </Testimonial>
      </Carousel>
    </TestimonialsSection>
  );
};

export default Testimonials;
