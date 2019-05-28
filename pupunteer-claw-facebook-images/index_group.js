const puppeteer = require('puppeteer');
const dowload = require('image-downloader');
const fs = require('fs');

const dir = './images-group';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://facebook.com');
  await page.evaluate(() => {
    document.getElementById('email').value =  "ninhle.9984@gmail.com"
    document.getElementById('pass').value =  'https://www.facebook.com/recover/initiate/?ldata=AWfcCzUySS3ujpJOzZp3IjqP3vwBaaYHWDMT1Zjmx7XIy29D3sX_XKJm6iMjtlVTfDKoRUGbYswycLLvD3wPyYmaYLKA383l3pDlfcgBhewnHX-mQ-Nr6Li8GXFIzvCWdHsegj0wg5_RPNNKDd8Pl8ayfWkD3mZ3InwxFI8Aha3ioOwYwrWm-xGV7H13Frw-mM-HyISRYJ721RuwCtNh2rZEAO7dF81lAaddWmWroKPSXWAqBYLT3H1L1FONzq2Hz24'
    document.querySelectorAll("input[data-testid='royal_login_button']")[0].click();
  })

  await page.waitFor(2000)

  await page.goto("https://www.facebook.com/groups/gaixinhchonloc/photos/")



  const srcs = await scrollPage(page);

  await page.screenshot({path: "example.png"})

  for (var i in srcs) {
    let a = srcs[i];
    let random = (Math.floor(Math.random()*100000)).toString();
    console.log(`Link is: ${a}`);
    await page.goto(a);
    await page.waitFor(1500);


    const image_url = await page.evaluate(() => {
      const element = document.querySelector('img.spotlight');
      let url;
      if (element === null) {
        url = "https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png"
      }
      else {
        url = element.src;
      }
      return url;
    });
    console.log(image_url)


    await dowload.image({
      url: image_url,
      dest: dir
    })
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
  let srcs = await page.evaluate(() => {
    const links = document.querySelectorAll('tbody > tr > td > div.itemsPlutoniumRedesign > a');
    return [].map.call(links, a => a.href)
  })
  srcs = await srcs.filter(a => !a.match("user_video_tab"));
  return srcs;
}
