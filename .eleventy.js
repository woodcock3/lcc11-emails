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
  
  // Get current Year for text in footer using {% year %}
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // Create a button that will accept variables for href and the btn-text value using {% var-btn "https://www.google.co.uk/" "Google" %}
  eleventyConfig.addShortcode("var-btn", function(btnHref, btnText) {
    return `<div>
    <!--[if mso]>
      <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${btnHref}" style="v-text-anchor:middle; height: meta.ctaButtonHeight; width: meta.ctaButtonWidth" class="button-mso" arcsize="10%" stroke="f" fillcolor="meta.ctaButtonColor">
      <w:anchorlock/>
        <center>
          <![endif]-->
            <a class="button" href="${btnHref}">${btnText}</a>
          <!--[if mso]>
        </center>
      </v:roundrect>
    <![endif]-->
    </div>
    <br>`;
  });
  
  // Insert spacer for emails
  eleventyConfig.addShortcode(
    "emailSpacer",
    (size = "") =>
      `<tr><td class="spacer${size ? `-${size}` : ""}">&#32;</td></tr>`
  );
  
  /* PRODUCTION OR DEV */
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
