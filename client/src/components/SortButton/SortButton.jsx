import { Wrapper, Button, Modal, ModalItem } from './SortButton.styled';
import { Icon } from 'components/Icon/Icon';

export const SortButton = ({ showModal, selectSort }) => {
  return (
    <Wrapper>
      <Button className={'sortbutton'} onClick={showModal}>
        <span>Yelp Sort</span>
        <span>
          <Icon type={'dropdown'} size={10} />
        </span>
      </Button>
      <Modal className={'modal-menu'}>
        <ModalItem onClick={selectSort}>Newest First</ModalItem>
        <ModalItem onClick={selectSort}>Oldest First</ModalItem>
        <ModalItem onClick={selectSort}>Highest Rated</ModalItem>
        <ModalItem onClick={selectSort}>Lowest Rated</ModalItem>
      </Modal>
    </Wrapper>
  );
};
