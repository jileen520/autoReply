import { SetCookie } from 'puppeteer'

const JSESSIONID: SetCookie = {
	name: 'JSESSIONID',
	value: '71A354AF3AF57306869B44AF501390A9',
	domain: 'mms.pinduoduo.com',
	httpOnly: true
}

const PASS_ID: SetCookie = {
	name: 'PASS_ID',
	value: '1-T/HbNJRFZBZ5YaGcP73PCuiTclhpoU+KFdtjsK06Cel3U26xaUJEPWiDjl6uTRQ/fWC2yj1o/MNMqHL4gWLGaw_541916_686302',
	domain: 'mms.pinduoduo.com',
	httpOnly: true
}

const api_uid1: SetCookie = {
	name: 'api_uid',
	value: 'rBQRlV5bR1Y7d3V9tgycAg==',
	domain: '.pinduoduo.com',
}
const api_uid2: SetCookie = {
	name: 'api_uid',
	value: 'rBUUF15bR1aSDkreX2v+Ag==',
	domain: '.yangkeduo.com',
}
const nano_fp: SetCookie = {
	name: '_nano_fp',
	value: 'XpdJXq9YX0XYX5doXC_Spdta1lW~6LOyGxIbGdk1',
	domain: 'mms.pinduoduo.com',
}

export const cookies: SetCookie[] = [ JSESSIONID,PASS_ID,api_uid1,api_uid2, nano_fp]
