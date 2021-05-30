import { Table } from '../table';
import { BackgroundDiv } from './styled';
import { Header } from './header';
import { TableT } from '../../types/table';
import { champions } from '../../data/champions';
import { matchup } from '../../data/matchup';

export const Background = () => {
  return (
    <BackgroundDiv>
      <Header />
      <Table {...(champions as TableT)} />
      <Table {...(matchup as TableT)} />
    </BackgroundDiv>
  );
};
