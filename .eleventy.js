const juice = require("juice");
const meta = require("./src/_data/meta");
const now = String(Date.now());
const svgContent = require('./shortcodes/svgcontent.js');

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
  
  // Insert any .svg file with {% icon "github" %} saved in .assets/images/svg/
  eleventyConfig.addShortcode('svg', svgContent);
  
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
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
