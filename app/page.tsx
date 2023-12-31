import QuestionForm from './_components/QuestionForm';
import { ABOUT } from './_constants/about';

export default function Home() {
  return (
    <section className="space-y-12">
      <article>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          {ABOUT.title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          {ABOUT.description}
        </p>
      </article>

      <QuestionForm />
    </section>
  );
}
