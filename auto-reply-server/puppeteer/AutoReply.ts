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
	await page.goto(Config.targetUrl)
	/* 目前要手动点掉广告 */
	await waitingMillSeconds(20000)
	const element: ElementHandle = await page.waitForSelector('.already-unreply')
	const aa = await element.$$('.chat-item')
	/* 找到已回复的第一个人 */
	const item: ElementHandle = aa[0]
	await item.click()
	const textarea = await page.$('#replyTextarea')
	await textarea.type('你好')
	const sendBtn = await page.$('.send-btn')
	await sendBtn.click()
	
}

run()

// import './test'

