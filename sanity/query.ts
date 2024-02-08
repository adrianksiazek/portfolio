import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getWork() {
  return client.fetch(
    groq`*[_type == "work"]{
      _id,
      name,
      description,
      workImage {alt, "image": asset->url},
      skills
    }`,
  );
}
