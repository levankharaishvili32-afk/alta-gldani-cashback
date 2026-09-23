/**
 * Campaign details, in one place.
 *
 * The date forms are spelled out rather than derived, because Georgian
 * inflects: "27 ოქტომბერი" becomes "27 ოქტომბრის" before "ჩათვლით", and
 * gluing a suffix on with a hyphen is simply wrong. Change a date and change
 * every line that carries it.
 */
export const CAMPAIGN_DATES = "25–27 ოქტომბერი";
export const CAMPAIGN_DATES_ON = "25–27 ოქტომბერს";
export const CAMPAIGN_END_DATE = "27 ოქტომბერი";
export const CAMPAIGN_END_INCLUSIVE = "27 ოქტომბრის ჩათვლით";

export const BRANCH = {
  name: "ისთ ფოინთის ფილიალი",
  /** the same, in the locative — "…ფილიალში" — for running text */
  nameIn: "ისთ ფოინთის ფილიალში",
  city: "თბილისი",
  address: "ქ. თბილისი, თვალჭრელიძის ქ. 2, სავაჭრო ცენტრი „ისთ ფოინთი“",
  hours: "ყოველდღე: 10:00 – 22:00",
  phone: "+995 32 238 00 38",
  /** `tel:` needs the number without spaces. */
  phoneHref: "tel:+995322380038",
  email: "info@alta.ge",
  /**
   * Google Maps, via the documented Maps URLs API (`/maps/search/?api=1`):
   * a stable contract that opens the Maps app directly on phones.
   */
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Alta, თვალჭრელიძის ქ. 2, East Point, Tbilisi"),
};
