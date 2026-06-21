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
      name: "transaction",
      title: "Negócio",
      type: "string",
      options: {
        list: [
          { title: "Venda", value: "venda" },
          { title: "Arrendamento", value: "arrendamento" },
        ],
        layout: "radio",
      },
      initialValue: "venda",
    }),
    defineField({
      name: "priceOnRequest",
      title: "Preço sob consulta",
      type: "boolean",
      description: "Ativar para mostrar 'Preço sob consulta' em vez do valor",
      initialValue: false,
    }),
    defineField({
      name: "price",
      title: "Preço (€)",
      type: "number",
      hidden: ({ document }) => !!document?.priceOnRequest,
      validation: (rule) =>
        rule.custom((value, context) => {
          if (!context.document?.priceOnRequest && !value) return "Obrigatório quando o preço não está sob consulta";
          return true;
        }),
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
      name: "featured",
      title: "Destaque",
      type: "boolean",
      description: "Mostrar esta propriedade na secção de destaques da página inicial",
      initialValue: false,
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
