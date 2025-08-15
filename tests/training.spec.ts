import { expect, test } from "@playwright/test";

test.describe("/training", () => {
	test("should show correct overlay when entered", async ({ page }) => {
		await page
			.context()
			.grantPermissions([], { origin: "http://localhost:3000" });

		await page.goto("http://localhost:3000/training");
		await expect(
			page.getByRole("heading", { name: "Before we get started" }),
		).toBeVisible();
	});
});
