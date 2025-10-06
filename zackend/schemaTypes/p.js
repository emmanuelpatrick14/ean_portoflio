<<<<<<< HEAD
import { defineType, defineField } from 'sanity'

export default defineType({
=======
export default {
>>>>>>> origin/main
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
<<<<<<< HEAD
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
=======
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
>>>>>>> origin/main
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
<<<<<<< HEAD
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
=======
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
>>>>>>> origin/main
      name: 'imgUrl',
      title: 'ImgUrl',
      type: 'image',
      options: {
        hotspot: true,
      },
<<<<<<< HEAD
    }),
    defineField({
=======
    },
    {
>>>>>>> origin/main
      name: 'publishedAt',
      title: 'Date Published',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
<<<<<<< HEAD
    }),
    defineField({
=======
    },
    {
>>>>>>> origin/main
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Content Writing', value: 'content' },
          { title: 'Machine Learning', value: 'ml' },
        ],
      },
<<<<<<< HEAD
    }),
    defineField({
=======
    },
    {
>>>>>>> origin/main
      name: 'projectUrl',
      title: 'Project URL',
      type: 'url',
      description: 'Link to the live project, blog post, or repository',
<<<<<<< HEAD
    }),
  ],
})
=======
    },
  ],
};
>>>>>>> origin/main
