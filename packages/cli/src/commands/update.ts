import { updateIOS } from '../platforms/ios/update';
import { askPlatform, logFatal, runTask } from '../common';
import { exit } from 'shelljs';


export async function updateCommand(platform: string) {
  platform = await askPlatform(platform);

  try {
    await update(platform, true);
    exit(0);
  } catch (e) {
    logFatal(e);
  }

}

export async function update(platform: string, needsUpdate: boolean) {
  if (platform === 'ios') {
    await updateIOS(needsUpdate);
  } else if (platform === 'android') {
    // await updateAndroid();
  } else {
    throw `Platform ${platform} is not valid. Try with iOS or android`;
  }
}
