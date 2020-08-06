import styled from "styled-components";

interface ColoursProps {
    light: string,
    dark: string,
    primary: string,
    secondary: string,
    Purple: string,
    Teal: string,
    Red: string,
    Pink: string,
    Green: string,
    Navy: string,
    Blue: string,
    Yellow: string,
    grey80: string,
    grey60: string,
    grey40: string,
    grey20: string,
    grey5: string,
}

export const colours: ColoursProps = {
    light: "#f5f2eb",
    dark: "#3f3c36",
    primary: "#34B8BD",
    secondary: "#DCB663",
        
    Purple: "#7414DC",
    Teal: "#00A794",
    Red: "#E22E12",
    Pink: "#FFB4E6",
    Green: "#23A950",
    Navy: "#003982",
    Blue: "#006DDF",
    Yellow: "#FFE627",
    grey80: "#333333",
    grey60: "#666666",
    grey40: "#999999",
    grey20: "#CCCCCC",
    grey5: "#F2F2F2",
}


interface SettingsProps {
    maxWidth: string;
    maxWidthHalf: string;
    mobile: string;
}

export const SharedSettings: SettingsProps = {
    maxWidth: "1400px",
    maxWidthHalf: "700px",
    mobile: "1100px",
}

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const PageBodyContainer = styled.div`
  position: absolute;
  top: 150px;
  bottom: 0;
  left: 0;
  right: 0;

  @media(max-width: ${SharedSettings.mobile}) {
    top: 100px;
  }
`;

interface SectionProps {
  fullwidth?: boolean;
}

export const Section = styled.div`
  width: 100%;
  min-height: 200px;
  padding: ${(p: SectionProps) => p.fullwidth ? "20px 0 100px" : "20px 30px 100px"};
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    /* margin-left: 50px; */
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 20px 0 50px;
  }
`;


interface SectionProps {
    dark?: boolean;
  }

export const SectionContainer = styled.div`
  min-height: 200px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: ${(p: SectionProps) => p.dark ? colours.dark : colours.light};
  color: ${(p: SectionProps) => p.dark ? colours.light : colours.dark};

  h1 {
    font-size: 3em;
    font-weight: 200;
    margin-top: 100px;
  }

  p {
      font-size: 1.8em;
  }
`;