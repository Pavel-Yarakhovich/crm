import styled from "@emotion/styled";
import { themes } from "../../../Configuration/themes";

export const Container = styled.div`
  padding: 65px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  background: ${themes.sign_up_form_bg};
  color: ${themes.sign_up_form_text};
`;

export const Title = styled.span`
  font-size: 20px;
  color: ${themes.sign_up_form_title};
  font-weight: 600;
  margin: 0;
`

export const Text = styled.p`
  font-size: 13px;
  line-height: 20px;
  margin: 15px auto;
  max-width: 320px;
  padding: 0 10px;
  text-align: center;
`

export const Policy = styled.div`
  margin: 10px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 9px;

  p {
    margin: 0;
    max-width: 320px;
    text-align: center;

    a {
      color: ${themes.sign_up_form_title};
    }
  }
`

export const Form = styled.form`
  width: 500px;
  display: flex;
  flex-flow: column;
  align-items: stretch;
  color: ${themes.sign_up_form_title};

  @media (max-width: 520px) {
    width: calc(100% - 20px);
  }
`

export const Button = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  border-radius: 0 0 5px 5px;
  background: #000;
  padding: 0 22px;
  color: ${themes.notification_text};
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }
`

export const EmailWrapper = styled.div`
  display: flex;
`