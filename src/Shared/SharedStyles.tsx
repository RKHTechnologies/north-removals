import styled from "styled-components";

interface ColoursProps {
    light: string,
    dark: string,
    primary: string,
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
    light: "#FFF",
    dark: "#000",
    primary: "#7414DC",
        
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
}

export const SharedSettings: SettingsProps = {
    maxWidth: "1400px",
    maxWidthHalf: "700px",
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
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
  /* overflow-y: scroll; */
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