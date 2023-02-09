import { useQueryGetLive } from '@hooks';

export default function App() {
  const { data } = useQueryGetLive();

  return <h1 className='text-3xl font-bold underline'>{`Hello World here is my data ${JSON.stringify(data)}`}</h1>;
}
