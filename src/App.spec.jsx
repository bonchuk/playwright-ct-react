import { test, expect } from '@playwright/experimental-ct-react'
import App from './App'

test('First Test of the component', async ({ mount }) => {
  const component = await mount(<App name="Василина"/>);

  await expect(component).toContainText("Learn React");

  expect(await component.locator('.App-logo').screenshot({
    animations: "disabled"
  })).toMatchSnapshot(
    {
      maxDiffPixels: 5
    }
  )

  await component.screenshot({ path: 'screenshot.png' });
})
