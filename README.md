Customer Journey Automation – Food Delivery App

This project automates the customer journey in a food delivery app using Playwright. It covers browsing items, placing orders, paying, and tracking delivery.

⸻

Table of Contents
	•	Overview
	•	Features
	•	Project Structure
	•	Installation
	•	Running Tests
	•	Contributing
	•	License

⸻

Overview

This project simulates the end-to-end customer experience in a food delivery app:

a. Logging in as a customer
b. Browsing stores and items
c. Adding items to the cart
d. Checking out and completing payment
e. Tracking the order delivery


It uses Playwright for browser automation and testing, following the Page Object Model for better maintainability and readability.

⸻

Features
	•	Login – Authenticate as a customer
	•	Browse Items – Navigate and select products from stores
	•	Add to Cart – Manage items in the shopping cart
	•	Checkout & Payment – Complete orders with payment
	•	Delivery Tracking – Simulate tracking the delivery process
	•	End-to-End Test – Full journey from login to tracking order after payment


  project-root/
├── README.md                 # Project overview and instructions
├── new-user-journey.spec.js  # End-to-end test for the customer journey
├── page-objects/             # Page Object Model files for Playwright
│   ├── AarinLocationPage.js
│   ├── ItemsPage.js
│   ├── StorePage.js
│   ├── cartPage.js
│   ├── checkoutPage.js
│   ├── loginPage.js
│   └── paymentPage.js
└── playwright.config.js      # Playwright configuration (browsers, baseURL, etc.)

Notes:
	•	Each file in page-objects/ represents a page in the customer journey.
	•	new-user-journey.spec.js runs the full flow from login to delivery tracking.
	•	playwright.config.js manages Playwright settings.


  Installation

Clone the repository: git clone https://github.com/your-username/project-name.git
cd project-name

2.  Install dependencies: npm install

3. Set up environment variables (if needed):cp .env.example .env



Running Tests
	•	Run all tests: npx playwright test

•	Run a specific test file: npx playwright test new-user-journey.spec.js

	•	Open Playwright Test Runner GUI: npx playwright test --ui

	•	Generate HTML Report (optional): npx playwright show-report



Contributing

Fork the repository
Create a new branch: git checkout -b feature/your-feature
Make your changes and commit: git commit -m "Add new feature"
Push to your branch: git push origin feature/your-feature
Open a Pull Request