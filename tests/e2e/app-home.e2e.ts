import { expect, test } from "@playwright/test";

test("opens visual preview for SKU Barcode Guard Lite", async ({ page }) => {
  await page.goto("/preview");
  await expect(page.getByRole("heading", { name: "SKU Barcode Guard Lite" })).toBeVisible();
  await expect(page.getByText("Detect duplicate or missing SKUs and barcodes before inventory sync breaks.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Open workspace" })).toBeVisible();
});

test("preview is usable on a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/preview");
  await expect(page.getByText("Primary workflow")).toBeVisible();
});
