const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/register-form.feature');

defineFeature(feature, test => {
  
  beforeEach(async () => {
    //await page.setDefaultNavigationTimeout(0);
    await global.page.goto('http://localhost:3000/'
  , {
    waitUntil: 'load',
        // Remove the timeout
        timeout: 60000
    }
    );
  })

  test('The user does not have a solid pod and will have a new pos', ({given,when,then}) => {
    
    let podSolidPage;

    given( 'A user without a pod', () => {
      
      
    });

    when('Conseguir nuevo pod', async () => {
      await page.click("a[href='https://solidcommunity.net/register']");     
      //const newPagePromise = getNewPageWhenLoaded();
      //podSolidPage = await newPagePromise;
    });

    then('I should be redirected to https://solidcommunity.net/register', async () => {
      /**const pages = (await browser.pages());
      await expect(pages.length).toBe(3);
      await expect(await podSolidPage.url()).toBe("https://solidcommunity.net/register");
      await expect(await pages[2].url()).toBe("https://solidcommunity.net/register");
      await pages[2].close();
      browser.close();
      */
      await expect(await page.url()).toBe("https://solidcommunity.net/register");
    });
  });

  test('The user will know about solid', ({given,when,then}) => {
    
    let podSolidPage;

    given('An unregistered user', () => {      
    });

    when('Conseguir nuevo pod', async () => {
      await page.click("a[href='https://solid.mit.edu/']");     
    });

    then('I should be redirected to the link', async () => {
      await expect(await page.url()).toBe("https://solid.mit.edu/");
  });
  

  test('The user is already registered in the site', ({ given, when, then }) => {

    let webId;

    given('An already registered user', () => {
      webId="https://uo225211.solidcommunity.net/"
    });

    when('Boton iniciarsesión', async () => {
      //await page.goto("https://radarines1bwebapp.herokuapp.com/#/friends");
      await page.goto("http://localhost:3000/#/friends");
    });

    then('An error message should be shown in the screen', async () => {
      await expect(page).toMatch("Radarin");
      await expect(page).toMatch("Inicio");
      await expect(page).toMatch("Mapa");
      await expect(page).toMatch("Amigos");
      await expect(page).toMatch("Perfil");
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

