import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Production, removeProduct } from '../../reduxToolkit/basketSlice';
import axios from 'axios';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 8px;
  font-family: system, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Segoe WP', Roboto, Ubuntu, Oxygen, Cantarell,
    'Fira Sans', 'Helvetica Neue', Helvetica, 'Lucida Grande', 'Droid Sans', Tahoma, 'Microsoft Sans Serif', sans-serif;
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 16px;
  object-fit: cover;
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
  orderid?: string;
  id?: string;
  productionName: string;
  shortDefinition: string;
  price: number;
  image: string;
}

const CartItem: React.FC<CartItemProps> = ({ orderid, id, productionName, shortDefinition, price, image }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');
  const onDelete = () => {
    try {
      axios.delete(`https://19429ba06ff2.vps.myjino.ru/api/orders/${orderid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(removeProduct(id));
    } catch (error) {
      console.error('Remove product error:', error);
    }
  };

  return (
    <ItemContainer>
      <ItemImage src={image} />
      <ItemContent>
        <ItemHeader>{productionName}</ItemHeader>
        <ItemFooter>
          <div>
            <ItemDescription>{shortDefinition}</ItemDescription>
            <ItemPrice>${price}</ItemPrice>
          </div>
          <DeleteButton onClick={onDelete}>Delete</DeleteButton>
        </ItemFooter>
      </ItemContent>
    </ItemContainer>
  );
};

export default CartItem;
