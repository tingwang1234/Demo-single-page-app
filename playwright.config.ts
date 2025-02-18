import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/e2e', // 测试文件目录
    use: {
        baseURL: 'http://localhost:5173/', // 你的 React 应用 URL
        headless: true, // 无头模式运行
        screenshot: 'only-on-failure', // 仅在失败时截图
        video: 'retain-on-failure', // 仅在失败时保存视频
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]], // 生成 HTML 报告
});
