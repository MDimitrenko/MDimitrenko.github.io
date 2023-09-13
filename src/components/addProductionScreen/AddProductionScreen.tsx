import React, { FC, useState } from 'react';
import { AddProductionForm, AddProductionFormProps } from '../Forms/addProductionForm/AddProductionForm';
import Modal from '../modal/modal';

// eslint-disable-next-line react/prop-types
export const AddProductionScreen: FC<AddProductionFormProps> = ({
  category,
  productionName,
  shortDefinition,
  definition,
  price,
  images,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Modal visible={isOpen} onClose={handleCloseModal}>
        <AddProductionForm
          category={category}
          shortDefinition={shortDefinition}
          definition={definition}
          productionName={productionName}
          price={price}
          images={images}
        />
      </Modal>
    </>
  );
};
