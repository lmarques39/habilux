import { defineField, defineType } from "sanity";

export const propertyType = defineType({
  name: "property",
  title: "Propriedade",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Tipo",
      type: "string",
      options: {
        list: [
          { title: "Apartamento", value: "Apartamento" },
          { title: "Moradia", value: "Moradia" },
          { title: "Comercial", value: "Comercial" },
          { title: "Terreno", value: "Terreno" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Preço (€)",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "location",
      title: "Localização",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bedrooms",
      title: "Quartos",
      type: "number",
      validation: (rule) => rule.positive().integer(),
    }),
    defineField({
      name: "area",
      title: "Área (m²)",
      type: "number",
      validation: (rule) => rule.positive(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "images",
      title: "Fotografias",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "location",
      media: "images.0",
    },
  },
});
