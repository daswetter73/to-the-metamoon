import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  font-family: Montserrat, Arial, sans-serif;
  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export { StyledTextArea };
