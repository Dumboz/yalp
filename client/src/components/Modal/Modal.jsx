import { Icon } from 'components/Icon/Icon';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, ModalDim, ModalWrapper, ModalInner } from './Modal.styled';

const CloseButton = React.memo(({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      <Icon type="close" size={30} />
    </Button>
  );
});

function Modal({ visible, setVisible, children }) {
  const modalWrapper = useRef(null);

  useEffect(() => {
    modalWrapper.current.focus();
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(
    e => {
      if (
        (e.type === 'keydown' && e.key === 'Escape') ||
        (e.type === 'click' && e.target === e.currentTarget)
      ) {
        document.body.style.overflow = null;
        setVisible(false);
      }
    },
    [setVisible],
  );

  const closeButton = useCallback(
    e => {
      if (e.type === 'click' && e.target.closest('button')) {
        document.body.style.overflow = null;
        setVisible(false);
      }
    },
    [setVisible],
  );

  return (
    <>
      <ModalDim visible={visible} tabIndex={-1} />
      <ModalWrapper visible={visible} onClick={closeModal} tabIndex={-1}>
        <ModalInner
          ref={modalWrapper}
          tabIndex={0}
          className="modal-inner"
          onKeyDown={closeModal}
        >
          <CloseButton tabIndex={1} onClick={closeButton} />
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default React.memo(Modal);
