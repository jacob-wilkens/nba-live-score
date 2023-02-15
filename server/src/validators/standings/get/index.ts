import dayjs from '@util/dayjs';
import { z } from 'zod';

const { string, object } = z;

const DATE_FORMAT = 'YYYY-MM-DD';
// prettier-ignore
const query = object({
    date: string({ required_error: 'Date is Required' })
    .refine((val) => dayjs(val, DATE_FORMAT, true).isValid(), { message: `Invalid Date Format: Must be ${DATE_FORMAT}` }),
  })
  .required();

export const StandingsParams = z.object({ query });

export type StandingsQuerySchema = z.infer<typeof query>;
