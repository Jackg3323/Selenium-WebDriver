# Selenium WebDriver with Firefox

Recommend that you use `npm` and FireFox for this one. You should install FireFox before trying this. Preferable the Developer Edition.

Alternatively, you could:

1. Uninstall `geckodriver` - `npm uninstall geckodriver`.
2. Install `chromedriver` - `npm install chromedriver`.
3. Then, in the code change from `"Firefox"` to `"Chrome"`.

You should also potentially remove any global installation of any previous drivers. For instance, run `npm uninstall -g chromedriver`. Or, `pnpm uninstall -g chromedriver`. If you are not sure about this, run them both. It's **probably** ok if you see some errors here. It might mean that you didn't have it installed, so there's an error trying to uninstall it. The global command should be run from your `~` or home directory. Or, just run it from this directory.

Otherwise, after `npm i` for this project, try running `node app/index.js` to see if it will fire up the browser window, navigate to Google and then close itself.
