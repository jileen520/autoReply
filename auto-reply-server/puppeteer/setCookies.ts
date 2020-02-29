import { SetCookie } from 'puppeteer'

const JSESSIONID: SetCookie = {
	name: 'JSESSIONID',
	value: '956B10587878432BC9E3CA4640BE4BEB',
	domain: 'mms.pinduoduo.com',
	httpOnly: true
}

const PASS_ID: SetCookie = {
	name: 'PASS_ID',
	value: '1-cU/0MEHWRAY07LZZkHgKwpWtT6oUt2cV+cRRl4HUuV0mD5tll0ArSlQufB0RdxCzqotRAYV/pP52fF9ZkkiUbg_541916_686302',
	domain: 'mms.pinduoduo.com',
	httpOnly: true
}

const api_uid1: SetCookie = {
	name: 'api_uid',
	value: 'rBQRYF5X7rgTFDNWWpLYAg==',
	domain: '.pinduoduo.com',
}
const api_uid2: SetCookie = {
	name: 'api_uid',
	value: 'rBUU615X6Q6T0krx8vP9Ag==',
	domain: '.yangkeduo.com',
}
const nano_fp: SetCookie = {
	name: '_nano_fp',
	value: 'XpdJX5CxXp9YlpXoXC_oD8dB9Sq9Kz7JqH5SC1ep',
	domain: 'mms.pinduoduo.com',
}

export const cookies: SetCookie[] = [JSESSIONID, PASS_ID, api_uid1, api_uid2, nano_fp]
