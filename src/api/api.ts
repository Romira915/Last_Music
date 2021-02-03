import { BrowserWindow, app, dialog, ipcMain, ipcRenderer } from 'electron';
import ApiInterface from './apiInterface';

const sample = (arg: string) => {
    console.log(arg);
};

const hello = () => {
    ipcRenderer.send('hello', 'rend');
};

const Api: ApiInterface = {
    sample,
    hello,
};

export default Api;
