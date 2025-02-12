import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { tree } from "next/dist/build/templates/app-page";

const baseUrl = getStrapiURL();

async function fetchData(url: string) {
  const authToken = null; // we will implement this later getAuthToken() later
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    const response = await fetch(url, authToken ? headers : {});
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}

export async function getHomePageData() {
    const url = new URL("/api/home-page", baseUrl);
  
    url.search = qs.stringify({
      populate: {
        blocks: {
          on: {
            "layout.hero-section": {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                link: {
                  populate: true,
                },
              },
            },
            "layout.about": {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              
               
              },
            },
            "layout.features-section": {
              populate: {
                feature: {
                  populate: '*'
                }
                ,
              bgFeatureimage: {
                 fields: ["url", "id", "alternativeText"],
                }
              }
            },
            "layout.contact": {
              populate:true
            },
            "layout.projects": {
              populate: {
                fields:["title"],
                Projects: { 
                  populate: '*' 
                }
              }
            },
           "layout.nos-references": { 
            populate: {
              fields:["title"],
              reference: { 
                populate: '*' 
              }
            }
          },
            "layout.location": { 
              populate: {
                fields:["Location"],
              }
            }

          },
        },
      },
    });
  
    return await fetchData(url.href);
  }

  export async function getGlobalData() {
    const url = new URL("/api/global", baseUrl);
  
    url.search = qs.stringify({
        populate: {
            header:{
              populate:{
                "headerlinks":{
                    populate: '*'
                },

                "logo":{
                    populate: '*'
                },
              }
            },
            footer: {
              populate: {
                "socialLink": {
                  populate: '*'
                },
                "logoText": {
                  populate: '*'
                  
                },
                "bgFooter": {
                  populate: '*'
                },
              },
          },
      },
  });
  
    return await fetchData(url.href);
  }
  export async function getGlobalPageMetadata() {
    const url = new URL("/api/global", baseUrl);
  
    url.search = qs.stringify({
      fields: ["title", "description"],
    });
  
    return await fetchData(url.href);
  }
  
 