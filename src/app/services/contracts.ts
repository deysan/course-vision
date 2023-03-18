import { z } from 'zod';

export const coursesApi = z.object({
  containsLockedLessons: z.boolean(),
  description: z.string(),
  duration: z.number(),
  id: z.string(),
  launchDate: z.string(),
  lessonsCount: z.number(),
  meta: z.object({
    courseVideoPreview: z
      .object({
        link: z.string(),
        duration: z.number(),
        previewImageLink: z.string(),
      })
      .optional(),
    skills: z.array(z.string()).optional(),
    slug: z.string(),
  }),
  previewImageLink: z.string(),
  rating: z.number(),
  status: z.string(),
  tags: z.array(z.string()),
  title: z.string(),
});

export const validateCoursesApi = z.array(coursesApi);
