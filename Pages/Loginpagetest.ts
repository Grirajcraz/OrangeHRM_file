import {Page,Locator, expect} from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config()


export class TestLoginPage {
    readonly page: Page
    readonly url = 'https://practicetestautomation.com/practice-test-login/'


}

