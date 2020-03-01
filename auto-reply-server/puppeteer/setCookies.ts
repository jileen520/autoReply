import { SetCookie } from 'puppeteer'

const JSESSIONID: SetCookie = {
	name: 'JSESSIONID',
	value: 'FBC543E6D684D6DE3BEB9473A8182C26',
	domain: 'mms.pinduoduo.com',
	httpOnly: true
}

const PASS_ID: SetCookie = {
	name: 'PASS_ID',
	value: '1-uk3nZuXjOLmOCMJ9j+an8PHV/ynFqcFT/FKeRnsoYfx+PG7FtGY4ZGajyDE/jMtHkF/dFT+6D2KiQ1kJSE799w_541916_686302',
	domain: 'mms.pinduoduo.com',
	httpOnly: true
}

const api_uid1: SetCookie = {
	name: 'api_uid',
	value: 'rBUoK13AxP4xkWez8eGUAg==',
	domain: '.pinduoduo.com',
}
const api_uid2: SetCookie = {
	name: 'api_uid',
	value: 'CiH9yV3AxP8E2AA5KsKeAg==',
	domain: '.yangkeduo.com',
}
const nano_fp: SetCookie = {
	name: '_nano_fp',
	value: 'Xpd8XqTYX0mYXpPJXC_XTiqboFICD2YUDT8HfGB3',
	domain: 'mms.pinduoduo.com',
}

export const cookies: SetCookie[] = [JSESSIONID, PASS_ID, api_uid1, api_uid2, nano_fp]
