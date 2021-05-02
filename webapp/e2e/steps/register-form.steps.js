const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/register-form.feature');

defineFeature(feature, test => {
  
  beforeEach(async () => {
    await global.page.goto('https://radarines1bwebapp.herokuapp.com/')
  })

  test('The user does not have a solid pod and will have a new pos', ({given,when,then}) => {
    
    let email;
    let username;

    given('An unregistered user', () => {
      searchname="Irene"
      
    });

    when('Conseguir nuevo pod  ', async () => {
      await page.click("a[href='https://solidcommunity.net/register']");
     
      const newPagePromise = getNewPageWhenLoaded();
      podSolidPage = await newPagePromise;
    });

    then('A welcome message should be shown in the screen', async () => {
      const pages = (await browser.pages());
      await expect(pages.length).toBe(3);
      await expect(await podSolidPage.url()).toBe("https://solidcommunity.net/register");
      await expect(await pages[2].url()).toBe("https://solidcommunity.net/register");
      await pages[2].close();
    });
  });

  test('The user will know about solid', ({given,when,then}) => {
    
    let email;
    let username;

    given('An unregistered user', () => {
      searchname="Irene"
      
    });

    when('Conseguir nuevo pod  ', async () => {
      await page.click("a[href='https://solid.mit.edu/']");
     
      const newPagePromise = getNewPageWhenLoaded();
      podSolidPage = await newPagePromise;
    });

    then('A welcome message should be shown in the screen', async () => {
      const pages = (await browser.pages());
      await expect(pages.length).toBe(3);
      await expect(await podSolidPage.url()).toBe("https://solid.mit.edu/");
      await expect(await pages[2].url()).toBe("https://solid.mit.edu/");
      await pages[2].close();
    });
  });
  

  test('The user is already registered in the site', ({ given, when, then }) => {
    given('An already registered user', () => {
      placeholder="https://uo225211.solidcommunity.net/"
    });

    when('I fill the data in the form and press submit', async () => {
      await expect(page).toClick('button', { text: 'Iniciar Sesión' })
      const [popup] = await Promise.all([
        new Promise<Page>((x) => page.once('popup', x)),
        page.evaluate(() => window.open('about:blank')),
      ]);
      await expect(pop).toFillForm("form[class='custom-idp']", {
        placeholder: placeholder,
      });
      await expect(page).toClick('button', { text: 'Go' })
    });

    then('An error message should be shown in the screen', async () => {
    });
    
  });
});

// FROM https://github.com/puppeteer/puppeteer/issues/3718 and radarin_en2b
getNewPageWhenLoaded =  async () => {
  return new Promise(x =>
      browser.on('targetcreated', async target => {
          if (target.type() === 'page') {
              const newPage = await target.page();
              const newPagePromise = new Promise(y =>
                  newPage.once('domcontentloaded', () => y(newPage))
              );
              const isPageLoaded = await newPage.evaluate(
                  () => document.readyState
              );
              return isPageLoaded.match('complete|interactive')
                  ? x(newPage)
                  : x(newPagePromise);
          }
      })
  );
};