import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  width: 100%;
  margin: 10px 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 370px) {
    font-size: 13px;
  }
`;

const DropdownItem = styled.div``;

const DropdownLink = styled.a`
  text-decoration: none;
`;

export { Wrapper, Dropdown, DropdownItem, DropdownLink };
