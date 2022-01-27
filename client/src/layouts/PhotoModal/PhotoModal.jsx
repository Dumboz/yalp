import { Modal, TitleWrapper } from 'components';
import { ArrowButton } from 'components/ArrowButton/ArrowButton';
import React, { useCallback, useState } from 'react';
import {
  ModalInnder,
  PhotoWrapper,
  ArrowButtonWrapper,
  Photo,
  ContentWrapper,
  Text,
  PhotoList,
  PhotoButton,
  PhotoPriview,
} from './PhotoModal.styled';

function PhotoModal({
  visible,
  setVisible,
  title,
  photos,
  select: selectedId,
}) {
  const [select, setSelect] = useState(selectedId);

  const changeSelectPhoto = useCallback(
    (e, id) => {
      e.preventDefault();
      setSelect(id);
    },
    [setSelect],
  );

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <ModalInnder>
        <PhotoWrapper>
          <ArrowButtonWrapper>
            <ArrowButton
              direct="left"
              disabled={select === 0}
              onClick={e => {
                changeSelectPhoto(e, select - 1);
              }}
            />
            <ArrowButton
              direct="right"
              disabled={select + 1 === photos.length}
              onClick={e => {
                changeSelectPhoto(e, select + 1);
              }}
            />
          </ArrowButtonWrapper>
          <Photo src={photos[select]} />
        </PhotoWrapper>
        <ContentWrapper>
          <TitleWrapper
            as="h4"
            title={`Photos for ${title}`}
            margin="0px 0px 20px 0px"
          >
            <Text>{`${select + 1} of ${photos.length}`}</Text>
            <PhotoList>
              {photos.map((photo, id) => (
                <li key={id}>
                  <PhotoButton onClick={e => changeSelectPhoto(e, id)}>
                    <picture>
                      <PhotoPriview isSelect={select === id} src={photo} />
                    </picture>
                  </PhotoButton>
                </li>
              ))}
            </PhotoList>
          </TitleWrapper>
        </ContentWrapper>
      </ModalInnder>
    </Modal>
  );
}

export default React.memo(PhotoModal);
