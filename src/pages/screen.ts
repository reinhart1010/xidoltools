import Adb from '@devicefarmer/adbkit';
import { type APIRoute } from "astro";
const client = Adb.createClient();
const device = client.getDevice("0123456789ABCDEF");

// Setup
device.shell("settings put system screen_off_timeout 2147483647")

export const GET: APIRoute = async ({ params, request }) => {
  const screen = await device.screencap();
  return new Response(screen, {headers: {"Content-Type": "image/png"}});
}

export const PUT: APIRoute = async ({ params, request }) => {
  const form = await request.formData();
  if (form.get("action") == "launch") {
    await device.shell(`am start ${form.get("activity")}`);
  } else if (form.get("action") == "key") {
    await device.shell(`input keyevent ${form.get("key")}`);
  } else if (form.get("action") == "swipe") {
    await device.shell(`input swipe ${form.get("from_x")} ${form.get("from_y")} ${form.get("to_x")} ${form.get("to_y")} ${form.get("duration")}`);
  } else if (form.get("action") == "tap") {
    await device.shell(`input tap ${form.get("x")} ${form.get("y")}`);
  } else if (form.get("action") == "text") {
    await device.shell(`input text ${form.get("text")}`);
  } else {
    return new Response(JSON.stringify({
      status: "OK",
      error: "COMMAND_NOT_AVAILABLE"
    }), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 404,
    })
  }
  return new Response(JSON.stringify({
    status: "OK"
  }), {
    headers: {
      "Content-Type": "application/json"
    }
  })
}
