/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  name: "ingredient",
  title: "Ingredient",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ingredient Name",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      option: {
        hotspot: true,
      },
    },
    {
      name: "notes",
      title: "Notes",
      type: "text",
    },
  ],
};
