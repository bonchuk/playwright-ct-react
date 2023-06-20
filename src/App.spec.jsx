import { test, expect } from '@playwright/experimental-ct-react'
// import Timer from './Timer';
import App from './App'

test.only('First Test of the component', async ({ mount }) => {
  const component = await mount(<App name="Василина"/>);

  await expect(component).toContainText("Learn React");

  await component.locator('.App-logo').waitFor({ state: "visible" })

  expect(await component.locator('.App-logo').screenshot()).toMatchSnapshot(
    {
      maxDiffPixels: 5
    }
  )



  await component.screenshot({ path: 'screenshot.png' });
})

// test('testing useEffect', async ({ mount }) => {
//   const component = await mount(<Timer/>);

//   await expect(component).toContainText("I have rendered 1 times!");
//   await component.waitFor();
//   await component.screenshot({ path: 'Timer_screenshot.png' });
// })
