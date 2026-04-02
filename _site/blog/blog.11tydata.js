export default {
  eleventyComputed: {
    // Support legacy dashed front matter keys from Jekyll posts.
    unsplashUrl: (data) => data.unsplashUrl || data["unsplash-url"] || null,
    unsplashUser: (data) => data.unsplashUser || data["unsplash-user"] || null,
  },
};

