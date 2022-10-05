import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 199;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  padding: 60px 20px;

  @media (max-width: 768px) {
    overflow: hidden auto;
  }
`;

const StyledModal = styled.section`
  max-width: 490px;
  width: 100%;
  height: max-content;
  border-radius: 12px;
  background: black;
  position: relative;
  z-index: 200;
  align-self: center;

  @media (max-width: 768px) {
    overflow: visible;
    align-self: flex-start;
  }
`;

const ButtonClose = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: -20px;
  right: -26px;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 0;
    top: -30px;
  }
`;

const Content = styled.div`
  padding: 40px 60px 60px;

  @media (max-width: 768px) {
    padding: 20px 25px 25px;
  }
`;

export { StyledModal, ModalContainer, ButtonClose, Content };
