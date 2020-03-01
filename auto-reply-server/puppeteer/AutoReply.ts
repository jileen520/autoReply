import { ElementHandle, Page } from 'puppeteer'
import { cookies } from './setCookies'
import Config from './Config'

const puppeteer = require('puppeteer')

async function waitingMillSeconds (ms: number) {
	return new Promise(a => {
		setTimeout(a, ms)
	})
}

async function run () {
	const browser = await puppeteer.launch({ headless: false })
	const page: Page = await browser.newPage()
	await page.setCookie(...cookies)
	await page.goto(Config.loginUrl)
	/* 目前要手动点掉广告 */
	await waitingMillSeconds(20000)
	const element: ElementHandle = await page.waitForSelector('.already-unreply')
	const aa = await element.$$('.chat-item')
	const fiveMineNoReply: ElementHandle = await page.waitForSelector('.five-minute');
	const bbb = await fiveMineNoReply.$$('.chat-item')
	const item: ElementHandle = bbb[0]
	await item.click()
	const historyBox: ElementHandle = await page.waitForSelector('.history-box')
	const textContent = await historyBox.$eval('.buyer-item:last-child',el=>el.textContent)
	if(textContent.trim() == '你好'){
		console.log(textContent)
		const textarea = await page.$('#replyTextarea')
		await textarea.type('你好啊')
		const sendBtn = await page.$('.send-btn')
		await sendBtn.click()
	}


	/* 找到已回复的第一个人 */
	/*const item: ElementHandle = aa[0]

	const textarea = await page.$('#replyTextarea')
	await textarea.type('你好')
	const sendBtn = await page.$('.send-btn')
	await sendBtn.click()*/
	
}

run()

// import './test'

