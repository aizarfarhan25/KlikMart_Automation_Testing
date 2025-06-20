import { test as base, expect, Page } from "@playwright/test";
import data from "../General/data";

export const test = base.extend<{
  testData: typeof data;
}>({
  testData: async ({}, use) => {
    await use(data);
  },
});

export { expect };
