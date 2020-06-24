# Chrome Extensions Reloader

It's a Livereload client which listen to the Livereload server and does reload all your enabled extensions on the "realod" command

## Getting started

1. Clone these sources of the extension

```bash
$ git clone https://github.com/baleyko/chrome-extensions-reloader.git
```

2. Switch on Chrome/Chromium the Developer mode at the <a href="chrome://extensions/" target="_blank">chrome://extensions/</a> page

3. Install this extension at the [chrome://extensions/](chrome://extensions/) page with choosing of the cloned repository directory by the 'Load unpacked' button

4. Install the Livereload server

```bash
$ yarn global add livereload
```

-or-

```bash
$ npm i -g livereload
```

5. Run the Livereload server in the extension directory which changes should trigger reloading

```bash
$ livereload
```

## Contribution

<a href="https://liberapay.com/baleiko/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>

## License

[MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](https://github.com/baleyko/chrome-extensions-reloader/blob/master/LICENSE.md) for more details.
