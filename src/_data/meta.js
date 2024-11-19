const meta = {
  url: process.env.URL || "http://localhost:8080",
  environment: process.env.ELEVENTY_ENV,

  // Required in certain regions, like USA
  senderAddress: "Leeds Register Office, Merrion House, Merrion Way, Leeds, LS2 8PD",

  // Company, website, or personal name
  senderName: "LEEDS.GOV.UK",

  senderWebsite: "https://www.leeds.gov.uk/births-deaths-and-marriages",
  heroTitle: "LEEDS.GOV.UK",
  heroSubtitle: "An automated email from Leeds City Council",
  
  // absolute, full URL
  // logoUrl: "https://placehold.it/250x80?text=Logo",

  // in pixels, but no unit
  logoHeight: "80",

  logoAlt: "Leeds.gov.uk",

  // These values required for the call to action button (and all types of buttons) when recipients use Microsoft based emails
  ctaButtonHeight: "40px",
  ctaButtonWidth: "250px",
  ctaButtonColor: "#2e7d32",  // LCC green

  // Contact us
  email: "register.headoffice@leeds.gov.uk",
  phone: "+441132224408",
  ariaPhone: "phone number zero one one three two two two four four zero eight",
};

export default meta;