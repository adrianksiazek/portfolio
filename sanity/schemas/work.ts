import { MdWorkOutline } from "react-icons/md";
import { defineField } from "sanity";

const work = {
  name: "work",
  title: "Work",
  type: "document",
  icon: MdWorkOutline,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "In couple short sentence, what this app you do?",
      validation: (rule) => rule.required().min(40).max(1000),
    }),
    {
      name: "workImage",
      title: "Work Image",
      type: "image",
      description: "Upload a work mockup picture",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      description: "Add a list of skills",
      of: [{ type: "string" }],
    },
  ],
};

export default work;
