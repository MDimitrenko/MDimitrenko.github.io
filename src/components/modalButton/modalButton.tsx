import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../modal/modal';
import { AddProductionForm } from '../Forms/addProductionForm/AddProductionForm';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  margin-top: 8px;
  cursor: pointer;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

const ModalButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setInputText(event.target.value);
  };

  return (
    <Container>
      <Input type="text" value={inputText} onChange={handleInputChange} />
      <Button onClick={handleButtonClick}>Open Modal</Button>
      {isOpen && (
        <Modal visible={isOpen} onClose={handleCloseModal}>
          {/*<p>{inputText}</p>*/}
          <AddProductionForm />
        </Modal>
      )}
    </Container>
  );
};

export default ModalButton;
