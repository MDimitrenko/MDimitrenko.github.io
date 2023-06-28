import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 8px;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 16px;
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ItemHeader = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ItemDescription = styled.div`
  color: #888;
  margin-bottom: 8px;
`;

const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ItemPrice = styled.span`
  font-weight: bold;
  margin-left: auto;
`;

const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  cursor: pointer;
  margin-top: 8px;
`;

interface CartItemProps {
  name: string;
  description: string;
  price: number;
  imageSrc: string;
  onDelete: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, description, price, imageSrc, onDelete }) => {
  return (
    <ItemContainer>
      <ItemImage src={imageSrc} alt={name} />
      <ItemContent>
        <ItemHeader>{name}</ItemHeader>
        <ItemFooter>
          <div>
            <ItemDescription>{description}</ItemDescription>
            <ItemPrice>${price}</ItemPrice>
          </div>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </ItemFooter>
      </ItemContent>
    </ItemContainer>
  );
};

export default CartItem;
