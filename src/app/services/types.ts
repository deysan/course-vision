import { z } from 'zod';

import { courseApi, coursesApi } from './contracts';

export type Courses = z.infer<typeof coursesApi>;
export type Course = z.infer<typeof courseApi>;
