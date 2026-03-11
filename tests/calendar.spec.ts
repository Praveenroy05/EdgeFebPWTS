import {test, expect} from '@playwright/test'

test("Calendar Handling", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()

    const targetDay = "15"
    const targetMonth = "May"
    const targetYear = "2027"

    const monthPicker = await page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")
    const nextBtn = page.getByText("Next")

    while(true){
        if((await monthPicker.textContent() === targetMonth) && (await yearPicker.textContent() === targetYear))
        {
            await page.getByText(targetDay, {exact:true}).click()
            break
        }
        else{
            await nextBtn.click()
        }
    }

    await expect(page.locator("#sixth_date_picker")).toHaveValue(`05/${targetDay}/${targetYear}`)

})

// Class
// Object