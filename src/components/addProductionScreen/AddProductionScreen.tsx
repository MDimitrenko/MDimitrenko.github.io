import React, { FC, useState } from 'react';
import { AddProductForm } from '../Forms/addProductForm/AddProductForm';
import Modal from '../modal/modal';

// eslint-disable-next-line react/prop-types
export const AddProductionScreen: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal visible={isOpen} onClose={handleCloseModal}>
        <AddProductForm />
      </Modal>
    </>
  );
};
