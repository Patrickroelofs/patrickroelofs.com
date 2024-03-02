export default {
  fields: [
    {
      type: 'string',
      title: 'Slug',
      name: 'slug'
    },
    {
      type: 'string',
      title: 'Title',
      name: 'title'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    }
  ],
  type: 'document',
  title: 'Blog',
  name: 'Blog'
}