import { client } from 'nightwatch-cucumber';
import { defineSupportCode } from 'cucumber';

defineSupportCode(({ Given, Then }) => {
  Given(/^I open the home page$/, () => {
    return client.url('http://localhost:8100')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('#app', 1000);
  });

  Then(/^the title is "React Boilerplate"$/, () => {
    return client.assert.title('React Boilerplate');
  });

  Then(/^the Value has 1$/, () => {
    return client.assert.containsText('#value', 'Value: 1');
  });

  Then(/^there is an increment button$/, () => {
    return (
      client.assert.elementPresent('#increment_button')
      &&
      client.assert.containsText('#increment_button', 'Increment')
    );
  });

  Then(/^there is an decrement button$/, () => {
    return (
      client.assert.elementPresent('#decrement_button')
      &&
      client.assert.containsText('#decrement_button', 'Decrement')
    );
  });
});
