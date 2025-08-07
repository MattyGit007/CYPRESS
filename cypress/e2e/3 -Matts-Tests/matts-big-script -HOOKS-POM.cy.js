import "cypress-axe";
import dysonHomepage from "../../support/page-objects/dyson-homepage";
import nbsHomepage from "../../support/page-objects/nbs-homepage";

describe("Matts Dyson Homepage Regression Tests", () => {
  beforeEach(() => {
    nbsHomepage.visitNBSHomepage();
    nbsHomepage.acceptCookies();
    nbsHomepage.searchFor("Dyson");
    nbsHomepage.selectDysonResult();
  });

  // 1 - Verifies that the URL and h1 header text are correct for Dyson homepage
  it("1- verify Dyson homepage url & h1 header text is as expected", () => {
    dysonHomepage.verifyDysonPage();
  });

  // 2- Verifies the contact number link is visible, has correct text, and correct tel: protocol
  it("2- verify telephone number is as expected", () => {
    dysonHomepage.verifyContactNumber();
  });

  // 3- I verify the title on the page is as expected
  it("3- verify title is as expected", () => {
    dysonHomepage.verifyTitle();
  });

  // 4- I verify the href attribute of the Source logo is as expected
  it("4- verify the href attribute of the source logo is as expected", () => {
    dysonHomepage.verifySourceLogoHref();
  });

  // 5- I verify the external manufacturer link attribute contains the correct url
  it("5- verify the external manufacturer link attribute contains the correct url", () => {
    dysonHomepage.verifyWebsiteLink();
  });

  // 6- I verify the contact manufacturer button shows the correct text
  it("6- verify the contact manufacturer button shows the correct text", () => {
    dysonHomepage.verifyContactManufacturerButton();
  });

  // 7- I run accessibility checks on the manufacturer homepage using AXE plugin and report results to console
  it("7- verify accessibility on manufacturer homepage using Axe plugin", () => {
    dysonHomepage.verifyAccessibilityChecks();
  });

  // 8- I perform an api test and verify the response and content is as expected
  it("8- Verify API content and UI display", () => {
    dysonHomepage.verifyApiResponse();
  });

  // 9- I verify the Dyson navigation bar has the correct tabs and expected links
  it("9- verify the Dyson navigation bar has the correct tabs and expected links", () => {
    dysonHomepage.verifyDysonNavigationBar();
  });
});
