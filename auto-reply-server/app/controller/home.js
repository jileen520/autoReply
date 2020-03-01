'use strict';

const Controller = require('egg').Controller;
const puppeteer = require('puppeteer');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, e11gg';
  }
  async run(){
    const browser = await puppeteer.launch({ headless: false })
    const page = await browser.newPage()
  }
}

async function waitingMillSeconds (ms) {
  return new Promise(a => {
    setTimeout(a, ms)
  })
}

module.exports = HomeController;
