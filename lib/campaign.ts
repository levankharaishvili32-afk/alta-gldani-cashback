/**
 * Campaign details, in one place.
 *
 * The date forms are spelled out rather than derived, because Georgian
 * inflects: "27 სექტემბერი" becomes "27 სექტემბრის" before "ჩათვლით", and
 * gluing a suffix on with a hyphen is simply wrong. Change a date and change
 * every line that carries it.
 */
export const CAMPAIGN_DATES = "25–27 სექტემბერი";
export const CAMPAIGN_DATES_ON = "25–27 სექტემბერს";
export const CAMPAIGN_END_DATE = "27 სექტემბერი";
export const CAMPAIGN_END_INCLUSIVE = "27 სექტემბრის ჩათვლით";

export const BRANCH = {
  name: "East Point-ის ფილიალი",
  /** the same, in the locative — "…ფილიალში" — for running text */
  nameIn: "East Point-ის ფილიალში",
  city: "თბილისი",
  address: "ქ. თბილისი, თვალჭრელიძის ქ. 2, სავაჭრო ცენტრი „East Point“",
  /** bare time range; the header pill and the footer each add their own label */
  hours: "10:00 – 22:00",
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
