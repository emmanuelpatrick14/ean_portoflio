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
      type: 'image',
      options: {
        hotspot: true,
      },
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
