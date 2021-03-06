import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-width: 300px;
  box-sizing: border-box;


  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: 160px;
  object-fit: contain;
  object-position: center;
  margin-right: 15px;
  box-shadow: 0 0 15px lightgrey;
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

export const Book = styled.div`
  flex-basis: 50%;
  display: flex;
  padding: .5rem;
  box-sizing: border-box;
`