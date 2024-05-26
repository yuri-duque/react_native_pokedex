import styled from 'styled-components/native';

type RowProps = {
  cols: number;
};

const space = 10;

export const Container = styled.View`
  margin-top: ${space}px;
  margin-bottom: ${space}px;
`;

export const Row = styled.View<RowProps>`
  flex-direction: row;
  justify-content: space-between;
  height: ${({theme, cols}) => theme.sizes.dimenions.width / cols - 24}px;
  margin-right: ${space}px;
  margin-left: ${space}px;
`;

export const Col = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const Separator = styled.View`
  height: ${space}px;
  width: ${space}px;
`;
