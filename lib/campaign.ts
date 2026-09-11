/**
 * Campaign details, in one place.
 *
 * The date forms are spelled out rather than derived, because Georgian
 * inflects: "13 სექტემბერი" becomes "13 სექტემბრის" before "ჩათვლით", and
 * gluing a suffix on with a hyphen is simply wrong. Change a date and change
 * every line that carries it.
 */
export const CAMPAIGN_DATES = "12–13 სექტემბერი";
export const CAMPAIGN_DATES_ON = "12–13 სექტემბერს";
export const CAMPAIGN_END_DATE = "13 სექტემბერი";
export const CAMPAIGN_END_INCLUSIVE = "13 სექტემბრის ჩათვლით";

export const BRANCH = {
  name: "გლდანის ფილიალი",
  city: "თბილისი",
  address: "ქ. თბილისი, ხიზაბავრის ქ. 1, სავაჭრო ცენტრი „სითი მოლი“",
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
    encodeURIComponent("Alta, ხიზაბავრის ქ. 1, City Mall Gldani, Tbilisi"),
};
