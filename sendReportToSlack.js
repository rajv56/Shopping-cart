/* eslint-env node */
// Script to send a Playwright test report notification to Slack
import fetch from 'node-fetch';
import 'dotenv/config'
// // Below Slack webhook URL is fetched from env varibale to avoid git push issue and security voilations
const webhookUrl = process.env.SLACK_WEBHOOK_URL;

// Customize your message with a clickable report URL
const reportUrl = 'file:///Users/PlayWright_Training_Nov_2025/Shopping_Store_Application/PlayWright-report/index.html'; // Local file path
// If you host the report on a server, use the server URL instead
// const reportUrl = 'http://your-server.com/playwright-report/index.html';

const message = {
  text: `Playwright Test Report: <${reportUrl}|View Report>\nTest run completed. Please check the attached report.`,
};

fetch(webhookUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(message),
})
  .then(res => console.log('Slack notification sent:', res.status))
  .catch(err => console.error('Error sending to Slack:', err));
