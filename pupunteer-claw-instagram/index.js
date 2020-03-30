const puppeteer = require('puppeteer');
const dowload = require('image-downloader');
const fs = require('fs');

const dir = './images';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/');
  await page.waitFor(2000);

  await page.click('input[name="username"]');
  await page.type('input[name="username"]', 'user');

  await page.click('input[name="password"]');
  await page.type('input[name="password"]', 'pass');

  await page.click('button[type="submit"]');

  await page.waitFor(3000);

  personal_url = await page.evaluate(() => {
    return document.querySelector('.Fifk5:last-child a').getAttribute('href');
  })

  await page.goto('https://www.instagram.com' + personal_url);
  await page.waitFor(2000);

  await page.click('.Y8-fY:last-child');

  await page.waitFor(1000);

  following_list = await page.evaluate(() => {
    let following_src_set = new Set();
    let list_followings = document.querySelectorAll('.PZuss li a');
    list_followings.forEach(user_link => {
      let url = user_link.getAttribute('href');
      if (!!url) {
        following_src_set.add(url);
      }
    })

    return [...following_src_set];
  });

  for (user of following_list) {
    let clawer = new ImagePageClawer(user, browser, fs);
    await clawer.excute();
  }

  await browser.close();
})();


class ImagePageClawer {
  constructor(url, page, fs) {
    this.url = 'https://www.instagram.com' + url;
    this.fs = fs;
    this.page = page;
    this.dir =  './images' + url.replace(/\.|\/$/g, '')
  }

  async excute() {
    await this.createStoreFoler();
    await this.openPage();
    let images = await this.scrollPage();
    await this.dowloadImage(images);
  }

  async createStoreFoler() {
    if (!this.fs.existsSync(this.dir)) {
      this.fs.mkdirSync(this.dir)
    }
  }

  async openPage() {
    await this.page.goto(this.url)
  }

  async scrollPage() {
    let previouseHeight = await this.page.evaluate(() => {
      return document.body.scrollHeight;
    });

    let nextHeight = await this.page.evaluate(() => {
      return document.body.scrollHeight + 1;
    });

    let srcs = [];
    let src;

    while(previouseHeight < nextHeight) {
      await this.page.evaluate(() => {
        window.scrollBy(0, 10000);
      })
      await this.page.waitFor(1500)
      previouseHeight = nextHeight;
      nextHeight = await this.page.evaluate(() => {
        return document.body.scrollHeight;
      })
      src = await this.getSrc();
      srcs = srcs.concat(src);
      srcs = [...new Set(srcs)]
    }
    return srcs
  }

  async getSrc() {
    const srcs = await this.page.evaluate(() => {
      const links = document.querySelectorAll(`div.v1Nh3 > a`)
      return [].map.call(links, a => a.href)
    })
    return srcs;
  }

  async dowloadImage(images) {
    console.log(images.length);
    for (let image of images) {
      await this.page.goto(image);
      const image_url = await this.page.evaluate(() => {
        const element = document.querySelector('div.KL4Bh img');
        let url, srcSet;

        if (element === null) {
          url = "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png";
        } else {
          srcSet = element.srcset;
          url = srcSet.split(',').slice(-1)[0].split(' ')[0];
        }

        return url;
      })


      await dowload.image({
        url: image_url,
        dest: this.dir
      })
    }
  }
}
