const puppeteer = require('puppeteer')

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

async function getVisual() {
	try {
		const URL = 'https://old.reddit.com/r/programming/'
		const browser = await puppeteer.launch()
		const page = await browser.newPage()

		await page.goto(URL)
        console.log('start')
        await delay(4000);
        console.log('waited 4 seconds')
		await page.screenshot({ path: 'screenshot3.png', fullPage: true })
		await page.pdf({ path: 'page3.pdf' })

		await browser.close()
	} catch (error) {
		console.error(error)
	}
}

getVisual()