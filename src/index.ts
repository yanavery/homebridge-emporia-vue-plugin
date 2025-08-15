import type { API } from 'homebridge';
import { EmporiaVueVirtualSwitchPlatform } from './platform.js';
import { PLATFORM_NAME } from './settings.js';

/**
 * This method registers the platform with Homebridge
 */
export default (api: API) => {
  api.registerPlatform(PLATFORM_NAME, EmporiaVueVirtualSwitchPlatform);
};

/**
 * For local testing of Emporia Vue integration outside of Homebridge
 */
// import pino from 'pino';
// import { EmporiaVueIntegration } from './emporia.js';

// async function runAppLocal() {
//   const logger = pino({
//     level: 'debug',
//     transport: {
//       target: 'pino-pretty',
//       options: {
//         colorize: true,
//       },
//     },
//   });

//   const emporia = new EmporiaVueIntegration(
//     "--EmporiaDeviceChannelName--",
//     50, // watts threshold
//     15, // refresh interval in minutes
//     "--EmporiaUserName--",
//     "--EmporiaPassword--",
//     logger);

//   await emporia.getState().then((state) => {
//     logger.info(`Current Emporia Vue device/channel state: ${state}`);
//   });
// }
// await runAppLocal();
