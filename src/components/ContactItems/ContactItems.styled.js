import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const P = styled.p`
  color: #050505;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  padding: 4px 20px;
  border-radius: 24px;
  cursor: pointer;
  color: #fff;
  background-color: ${p => p.theme.colors.deleteBtn};

  transition: 0.3s;

  color: #f8f8f8;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    background-color: #fe4f4f;
  }

  &:active {
    transform: translateY(2px);
  }
`;
