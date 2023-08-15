import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  background-color: ${(p) => {
    console.log(p.theme.colors);
    return p.theme.colors.bgAccent;
  }};
`;
