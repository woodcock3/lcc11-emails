module.exports = {
  url: process.env.URL || "http://localhost:8080",
  environment: process.env.ELEVENTY_ENV,

  // Required in certain regions, like USA
  senderAddress: "Leeds Register Office, Merrion House, Merrion Way, Leeds, LS2 8PD",

  // Company, website, or personal name
  senderName: "Leeds Register Office",

  senderWebsite: "https://www.leeds.gov.uk/births-deaths-and-marriages",

  // absolute, full URL
  logoUrl: "https://placehold.it/250x80?text=Logo",

  // in pixels, but no unit
  logoHeight: "80",

  logoAlt: "Leeds.gov.uk",

  // These values required for full
  ctaButtonHeight: "40px",
  ctaButtonWidth: "200px",
  ctaButtonColor: "#c54dbd",

  // Required link to method of unsubscribing from non-transactional emails
  unsubscribe: "#",
};
