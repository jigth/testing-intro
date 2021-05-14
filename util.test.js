const { createElement, generateText, validateInput, checkAndGenerateText } = require('./util')
const puppeteer = require('puppeteer')
const PROJECT_URL = "file:///path/to/this-project's/index.html"

// Unit Tests
test('generateText should return a string in the correct format', () => {	
	expect( generateText('Pedro', 7) ).toBe("Pedro (7 years old)")
	expect( generateText('', NaN) ).toBe(" (NaN years old)")
	expect( generateText() ).toBe("undefined (undefined years old)")
})

// Integration Tests
test('checkAndGenerateText should return the correct output text or false', () => {
	failedOutputText = checkAndGenerateText('     ', 123)
	expect(failedOutputText).toBe(false)

	successOutputText = checkAndGenerateText('Bruce Lee', 29)
	expect(successOutputText).toBe(generateText('Bruce Lee', 29))
})

// E2E Tests (A.K.A User Interface Tests)
it('should fill the form correctly', async () => {
	const browser = await puppeteer.launch({ headless: false, slowMo: 20 })
	// const page = await browser.newPage()  // Creates a new page
	const page = (await browser.pages())[0];  // Uses the page opened by default by the browser
	await page.goto(PROJECT_URL)
	
	await page.click('#name')
	await page.type('#name', 'Daniel Ochoa')
	await page.click('#age')
	await page.type('#age', '22')
	await page.click('#btnAddUser')
	
	const newItemText = await page.$eval('.user-item', item => item.textContent)
	expect(newItemText).toBe('Daniel Ochoa (22 years old)')
	
	await browser.close()
}, 10000)