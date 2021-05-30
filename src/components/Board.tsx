import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-auto-rows: 100px;
  width: 306px;
  margin: 50px auto;
`;

const Cell = styled.div`
  width: 100px;
  height: 100px;
  font-family: 'Permanent Marker', cursive;
  box-shadow: ${({ theme }) => `0 0 0 1px ${theme.background}`};
  cursor: pointer;
  line-height: 100px;
  font-size: 60px;
`;

type Props = {
  data: string[];
  onCellClick: (cellIndex: number) => void;
};

const Board = ({ data, onCellClick }: Props) => (
  <Grid>
    {data.map((sign, index) => (
      <Cell onClick={() => onCellClick(index)} key={index}>
        {sign}
      </Cell>
    ))}
  </Grid>
);

export default Board;
