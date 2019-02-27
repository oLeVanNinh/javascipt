const puppeteer = require('puppeteer');
const dowload = require('image-downloader');

(async () => {
  let i = 0;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://instagram.com/linhmuaa');

  const srcs = await scrollPage(page);

  for (link in srcs) {
    await page.goto(srcs[i]);

    console.log(i);


    const image_url = await page.evaluate(() => {
      const element = document.querySelector('div.KL4Bh img');
      let url;
      let srcSet;
      if (element === null) {
        url = "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png"
      }
      else {
        srcSet = element.srcset;
        url = srcSet.split(',').slice(-1)[0].split(' ')[0];
      }
      return url;
    });
    console.log(image_url)


    await dowload.image({
      url: image_url,
      dest: './images'
    })

    i++;
  }

  await browser.close();
})();

async function scrollPage(page) {
  let previouseHeight = await page.evaluate(() => {
    return document.body.scrollHeight;
  });
  let nextHeight = await page.evaluate(() => {
    return document.body.scrollHeight+1;
  });
  let srcs = [];
  let src;

  while(previouseHeight < nextHeight) {
    await page.evaluate(() => {
      window.scrollBy(0, 10000);
    })
    await page.waitFor(1000)
    previouseHeight = nextHeight;
    nextHeight = await page.evaluate(() => {
      return document.body.scrollHeight;
    })
    src = await getSrc(page);
    srcs = srcs.concat(src);
    srcs = [...new Set(srcs)]
  }
  return srcs
}

async function getSrc(page) {
  const srcs = await page.evaluate(() => {
    const links = document.querySelectorAll(`div.v1Nh3 > a`)
    return [].map.call(links, a => a.href)
  })
  return srcs;
}
