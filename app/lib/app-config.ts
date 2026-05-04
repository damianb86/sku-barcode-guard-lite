export const APP_CONFIG = {
  name: "SKU Barcode Guard Lite",
  shortName: "SKU Guard",
  slug: "sku-barcode-guard-lite",
  tagline: "Detect duplicate or missing SKUs and barcodes before inventory sync breaks.",
  problem: "Shopify does not fully enforce unique merchant identifiers across every operational workflow.",
  persona: "Ops lead managing large catalogs, ERP/POS syncs or frequent product imports.",
  value: "A bulk audit and warning surface for duplicate, missing and malformed SKUs/barcodes.",
  primaryFlow: "Run a catalog scan, review duplicate groups, export or fix manually, and monitor updates later.",
  color: "#15803d",
  mainObject: "Identifier issue",
  workspaceLabel: "Identifier audit",
  settingsLabel: "Guardrails",
  requiredScopes: ["read_products"],
  doNotRequestScopes: ["write_products","read_orders","read_customers"],
  integrations: [
  "Admin GraphQL productVariants reads for sku and barcode fields.",
  "Product update webhook later keeps identifier index fresh.",
  "CSV preflight upload can run locally without Shopify writes."
],
  mvpFeatures: [
  "Dashboard for duplicates, blanks and malformed identifiers.",
  "Audit table grouped by SKU/barcode issue type.",
  "Settings for required fields and allowed patterns.",
  "Fixtures for duplicate, missing and valid product variants."
],
  outOfScope: [
  "Automatic SKU generation.",
  "Writing product identifiers.",
  "ERP integration."
],
  futureFeatures: [
  "Webhook-maintained identifier index.",
  "CSV import preflight checker.",
  "Alerts on duplicate creation."
],
  screens: [
  "Dashboard: identifier health and issue counts.",
  "Identifier audit: duplicate/missing table.",
  "Guardrails: SKU and barcode pattern settings.",
  "Help/QA: import and webhook test plan."
],
  sampleRows: [
  [
    "SKU-1001",
    "Duplicate SKU across 3 variants",
    "High",
    "Review group"
  ],
  [
    "Barcode blank",
    "12 variants missing barcode",
    "Medium",
    "Export list"
  ],
  [
    "sku lower-case",
    "Pattern violation",
    "Low",
    "Normalize"
  ]
],
  metrics: [
  [
    "Variants scanned",
    "1,204"
  ],
  [
    "Duplicates",
    "22"
  ],
  [
    "Missing IDs",
    "47"
  ]
],
  settingsFields: {
  "workflowName": "Monthly identifier audit",
  "thresholdLabel": "Max duplicate groups",
  "thresholdDefault": "0",
  "ownerEmail": "ops@example.com"
},
  risks: [
  "SKU uniqueness expectations vary by merchant and ERP.",
  "Large catalogs require cursor pagination and incremental indexing."
],
} as const;

export type AppConfig = typeof APP_CONFIG;

export function requiredScopesText() {
  return APP_CONFIG.requiredScopes.join(",");
}
