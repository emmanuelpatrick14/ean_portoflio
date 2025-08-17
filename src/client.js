// import {createClient} from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

// export const client = createClient({
//   projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
//   dataset: 'production',
//   token:process.env.API_WRITE_TOKEN,
//   useCdn: false, // set to `false` to bypass the edge cache
//   apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
// })

// const builder = imageUrlBuilder(client)

// export const urlFor = (source)=> builder.image(source)


// const data = await client.fetch(`count(*)`)
// console.log(`Number of documents: ${data}`)



import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.API_WRITE_TOKEN,
  useCdn: false,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// Safe async call
const logDocumentCount = async () => {
  try {
    const data = await client.fetch(`count(*)`);
    console.log(`Number of documents: ${data}`);
  } catch (err) {
    console.error("Error fetching count:", err.message);
  }
};

logDocumentCount();
