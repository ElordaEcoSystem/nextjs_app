// export async function fetchNav(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/navs?locale=${locale}`, //
//       options
//     );
//     const response = await res.json();
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// // /api/perform-blocks

// export async function fetchPerformBlocks(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/perform-items?populate=number&populate=icon&locale=${locale}`, //
//       options
//     );
//     const response = await res.json();
//     // console.log("response", response);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// //

// export async function fetchMainPage(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/main-pages?populate=button&populate=news_button&locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     // console.log("response", response);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function fetchFooter(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/footers?populate=item_social&locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     // console.log("response", response);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function fetchAbout(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/abouts?populate=director&populate=director.photo&locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     // console.log("response", response);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function fetchAntikor(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/antikors?populate=document&populate=document.item_document&locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     // console.log("response", response);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function fetchJobs(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/jobs?locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     // console.log("response", response);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function fetchBlog(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/blogs?populate=thumbnail&sort=date_of_publication:desc&locale=${locale}`,
//       // `http://0.0.0.0:1337/api/blogs?pagination[page]=${currentPage}&pagination[pageSize]=2&populate=thumbnail&sort=date_of_publication:desc&locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// //api/main-pages?locale=kk

// export async function fetchBlogById(locale, id) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/blogs/${id}?populate=thumbnail&populate=photo_content&populate=video_content&populate=youtube_link&sort=date_of_publication:desc&locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     console.log("fetchBlogId", locale);

//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function fetchProcurement(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/procurements?populate=document_2&populate=document_2.item_document&locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     // console.log("response", response);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// export async function fetchPTO(locale) {
//   const options = {
//     headers: {
//       Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//     },
//   };
//   try {
//     const res = await fetch(
//       `http://0.0.0.0:1337/api/ptos?locale=${locale}`,
//       options
//     );
//     const response = await res.json();
//     // console.log("response", response);
//     return response;
//   } catch (err) {
//     console.error(err);
//   }
// }

// const API_WEBSITE =
//   process.env.API_WEBSITE || "https://strapi.elordaecosystem.kz";
// const API_TOKEN = process.env.STRAPI_API_TOKEN;

// const options = {
//   headers: {
//     Authorization: `Bearer ${API_TOKEN}`,
//   },
// };

// // Функция для выполнения запросов
// async function fetchData(endpoint) {
//   try {
//     const res = await fetch(`${API_WEBSITE}/api/${endpoint}`, options);
//     if (!res.ok) throw new Error(`Ошибка запроса: ${res.statusText}`);
//     return await res.json();
//   } catch (err) {
//     console.error(`Ошибка при получении ${endpoint}:`, err);
//     return null;
//   }
// }

// // Функции для получения данных с API

// export async function fetchNav(locale) {
//   return fetchData(`navs?locale=${locale}`);
// }

// export async function fetchPerformBlocks(locale) {
//   return fetchData(
//     `perform-items?populate=number&populate=icon&locale=${locale}`
//   );
// }

// export async function fetchMainPage(locale) {
//   return fetchData(
//     `main-pages?populate=button&populate=news_button&locale=${locale}`
//   );
// }

// export async function fetchFooter(locale) {
//   return fetchData(`footers?populate=item_social&locale=${locale}`);
// }

// export async function fetchAbout(locale) {
//   return fetchData(
//     `abouts?populate=director&populate=director.photo&locale=${locale}`
//   );
// }

// export async function fetchAntikor(locale) {
//   return fetchData(
//     `antikors?populate=document&populate=document.item_document&locale=${locale}`
//   );
// }

// export async function fetchJobs(locale) {
//   return fetchData(`jobs?locale=${locale}`);
// }

// export async function fetchBlog(locale) {
//   return fetchData(
//     `blogs?populate=thumbnail&sort=date_of_publication:desc&locale=${locale}`
//   );
// }

// export async function fetchBlogById(locale, id) {
//   return fetchData(
//     `blogs/${id}?populate=thumbnail&populate=photo_content&populate=video_content&populate=youtube_link&sort=date_of_publication:desc&locale=${locale}`
//   );
// }

// export async function fetchProcurement(locale) {
//   return fetchData(
//     `procurements?populate=document_2&populate=document_2.item_document&locale=${locale}`
//   );
// }

// export async function fetchPTO(locale) {
//   return fetchData(`ptos?locale=${locale}`);
// }

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL || "https://strapi.elordaecosystem.kz";
const API_TOKEN = process.env.STRAPI_API_TOKEN;

const options = {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    cache: "no-store",
  },
};

// Функция для выполнения запросов
async function fetchData(endpoint) {
  try {
    const res = await fetch(`${apiUrl}/api/${endpoint}`, {
      ...options,
      cache: "no-store",
    });
    // &populate=*
    if (!res.ok) throw new Error(`Ошибка запроса: ${res.statusText}`);
    return await res.json();
  } catch (err) {
    console.error(`Ошибка при получении ${endpoint}:`, err);
    return null;
  }
}

// async function fetchData(endpoint) {
//   try {
//     const res = await fetch(`${apiUrl}/api/${endpoint}?populate=*`, options);

//     if (!res.ok) throw new Error(`Ошибка запроса: ${res.statusText}`);

//     return await res.json();
//   } catch (err) {
//     console.error(`Ошибка при получении ${endpoint}:`, err);
//     return null;
//   }
// }

// Функции для получения данных с API

export async function fetchNav(locale) {
  return fetchData(`navs?locale=${locale}&populate=*`);
}

export async function fetchPerformBlocks(locale) {
  return fetchData(
    `perform-items?populate=number&populate=icon&locale=${locale}`
  );
}

export async function fetchMainPage(locale) {
  return fetchData(
    `main-pages?populate=button&populate=news_button&locale=${locale}`
  );
}

export async function fetchFooter(locale) {
  return fetchData(`footers?locale=${locale}&populate=*`);
}

export async function fetchAbout(locale) {
  // /api/abouts?populate=director&populate=director.photo&locale=${locale}
  const response = await fetchData(
    `abouts?populate=director&populate=director.photo&locale=${locale}`
  );

  return response;
  // return `abouts?populate=director&populate=director.photo&locale=${locale}`;
}

export async function fetchDirectors(locale) {
  return fetchData(`director-lists?populate=photo&locale=${locale}`);
}

export async function fetchDirectorById(locale, id) {
  return fetchData(`director-lists/${id}?populate=photo&locale=${locale}`);
}

export async function fetchAntikor(locale) {
  return fetchData(
    `antikors?populate=document&populate=document.item_document&locale=${locale}`
  );
}

export async function fetchJobs(locale) {
  return fetchData(`jobs?locale=${locale}&populate=*`);
}

export async function fetchBlog(locale) {
  return fetchData(
    `blogs?sort=date_of_publication:desc&locale=${locale}&populate=*`
  );
}

export async function fetchBlogById(locale, id) {
  return fetchData(
    `blogs/${id}?sort=date_of_publication:desc&locale=${locale}&populate=*`
  );
}

export async function fetchProcurement(locale) {
  return fetchData(
    `procurements?populate=document_2&populate=document_2.item_document&locale=${locale}`
  );
}

export async function fetchPTO(locale) {
  return fetchData(`ptos?locale=${locale}&populate=*`);
}

export async function fetchPaidTable(locale) {
  return fetchData(`paid-services?populate=document&populate=document.item_document&locale=${locale}`);
}
