export async function fetchNav(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/navs?locale=${locale}`, //
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
    // console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

//

export async function fetchMainPage(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/main-pages?populate=button&populate=news_button&locale=${locale}`,
      options
    );
    const response = await res.json();
    // console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchFooter(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/footers?populate=item_social&locale=${locale}`,
      options
    );
    const response = await res.json();
    // console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchAbout(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/abouts?populate=director&populate=director.photo&locale=${locale}`,
      options
    );
    const response = await res.json();
    // console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchAntikor(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/antikors?populate=document&populate=document.item_document&locale=${locale}`,
      options
    );
    const response = await res.json();
    // console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchJobs(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/jobs?locale=${locale}`,
      options
    );
    const response = await res.json();
    // console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchBlog(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/blogs?populate=thumbnail&sort=date_of_publication:desc&locale=${locale}`,
      options
    );
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

//api/main-pages?locale=kk

export async function fetchBlogById(locale, id) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/blogs/${id}?populate=thumbnail&sort=date_of_publication:desc&locale=${locale}`,
      options
    );
    const response = await res.json();
    console.log("fetchBlogId", locale);

    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchProcurement(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/procurements?populate=document_2&populate=document_2.item_document&locale=${locale}`,
      options
    );
    const response = await res.json();
    // console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchPTO(locale) {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };
  try {
    const res = await fetch(
      `http://0.0.0.0:1337/api/ptos?locale=${locale}`,
      options
    );
    const response = await res.json();
    // console.log("response", response);
    return response;
  } catch (err) {
    console.error(err);
  }
}
