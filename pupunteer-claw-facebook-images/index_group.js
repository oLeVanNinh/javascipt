const puppeteer = require('puppeteer');
const dowload = require('image-downloader');
const fs = require('fs');

const dir = './images-group';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

(async () => {
  const ID = {
    email: 'ninhle.9984@gmail.com',
    password: "https://www.facebook.com/recover/password/?u=100012093709468&n=bLNaAMyzp1&ars=openid_connect&fl=default_recover&lgdin_eml=1&sih=0"
  }
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://facebook.com');
  await page.type('#email', ID.email);
  await page.type('#pass', ID.password);
  await page.evaluate(() => {
    document.querySelectorAll("input[data-testid='royal_login_button']")[0].click();
  })

  await page.waitFor(1000)

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
