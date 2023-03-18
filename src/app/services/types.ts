import { z } from 'zod';

import { coursesApi } from './contracts';

export type Courses = z.infer<typeof coursesApi>;
