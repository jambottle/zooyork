import { LINE_CHART } from '@/_constants/line';
import Line from '@/_models/Line';

type Props = { label: string; line: Line | null; generateLine: () => void };

export default function CoinTossButton({ label, line, generateLine }: Props) {
  return (
    <div className="flex items-center justify-center gap-x-12">
      <div className="flex items-center justify-center gap-x-2">
        <label
          htmlFor={label}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label} :
        </label>
        <span className="w-20">{line ? LINE_CHART[line.type] : ''}</span>
      </div>

      <button
        id={label}
        type="button"
        disabled={line !== null}
        onClick={generateLine}
        className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Toss
      </button>
    </div>
  );
}
