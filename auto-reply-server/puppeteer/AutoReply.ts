import {ElementHandle, Page, SetCookie} from 'puppeteer'
import Config from './Config'
import {cookies} from './setCookies'

const puppeteer = require('puppeteer')

async function waitingMillSeconds (ms: number) {
	return new Promise(a => {
		setTimeout(a, ms)
	})
}

async function run () {
	const browser = await puppeteer.launch({ headless: false ,ignoreDefaultArgs: ["--enable-automation"],defaultViewport:null})
	const page: Page = await browser.newPage()
	await page.evaluateOnNewDocument(() => {
		Object.defineProperty(navigator, 'webdriver', {
			get: () => undefined,
		});
	})
	await page.setCookie(...cookies)
	await page.goto(Config.loginUrl)

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
		await textarea.type('非常好')
		const sendBtn = await page.$('.send-btn')
		await sendBtn.click()
	}
/*	let cookie = await page.evaluate(() => document.cookie);
	let cookieList = cookie.split(';')
	let api_uid = cookieList[0].substring(8,cookieList[0].length);
	let _nano_fp = cookieList[1].substring(10,cookieList[1].length);*/

	/*console.log("cookie :" + api_uid);
	console.log("cookie :" + _nano_fp);
	let api_uid1: SetCookie = {
		name: 'api_uid',
		value: api_uid,
		domain: '.pinduoduo.com',
	}
	let nano_fp: SetCookie = {
		name: '_nano_fp',
		value: _nano_fp,
		domain: 'mms.pinduoduo.com',
	}
	let setCookies: SetCookie[] = [api_uid1, nano_fp]
	await page.setCookie(...setCookies)*/
	//let newCookie =
	/*await page.setCookie(...cookies)

	/!* 目前要手动点掉广告 *!/
	*/


	/* 找到已回复的第一个人 */
	/*const item: ElementHandle = aa[0]

	const textarea = await page.$('#replyTextarea')
	await textarea.type('你好')
	const sendBtn = await page.$('.send-btn')
	await sendBtn.click()*/
	
}

run()

// import './test'

