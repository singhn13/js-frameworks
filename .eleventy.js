module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
