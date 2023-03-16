import { Scoreboard } from '@components';
import { Standings } from '@components/standings';

export default function App() {
  return (
    <div className='container mx-auto'>
      <Scoreboard />
      <Standings />
    </div>
  );
}
