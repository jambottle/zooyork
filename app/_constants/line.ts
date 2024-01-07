import { LineType } from '@/_models/Line';

type LineChart = Record<LineType, string>;

export const LINE_CHART: LineChart = {
  [LineType.LargeYang]: 'LargeYang',
  [LineType.SmallYang]: 'SmallYang',
  [LineType.LargeYin]: 'LargeYin',
  [LineType.SmallYin]: 'SmallYin',
};
