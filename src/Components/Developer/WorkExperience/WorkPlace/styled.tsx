import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  padding: 1rem;
  min-width: 300px;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  object-position: center;
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column;
`

export const Position = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: .5rem;
`

export const CompanyName = styled.span`
  letter-spacing: .04rem;
  margin-bottom: .3rem;
`

export const Period = styled.span`
  font-weight: 100;
  margin-bottom: .3rem;
`

export const Duty = styled.span`
  padding-left: 30px;
`;
