import styled from 'styled-components';

export const ModalDim = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.6);
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: auto;
`;

export const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  width: 85%;
  min-width: 600px;
  max-width: 1000px;
  height: 90%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  z-index: 1000;
`;

export const Button = styled.button`
  border: 0;
  position: absolute;
  top: 20px;
  right: 20px;
`;
