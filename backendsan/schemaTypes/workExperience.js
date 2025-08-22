export default {
  name: 'experience',
  type: 'document',
  title: 'Experience',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'institution', type: 'string', title: 'Institution' },
    { name: 'startDate', type: 'string', title: 'Start Date' },
    { name: 'endDate', type: 'string', title: 'End Date' },
    { name: 'summary', type: 'text', title: 'Summary' },
    { name: 'role', type: 'string', title: 'Role' },
    {
      name: 'achievements',
      type: 'array',
      title: 'Achievements',
      of: [{ type: 'string' }]
    }
  ]
}
