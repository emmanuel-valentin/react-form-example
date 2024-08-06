import { RegisterForm } from './components';

export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="text-3xl mt-4 text-blue-500 font-bold text-center">
        React Bootstrap Forms Example
      </h1>
      <p className="text-center mb-4 text-gray-600">
        Este es un formulario que emula el funcionamiento de Google Forms
      </p>
      <RegisterForm />
    </main>
  );
}
