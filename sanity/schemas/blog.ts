export default {
  fields: [
    {
      type: 'slug',
      title: 'Slug',
      name: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      type: 'string',
      title: 'Title',
      name: 'title',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
  ],
  type: 'document',
  title: 'Blog',
  name: 'Blog',
}
