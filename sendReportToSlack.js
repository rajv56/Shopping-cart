import 'dotenv/config';

const webhookUrl = process.env.SLACK_WEBHOOK_URL;

if (!webhookUrl) {
  console.error('❌ SLACK_WEBHOOK_URL is not defined');
  process.exit(1);
}

const reportUrl =
  'file:///Users/rajesh/Playwrgiht_Training_Nov_2025/Shopping_Store_Application/PlayWright-report/index.html';

const message = {
  text: `✅ Playwright Test Report\n<${reportUrl}|View Report>`
};

try {
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });

  console.log('Slack notification sent:', res.status);
} catch (err) {
  console.error('Error sending to Slack:', err.message);
}
