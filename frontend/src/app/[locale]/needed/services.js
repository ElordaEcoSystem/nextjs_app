export async function fetchPosts(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/posts?populate=thumbnail&sort=date_of_publication:desc&locale=${locale}`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

//api/main-pages?locale=kk

export async function fetchBlogOne(locale, id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/posts/${id}?populate=thumbnail&sort=date_of_publication:desc&locale=${locale}`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchNav(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/nav-items?locale=${locale}`, //
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

// /api/perform-blocks

export async function fetchPerformBlocks(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/perform-blocks?populate=Year&populate=icon&locale=${locale}`, //
      options
    );
    const response = await res.json();
    console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}
