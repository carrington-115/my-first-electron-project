import osUtils from "os-utils";
import fs from "fs";
import os from "os";
import { BrowserWindow, webContents } from "electron";
import { ipcSendWebContents } from "./util.js";

const POLLING_INTERVAL: number = 500;

export function pollResources(mainWindow: BrowserWindow) {
  setInterval(async () => {
    const cpuUsage = await getCpuUsage();
    const ramUsage = getRamUsage();
    const storage = getStorage();

    ipcSendWebContents("statistics", mainWindow.webContents, {
      cpuUsage,
      ramUsage,
      storageUsage: storage.total,
    });
  }, POLLING_INTERVAL);
}

function getCpuUsage(): Promise<number> {
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve);
  });
}

function getRamUsage(): number {
  return 1 - osUtils.freememPercentage();
}

function getStorage(): { total: number; usage: number } {
  const stats = fs.statfsSync(process.platform === "win32" ? "C://" : "/");
  const total = stats.bsize * stats.blocks;
  const free = stats.bsize * stats.bfree;

  return {
    total: Math.floor(total / 1_000_000_000),
    usage: 1 - free / total,
  };
}

export function getStaticData() {
  const totalStorage = getStorage().total;
  const cpuModel = os.cpus()[0].model;
  const totalMemoryGB = Math.floor(osUtils.totalmem() / 1024);

  return {
    totalStorage,
    cpuModel,
    totalMemoryGB,
  };
}
