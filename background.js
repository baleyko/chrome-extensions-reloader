const DEFAULT_DELAY = 100;
const MAX_DELAY = 5000;
const URI = 'ws://localhost:35729/livereload';
let delay = DEFAULT_DELAY;
let timer = null;
let socket = null;

const connect = () => setTimeout(establishСonnection, delay);

const establishСonnection = () => {
  socket = new WebSocket(URI);
  socket.addEventListener('message', onMessage, false);
  socket.addEventListener('open', onOpen, false);
  socket.addEventListener('close', onClose, false);
  socket.addEventListener('error', onError, false);
};

const onMessage = ({ data }) => {
  try {
    const { command } = JSON.parse(data);

    if ('reload' === command) {
      realod();
    }
  } catch (err) {
    onError(err);
  }
};

const onOpen = () => {
  clearTimeout(timer);
  delay = DEFAULT_DELAY;
};
const onClose = () => {
  socket = null;
  connect();
};
const onError = () => {
  delay = Math.min(MAX_DELAY, delay * 2);
  socket.close();
};
const realod = () => {
  chrome.management.getAll(extensions =>
    extensions
      .filter(ext => ext.installType === chrome.management.ExtensionInstallType.DEVELOPMENT)
      .filter(ext => ext.enabled === true)
      .filter(ext => ext.id !== chrome.runtime.id)
      .map(ext =>
        chrome.management.setEnabled(ext.id, false, () =>
          chrome.management.setEnabled(
            ext.id,
            true,
            () =>
              ext.type === chrome.management.ExtensionType.PACKAGED_APP && chrome.management.launchApp(ext.id)
          )
        )
      )
  );
};

timer = connect();
