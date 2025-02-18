import { test, expect } from '@playwright/test';
import AxeBuilder from "@axe-core/playwright"; // 这里使用默认导入

test.describe('InaccessiblePage Accessibility Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173/inaccessible');
    });

    test('should fail accessibility checks due to violations', async ({ page }) => {
        const axe = new AxeBuilder({ page });
        const results = await axe.analyze();

        expect(results.violations.length).toBeGreaterThan(0);

        if (results.violations.length > 0) {
            results.violations.forEach((violation) => {
                console.error(`🚨 [A11y Error] Rule: ${violation.id}`);
                console.error(`📖 Description: ${violation.description}`);
                console.error(`🔗 Help URL: ${violation.helpUrl}`);
                console.error(`❌ Affected Elements:`);
                violation.nodes.forEach((node) => {
                    console.error(`- ${node.html}`);
                });
            });
        }
    });

    test("should detect inaccessible form elements", async ({ page }) => {
        const axe = new AxeBuilder({ page });
        const results = await axe.analyze();

        const formLabelViolations = results.violations.find(v => v.id === "label");
        expect(formLabelViolations).toBeDefined();
    });
});
