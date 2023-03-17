export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: []
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      options: {
        list: [
          { title: "Editor-in-Chief", value: "Editor-in-Chief" },
          {
            title: "Arts & Entertainment Editor",
            value: "Arts & Entertainment Editor"
          },
          { title: "Lifestyle Editor", value: "Lifestyle Editor" },
          { title: "Sports Editor", value: "Sports Editor" },
          {
            title: "Local News Editor",
            value: "Local News Editor"
          },
          { title: "Staff Writer", value: "Staff Writer" },
          { title: "Photo Editor", value: "Photo Editor" },
          { title: "Video Editor", value: "Video Editor" }
        ],
        layout: "radio",
        direction: "horizontal",
        isHighlighted: true,
        isReversed: false,
        isFullWidth: false,
        isDisabled: false,
        isRequired: true
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
