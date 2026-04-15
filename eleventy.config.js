import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "disjfa.github.io",
      subtitle: "Project website. All my projects bundled into one, here you can check out my projects and check what you want to use maybe. I like to use css, javascript, npm, bootstrap, symfony, 11ty and such.",
      base: "https://disjfa.github.io/"
    }
  });


  const ignoredCategoryTags = new Set([
    "all",
    "nav",
    "post",
    "posts",
    "project",
    "projects",
    "category-page",
  ]);

  const toTagList = (value) => {
    if (!value) {
      return [];
    }

    return Array.isArray(value) ? value : [value];
  };

  const slugifyCategory = (value) =>
    String(value)
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");

  // Order matters, put this at the top of your configuration file.
  // This is relative to your input directory!
  eleventyConfig.setInputDirectory("_site");
  eleventyConfig.setOutputDirectory("_dist");

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("icon");
  eleventyConfig.addPassthroughCopy("build");
  eleventyConfig.addLayoutAlias("default", "layouts/default.html");
  eleventyConfig.addLayoutAlias("sidebar", "layouts/sidebar.html");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    // Can use toLocaleString the same way we were before
    return dateObj.toLocaleString("nl-NL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addFilter("categorySlug", (value) => slugifyCategory(value));
  eleventyConfig.addGlobalData("ignoredCategoryTags", [...ignoredCategoryTags]);

  eleventyConfig.addFilter("redirectPermalink", (fromPath) => {
    const path = `/${String(fromPath || "").replace(/^\/+/, "")}`;

    if (path.endsWith(".html")) {
      return path;
    }

    return `${path.replace(/\/+$/, "")}/index.html`;
  });

  eleventyConfig.addCollection("posts", function (collectionsApi) {
    return collectionsApi.getFilteredByTag("post").sort(function (a, b) {
      return b.date - a.date; // sort by date - descending
    });
  });

  eleventyConfig.addCollection("categoryIndex", function (collectionsApi) {
    const counts = new Map();
    const categorizedContent = [
      ...collectionsApi.getFilteredByTag("post"),
      ...collectionsApi.getFilteredByTag("project"),
    ];

    for (const item of categorizedContent) {
      const categories = new Set([
        ...toTagList(item.data.categories),
        ...toTagList(item.data.tags),
      ]);

      for (const category of categories) {
        if (!category || ignoredCategoryTags.has(category)) {
          continue;
        }

        counts.set(category, (counts.get(category) || 0) + 1);
      }
    }

    return [...counts.entries()]
      .map(([key, count]) => ({
        key,
        title: key,
        slug: slugifyCategory(key),
        count,
      }))
      .sort((a, b) => a.title.localeCompare(b.title));
  });

  eleventyConfig.addCollection("projects", function (collectionsApi) {
    return collectionsApi.getFilteredByTag("project").sort((a, b) => {
      if (Boolean(a.data.featured) !== Boolean(b.data.featured)) {
        return a.data.featured ? -1 : 1;
      }

      return String(a.data.title || "").localeCompare(
        String(b.data.title || ""),
      );
    });
  });
}

export const config = {
  htmlTemplateEngine: "njk",
};
