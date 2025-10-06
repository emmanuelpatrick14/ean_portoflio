<<<<<<< HEAD
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
    }),
    defineField({
      name: 'codeLink',
      title: 'Code Link',
      type: 'url',
    }),
    defineField({
      name: 'imgUrl',
      title: 'Image',
=======
// export default{
//     name:'skills',
//     title:'Skills',
//     type: 'document',
//     fields:[
//         {
//             name:'name',
//             title:'Name',
//             type:'string'
//         },
//         {
//             name:'bgColor',
//             title:'BgColor',
//             type:'string'
//         },
//         {
//             name:'icon',
//             title:'Icon',
//             type: 'image',
//             options: {
//               hotspot: true,
//             },
//         },
        
//     ]
// }



export default {
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'bgColor',
      title: 'BgColor',
      type: 'string',
    },
    {
      name: 'icon',
      title: 'Icon',
>>>>>>> origin/main
      type: 'image',
      options: {
        hotspot: true,
      },
<<<<<<< HEAD
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
=======
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Writing', value: 'writing' },
          { title: 'Machine Learning', value: 'machine-learning' },
        ],
        layout: 'radio' // optional: you can use 'dropdown' instead
      },
      validation: Rule => Rule.required()
    },
  ],
};
>>>>>>> origin/main
