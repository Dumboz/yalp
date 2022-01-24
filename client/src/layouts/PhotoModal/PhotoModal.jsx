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

function PhotoModal({ title, photos, select: selectedURL }) {
  const [select, setSelect] = useState(selectedURL);

  const changeSelectPhoto = useCallback(
    (e, photo) => {
      e.preventDefault();
      setSelect(photo);
    },
    [setSelect],
  );

  return (
    <Modal visible={true}>
      <ModalInnder>
        <PhotoWrapper>
          <ArrowButtonWrapper>
            <ArrowButton
              direct="left"
              disabled={photos.indexOf(select) === 0}
              onClick={e => {
                changeSelectPhoto(e, photos[photos.indexOf(select) - 1]);
              }}
            />
            <ArrowButton
              direct="right"
              disabled={photos.indexOf(select) + 1 === photos.length}
              onClick={e => {
                changeSelectPhoto(e, photos[photos.indexOf(select) + 1]);
              }}
            />
          </ArrowButtonWrapper>
          <Photo src={select} />
        </PhotoWrapper>
        <ContentWrapper>
          <TitleWrapper
            as="h4"
            title={`Photos for ${title}`}
            margin="0px 0px 20px 0px"
          >
            <Text>{`${photos.indexOf(select) + 1} of ${photos.length}`}</Text>
            <PhotoList>
              {photos.map((photo, id) => (
                <li key={photo}>
                  <PhotoButton onClick={e => changeSelectPhoto(e, photo)}>
                    <picture>
                      <PhotoPriview isSelect={select === photo} src={photo} />
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
