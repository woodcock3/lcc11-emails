const juice = require("juice");
const meta = require("./src/_data/meta");
const now = String(Date.now());

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");

  eleventyConfig.setWatchThrottleWaitTime(100);

  /* SHORTCODES */
  // Add cache busting with {% version %} time string
  eleventyConfig.addShortcode('version', function () {
    return now
  });
  
  // Get current Year for text in footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Insert spacer for emails
  eleventyConfig.addShortcode(
    "emailSpacer",
    (size = "") =>
      `<tr><td class="spacer${size ? `-${size}` : ""}">&#32;</td></tr>`
  );
  
  /* FILTERS */
  eleventyConfig.addNunjucksAsyncFilter("emailHtml", (raw, callback) => {
    if (meta.environment === "prod") {
      callback(null, juice(raw));
    } else {
      callback(null, raw);
    }
  });

  return {
    templateFormats: ['html', 'njk', 'liquid', 'md', '11ty.js'],
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
