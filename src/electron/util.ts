import { ipcMain, WebContents, WebFrameMain } from "electron";
import { getUIPath } from "./pathResolver.js";
import { pathToFileURL } from "url";

export const isDev = (): boolean => {
  return process.env.NODE_ENV === "development";
};

export function ipcHandle<Key extends keyof EventPayloadMapping>(
  key: Key,
  handler: () => EventPayloadMapping[Key],
) {
  ipcMain.handle(key, (event) => {
    // @ts-ignore
    validateEventFrame(event.senderFrame.url);
    return handler();
  });
}

export function ipcSendWebContents<Key extends keyof EventPayloadMapping>(
  key: Key,
  webContents: WebContents,
  payload: EventPayloadMapping[Key],
) {
  webContents.send(key, payload);
}

export function validateEventFrame(frame: WebFrameMain) {
  if (isDev() && new URL(frame.url).host === "localhost:5123") {
    return;
  }

  // @ts-ignore
  if (frame.url !== pathToFileURL(getUIPath().toString())) {
    throw new Error("Malicious content");
  }
}
