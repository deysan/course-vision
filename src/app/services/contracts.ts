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

export const courseApi = z.object({
  id: z.string(),
  title: z.string(),
  tags: z.array(z.string()),
  launchDate: z.string(),
  status: z.string(),
  description: z.string(),
  duration: z.number(),
  previewImageLink: z.string(),
  rating: z.number(),
  meta: z.object({
    slug: z.string(),
    skills: z.array(z.string()),
    courseVideoPreview: z.object({
      link: z.string(),
      duration: z.number(),
      previewImageLink: z.string(),
    }),
  }),
  lessons: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      duration: z.number(),
      order: z.number(),
      type: z.string(),
      status: z.string(),
      link: z.string(),
      previewImageLink: z.string(),
      meta: z.object({}).nullable(),
    }),
  ),
  containsLockedLessons: z.boolean(),
});

export const validateCoursesApi = z.array(coursesApi);
export const validateCourseApi = courseApi;
