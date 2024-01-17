import Adb from '@u4/adbkit';
import express, { response } from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const client = Adb.createClient()
const device = client.getDevice("0123456789ABCDEF");

const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';
app.use(base, express.static('dist/client/'));
app.use('/screen', async (req) => {
  var screen = await device.screencap();
  console.log(screen);
  return response(screen);
})
app.use(ssrHandler);

app.listen(8080);