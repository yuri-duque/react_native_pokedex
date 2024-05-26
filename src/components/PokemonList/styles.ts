import styled from 'styled-components/native';

type RowProps = {
  cols: number;
};

export const Row = styled.View<RowProps>`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: ${({theme, cols}) => theme.sizes.dimenions.width / cols}px;
`;

export const Col = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Separator = styled.View`
  height: 16px;
  width: 16px;
`;
