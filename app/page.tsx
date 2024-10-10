import { Stepper } from './components';

export default function Home() {
  return (
    <div className="container mx-auto">
      <main className="flex flex-col lg:flex-row justify-center items-center lg:items-start h-full md:h-auto gap-10 px-5 lg:px-0 py-20">
        <Stepper />
      </main>
    </div>
  );
}
