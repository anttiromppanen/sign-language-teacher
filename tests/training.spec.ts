import { test, expect } from "@playwright/test";

test.describe("/training", () => {
  test("should show camera error when webcam is not detected", async ({
    page,
  }) => {
    await page
      .context()
      .grantPermissions([], { origin: "http://localhost:3000" });

    await page.goto("http://localhost:3000/training");
    await page.click("text=Start learning now!");
    await page.getByTestId("image-overlay-button").click();

    const cameraErrorElement = page.getByRole("heading", {
      name: "Error: No camera detected",
    });
    await expect(cameraErrorElement).toBeVisible(); // Ensure that the CameraError component appears
  });
});
