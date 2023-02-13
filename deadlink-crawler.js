const puppeteer = require('puppeteer')

function checkURL(url, string) {
	return url.startsWith(baseurl)
}
async function checkLinks(url) {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()
	await page.goto(url)

	const links = await page.evaluate(() => {
		const anchors = Array.from(document.querySelectorAll('a'))
		return anchors.map(anchor => anchor.href)
	})

	let deadLinks = []

	for (const link of links) {
		try {
			const response = await page.goto(link, { timeout: 5000 })
			if (!response.ok()) {
				deadLinks.push(link)
				continue
			}
			if (!checkURL(link)) {
				continue
			}
			const subLinks = await page.evaluate(() => {
				const anchors = Array.from(document.querySelectorAll('a'))
				return anchors.map(anchor => anchor.href)
			})

			for (const subLink of subLinks) {
				try {
					const response = await page.goto(subLink, { timeout: 5000 })
					if (!response.ok()) {
						deadLinks.push(subLink)
					}
					console.log('Origin: ' + link + ' ---> ' + subLink + ' : OK')
				} catch (error) {
					deadLinks.push(subLink)
				}
			}
		} catch (error) {
			deadLinks.push(link)
		}
	}

	console.log('Dead links: ', deadLinks)
	await browser.close()
}
const baseurl = 'http://www.localhost:8080'
checkLinks(baseurl)
