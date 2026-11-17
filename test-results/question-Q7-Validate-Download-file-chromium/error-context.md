# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: question.spec.ts >> Q7 Validate Download file
- Location: tests\question.spec.ts:122:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'txtDownloadLink' })

```

# Page snapshot

```yaml
- generic [ref=f1e16]:
  - banner [ref=f1e17]:
    - generic [ref=f1e23]:
      - heading [level=1] [ref=f1e25]:
        - link "Automation Testing Practice" [ref=f1e26] [cursor=pointer]:
          - /url: https://testautomationpractice.blogspot.com/
      - paragraph [ref=f1e28]: For Selenium, Cypress & Playwright
  - list [ref=f1e35]:
    - listitem [ref=f1e36]:
      - link "Home" [ref=f1e37] [cursor=pointer]:
        - /url: http://testautomationpractice.blogspot.com/
    - listitem [ref=f1e38]:
      - link "Udemy Courses" [ref=f1e39] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/#udemy
    - listitem [ref=f1e40]:
      - link "Online Trainings" [ref=f1e41] [cursor=pointer]:
        - /url: https://www.pavanonlinetrainings.com/
    - listitem [ref=f1e42]:
      - link "Blog" [ref=f1e43] [cursor=pointer]:
        - /url: https://www.pavantestingtools.com/
    - listitem [ref=f1e44]:
      - link "PlaywrightPractice" [ref=f1e45] [cursor=pointer]:
        - /url: https://testautomationpractice.blogspot.com/p/playwrightpractice.html
  - generic [ref=f1e49]:
    - generic:
      - generic [ref=f1e59]:
        - generic [ref=f1e60]:
          - generic [ref=f1e65]:
            - heading "Download Files" [level=3] [ref=f1e66]
            - generic [ref=f1e67]:
              - heading "Download a Text or PDF File" [level=2] [ref=f1e68]
              - text: "Enter Text:"
              - textbox "Enter Text:" [active] [ref=f1e69]: My name is Giri
              - button "Generate and Download Text File" [ref=f1e70] [cursor=pointer]
              - button "Generate and Download PDF File" [ref=f1e71] [cursor=pointer]
              - heading "PDF File with the Browser" [level=2] [ref=f1e72]
              - button "Download PDF File" [ref=f1e73] [cursor=pointer]
          - link "Home" [ref=f1e77] [cursor=pointer]:
            - /url: https://testautomationpractice.blogspot.com/
          - generic [ref=f1e79]:
            - text: "Subscribe to:"
            - link "Posts (Atom)" [ref=f1e80] [cursor=pointer]:
              - /url: https://testautomationpractice.blogspot.com/feeds/posts/default
        - generic [ref=f1e81]:
          - heading "Upload Files" [level=2] [ref=f1e82]
          - generic [ref=f1e83]:
            - generic [ref=f1e84]:
              - button "Choose File" [ref=f1e85]
              - button "Upload Single File" [ref=f1e86] [cursor=pointer]
            - paragraph
            - generic [ref=f1e87]:
              - button "Choose File" [ref=f1e88]
              - button "Upload Multiple Files" [ref=f1e89] [cursor=pointer]
            - paragraph
        - generic [ref=f1e90]:
          - heading "Static Web Table" [level=2] [ref=f1e91]
          - table [ref=f1e93]:
            - rowgroup [ref=f1e94]:
              - row [ref=f1e95]:
                - columnheader "BookName" [ref=f1e96]
                - columnheader "Author" [ref=f1e97]
                - columnheader "Subject" [ref=f1e98]
                - columnheader "Price" [ref=f1e99]
              - row [ref=f1e100]:
                - cell "Learn Selenium" [ref=f1e101]
                - cell "Amit" [ref=f1e102]
                - cell "Selenium" [ref=f1e103]
                - cell "300" [ref=f1e104]
              - row [ref=f1e105]:
                - cell "Learn Java" [ref=f1e106]
                - cell "Mukesh" [ref=f1e107]
                - cell "Java" [ref=f1e108]
                - cell "500" [ref=f1e109]
              - row [ref=f1e110]:
                - cell "Learn JS" [ref=f1e111]
                - cell "Animesh" [ref=f1e112]
                - cell "Javascript" [ref=f1e113]
                - cell "300" [ref=f1e114]
              - row [ref=f1e115]:
                - cell "Master In Selenium" [ref=f1e116]
                - cell "Mukesh" [ref=f1e117]
                - cell "Selenium" [ref=f1e118]
                - cell "3000" [ref=f1e119]
              - row [ref=f1e120]:
                - cell "Master In Java" [ref=f1e121]
                - cell "Amod" [ref=f1e122]
                - cell "JAVA" [ref=f1e123]
                - cell "2000" [ref=f1e124]
              - row [ref=f1e125]:
                - cell "Master In JS" [ref=f1e126]
                - cell "Amit" [ref=f1e127]
                - cell "Javascript" [ref=f1e128]
                - cell "1000" [ref=f1e129]
        - generic [ref=f1e130]:
          - heading "Dynamic Web Table" [level=2] [ref=f1e131]
          - generic [ref=f1e132]:
            - table [ref=f1e133]:
              - rowgroup [ref=f1e134]:
                - row [ref=f1e135]:
                  - columnheader "Name" [ref=f1e136]
                  - columnheader "Network (Mbps)" [ref=f1e137]
                  - columnheader "Memory (MB)" [ref=f1e138]
                  - columnheader "Disk (MB/s)" [ref=f1e139]
                  - columnheader "CPU (%)" [ref=f1e140]
              - rowgroup [ref=f1e141]:
                - row [ref=f1e142]:
                  - cell "Firefox" [ref=f1e143]
                  - cell "3.2 Mbps" [ref=f1e144]
                  - cell "91.9 MB" [ref=f1e145]
                  - cell "0.91 MB/s" [ref=f1e146]
                  - cell "4.4%" [ref=f1e147]
                - row [ref=f1e148]:
                  - cell "Internet Explorer" [ref=f1e149]
                  - cell "0.2 Mbps" [ref=f1e150]
                  - cell "86.3 MB" [ref=f1e151]
                  - cell "0.31 MB/s" [ref=f1e152]
                  - cell "1.0%" [ref=f1e153]
                - row [ref=f1e154]:
                  - cell "Chrome" [ref=f1e155]
                  - cell "3.4 Mbps" [ref=f1e156]
                  - cell "97.4 MB" [ref=f1e157]
                  - cell "0.83 MB/s" [ref=f1e158]
                  - cell "9.0%" [ref=f1e159]
                - row [ref=f1e160]:
                  - cell "System" [ref=f1e161]
                  - cell "3.7 Mbps" [ref=f1e162]
                  - cell "61.3 MB" [ref=f1e163]
                  - cell "0.54 MB/s" [ref=f1e164]
                  - cell "0.6%" [ref=f1e165]
            - generic [ref=f1e166]:
              - paragraph [ref=f1e167]:
                - text: "CPU load of Chrome process:"
                - strong [ref=f1e168]: 9.0%
              - paragraph [ref=f1e169]:
                - text: "Memory Size of Firefox process:"
                - strong [ref=f1e170]: 91.9 MB
              - paragraph [ref=f1e171]:
                - text: "Network speed of Chrome process:"
                - strong [ref=f1e172]: 3.4 Mbps
              - paragraph [ref=f1e173]:
                - text: "Disk space of Firefox process:"
                - strong [ref=f1e174]: 0.91 MB/s
        - generic [ref=f1e175]:
          - heading "Pagination Web Table" [level=2] [ref=f1e176]
          - generic [ref=f1e178]:
            - table [ref=f1e179]:
              - rowgroup [ref=f1e180]:
                - row [ref=f1e181]:
                  - columnheader "ID" [ref=f1e182]
                  - columnheader "Name" [ref=f1e183]
                  - columnheader "Price" [ref=f1e184]
                  - columnheader "Select" [ref=f1e185]
              - rowgroup [ref=f1e186]:
                - row [ref=f1e187]:
                  - cell "1" [ref=f1e188]
                  - cell "Smartphone" [ref=f1e189]
                  - cell "$10.99" [ref=f1e190]
                  - cell [ref=f1e191]:
                    - checkbox [ref=f1e192]
                - row [ref=f1e193]:
                  - cell "2" [ref=f1e194]
                  - cell "Laptop" [ref=f1e195]
                  - cell "$19.99" [ref=f1e196]
                  - cell [ref=f1e197]:
                    - checkbox [ref=f1e198]
                - row [ref=f1e199]:
                  - cell "3" [ref=f1e200]
                  - cell "Tablet" [ref=f1e201]
                  - cell "$5.99" [ref=f1e202]
                  - cell [ref=f1e203]:
                    - checkbox [ref=f1e204]
                - row [ref=f1e205]:
                  - cell "4" [ref=f1e206]
                  - cell "Smartwatch" [ref=f1e207]
                  - cell "$7.99" [ref=f1e208]
                  - cell [ref=f1e209]:
                    - checkbox [ref=f1e210]
                - row [ref=f1e211]:
                  - cell "5" [ref=f1e212]
                  - cell "Wireless Earbuds" [ref=f1e213]
                  - cell "$8.99" [ref=f1e214]
                  - cell [ref=f1e215]:
                    - checkbox [ref=f1e216]
            - list [ref=f1e217]:
              - listitem [ref=f1e218]:
                - link "1" [ref=f1e219] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=f1e220]:
                - link "2" [ref=f1e221] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=f1e222]:
                - link "3" [ref=f1e223] [cursor=pointer]:
                  - /url: "#"
              - listitem [ref=f1e224]:
                - link "4" [ref=f1e225] [cursor=pointer]:
                  - /url: "#"
      - generic:
        - generic:
          - complementary
      - complementary [ref=f1e228]:
        - generic [ref=f1e229]:
          - generic [ref=f1e230]:
            - heading "Tabs" [level=2] [ref=f1e231]
            - generic [ref=f1e234]:
              - link [ref=f1e236] [cursor=pointer]:
                - /url: https://wikipedia.org/wiki/
              - generic [ref=f1e238]:
                - textbox [ref=f1e240]
                - button "Submit" [ref=f1e242]
          - generic [ref=f1e244]:
            - heading "Dynamic Button" [level=2] [ref=f1e245]
            - button "START" [ref=f1e247] [cursor=pointer]
          - generic [ref=f1e248]:
            - heading "Alerts & Popups" [level=2] [ref=f1e249]
            - generic [ref=f1e250]:
              - button "Simple Alert" [ref=f1e251] [cursor=pointer]
              - button "Confirmation Alert" [ref=f1e252] [cursor=pointer]
              - button "Prompt Alert" [ref=f1e253] [cursor=pointer]
              - paragraph
          - button "New Tab" [ref=f1e256] [cursor=pointer]
          - button "Popup Windows" [ref=f1e261] [cursor=pointer]
          - generic [ref=f1e262]:
            - heading "Mouse Hover" [level=2] [ref=f1e263]
            - generic [ref=f1e264]:
              - paragraph [ref=f1e265]: Move the mouse over the button to open the dropdown menu.
              - button "Point Me" [ref=f1e267] [cursor=pointer]
          - generic [ref=f1e268]:
            - heading "Double Click" [level=2] [ref=f1e269]
            - generic [ref=f1e270]:
              - text: "Field1:"
              - textbox [ref=f1e271]: Hello World!
              - text: "Field2:"
              - textbox [ref=f1e272]
              - button "Copy Text" [ref=f1e273] [cursor=pointer]
              - paragraph [ref=f1e274]: Double click on button, the text from Field1 will be copied into Field2.
          - generic [ref=f1e275]:
            - heading "Drag and Drop" [level=2] [ref=f1e276]
            - generic:
              - paragraph [ref=f1e278]: Drag me to my target
              - paragraph [ref=f1e280]: Drop here
          - generic [ref=f1e281]:
            - heading "Slider" [level=2] [ref=f1e282]
            - generic [ref=f1e283]:
              - paragraph [ref=f1e284]:
                - text: "Price range:"
                - textbox "Price range:" [ref=f1e285]: $75 - $300
              - generic [ref=f1e286]:
                - generic [ref=f1e288] [cursor=pointer]
                - generic [ref=f1e289] [cursor=pointer]
          - heading "SVG Elements" [level=2] [ref=f1e291]
          - generic [ref=f1e300]:
            - heading "Scrolling DropDown" [level=2] [ref=f1e301]
            - textbox "Select an item" [ref=f1e303]
          - generic [ref=f1e304]:
            - heading "Labels And Links" [level=2] [ref=f1e305]
            - generic [ref=f1e307]:
              - generic [ref=f1e308]:
                - heading "Mobile Labels" [level=4] [ref=f1e309]
                - generic [ref=f1e310]: Samsung
                - generic [ref=f1e311]: Real Me
                - generic [ref=f1e312]: Moto
              - generic [ref=f1e313]:
                - heading "Laptop Links" [level=4] [ref=f1e314]
                - link "Apple" [ref=f1e315] [cursor=pointer]:
                  - /url: https://www.apple.com/
                - link "Lenovo" [ref=f1e316] [cursor=pointer]:
                  - /url: https://www.lenovo.com/
                - link "Dell" [ref=f1e317] [cursor=pointer]:
                  - /url: https://www.dell.com/
              - generic [ref=f1e318]:
                - heading "Broken Links" [level=4] [ref=f1e319]
                - link "Errorcode 400" [ref=f1e320] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=400
                - link "Errorcode 401" [ref=f1e321] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=401
                - link "Errorcode 403" [ref=f1e322] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=403
                - link "Errorcode 404" [ref=f1e323] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=404
                - link "Errorcode 408" [ref=f1e324] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=408
                - link "Errorcode 500" [ref=f1e325] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=500
                - link "Errorcode 502" [ref=f1e326] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=502
                - link "Errorcode 503" [ref=f1e327] [cursor=pointer]:
                  - /url: http://www.deadlinkcity.com/error-page.asp?e=503
          - generic [ref=f1e328]:
            - heading "Visitors" [level=2] [ref=f1e329]
            - generic [ref=f1e331]:
              - generic "A chart." [ref=f1e335]:
                - img "A chart." [ref=f1e336]
                - generic "A tabular representation of the data in the chart." [ref=f1e349]:
                  - table [ref=f1e350]:
                    - rowgroup [ref=f1e351]:
                      - row [ref=f1e352]:
                        - columnheader [ref=f1e353]
                        - columnheader [ref=f1e354]
                    - rowgroup [ref=f1e355]:
                      - row [ref=f1e356]:
                        - cell "0" [ref=f1e357]
                        - cell "53" [ref=f1e358]
                      - row [ref=f1e359]:
                        - cell "1" [ref=f1e360]
                        - cell "66" [ref=f1e361]
                      - row [ref=f1e362]:
                        - cell "2" [ref=f1e363]
                        - cell "60" [ref=f1e364]
                      - row [ref=f1e365]:
                        - cell "3" [ref=f1e366]
                        - cell "100" [ref=f1e367]
                      - row [ref=f1e368]:
                        - cell "4" [ref=f1e369]
                        - cell "83" [ref=f1e370]
                      - row [ref=f1e371]:
                        - cell "5" [ref=f1e372]
                        - cell "78" [ref=f1e373]
                      - row [ref=f1e374]:
                        - cell "6" [ref=f1e375]
                        - cell "57" [ref=f1e376]
                      - row [ref=f1e377]:
                        - cell "7" [ref=f1e378]
                        - cell "68" [ref=f1e379]
                      - row [ref=f1e380]:
                        - cell "8" [ref=f1e381]
                        - cell "81" [ref=f1e382]
                      - row [ref=f1e383]:
                        - cell "9" [ref=f1e384]
                        - cell "91" [ref=f1e385]
                      - row [ref=f1e386]:
                        - cell "10" [ref=f1e387]
                        - cell "97" [ref=f1e388]
                      - row [ref=f1e389]:
                        - cell "11" [ref=f1e390]
                        - cell "86" [ref=f1e391]
                      - row [ref=f1e392]:
                        - cell "12" [ref=f1e393]
                        - cell "79" [ref=f1e394]
                      - row [ref=f1e395]:
                        - cell "13" [ref=f1e396]
                        - cell "61" [ref=f1e397]
                      - row [ref=f1e398]:
                        - cell "14" [ref=f1e399]
                        - cell "47" [ref=f1e400]
                      - row [ref=f1e401]:
                        - cell "15" [ref=f1e402]
                        - cell "85" [ref=f1e403]
                      - row [ref=f1e404]:
                        - cell "16" [ref=f1e405]
                        - cell "88" [ref=f1e406]
                      - row [ref=f1e407]:
                        - cell "17" [ref=f1e408]
                        - cell "83" [ref=f1e409]
                      - row [ref=f1e410]:
                        - cell "18" [ref=f1e411]
                        - cell "69" [ref=f1e412]
                      - row [ref=f1e413]:
                        - cell "19" [ref=f1e414]
                        - cell "54" [ref=f1e415]
                      - row [ref=f1e416]:
                        - cell "20" [ref=f1e417]
                        - cell "35" [ref=f1e418]
                      - row [ref=f1e419]:
                        - cell "21" [ref=f1e420]
                        - cell "30" [ref=f1e421]
                      - row [ref=f1e422]:
                        - cell "22" [ref=f1e423]
                        - cell "59" [ref=f1e424]
                      - row [ref=f1e425]:
                        - cell "23" [ref=f1e426]
                        - cell "81" [ref=f1e427]
                      - row [ref=f1e428]:
                        - cell "24" [ref=f1e429]
                        - cell "68" [ref=f1e430]
                      - row [ref=f1e431]:
                        - cell "25" [ref=f1e432]
                        - cell "62" [ref=f1e433]
                      - row [ref=f1e434]:
                        - cell "26" [ref=f1e435]
                        - cell "62" [ref=f1e436]
                      - row [ref=f1e437]:
                        - cell "27" [ref=f1e438]
                        - cell "46" [ref=f1e439]
                      - row [ref=f1e440]:
                        - cell "28" [ref=f1e441]
                        - cell "45" [ref=f1e442]
                      - row [ref=f1e443]:
                        - cell "29" [ref=f1e444]
                        - cell "12" [ref=f1e445]
              - generic [ref=f1e446]: 9,548,946
  - contentinfo [ref=f1e447]:
    - generic [ref=f1e450]:
      - table [ref=f1e451]:
        - rowgroup [ref=f1e452]:
          - row [ref=f1e453]:
            - cell [ref=f1e454]:
              - generic [ref=f1e455]:
                - generic [ref=f1e456]:
                  - heading "Form" [level=2] [ref=f1e457]
                  - generic [ref=f1e459]:
                    - generic [ref=f1e460]:
                      - heading "Section 1" [level=4] [ref=f1e461]
                      - paragraph [ref=f1e462]: This is a paragraph in Section 1.
                      - textbox [ref=f1e463]
                      - button "Submit" [ref=f1e464] [cursor=pointer]
                    - generic [ref=f1e465]:
                      - heading "Section 2" [level=4] [ref=f1e466]
                      - paragraph [ref=f1e467]: This is a paragraph in Section 2.
                      - textbox [ref=f1e468]
                      - button "Submit" [ref=f1e469] [cursor=pointer]
                    - generic [ref=f1e470]:
                      - heading "Section 3" [level=4] [ref=f1e471]
                      - paragraph [ref=f1e472]: This is a paragraph in Section 3.
                      - textbox [ref=f1e473]
                      - button "Submit" [ref=f1e474] [cursor=pointer]
                - generic [ref=f1e475]:
                  - heading "Footer Links" [level=2] [ref=f1e476]
                  - list [ref=f1e478]:
                    - listitem [ref=f1e479]:
                      - link "Home" [ref=f1e480] [cursor=pointer]:
                        - /url: http://testautomationpractice.blogspot.com/
                    - listitem [ref=f1e481]:
                      - link "Hidden Elements & AJAX" [ref=f1e482] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html
                    - listitem [ref=f1e483]:
                      - link "Download Files" [ref=f1e484] [cursor=pointer]:
                        - /url: https://testautomationpractice.blogspot.com/p/download-files_25.html
            - cell "ShadowDOM Mobiles Laptops Blog Choose File Youtube" [ref=f1e485]:
              - generic [ref=f1e487]:
                - heading "ShadowDOM" [level=2] [ref=f1e488]
                - generic [ref=f1e489]:
                  - generic [ref=f1e490]:
                    - generic [ref=f1e491]: Mobiles
                    - generic [ref=f1e492]: Laptops
                    - link "Blog" [ref=f1e495] [cursor=pointer]:
                      - /url: https://www.pavantestingtools.com/
                    - textbox [ref=f1e496]
                    - checkbox [ref=f1e497]
                    - button "Choose File" [ref=f1e498]
                  - link "Youtube" [ref=f1e499] [cursor=pointer]:
                    - /url: https://www.youtube.com/@sdetpavan/videos
      - generic [ref=f1e502]:
        - text: Theme images by
        - link "merrymoonmary" [ref=f1e503] [cursor=pointer]:
          - /url: http://www.istockphoto.com/portfolio/merrymoonmary?platform=blogger
        - text: . Powered by
        - link "Blogger" [ref=f1e504] [cursor=pointer]:
          - /url: https://draft.blogger.com
        - text: .
```

# Test source

```ts
  27  | 
  28  |   await expect(startbutton).toBeHidden
  29  | 
  30  |   if (await startbutton.isVisible()) {
  31  |     await startbutton.click()
  32  |   }
  33  |   else { console.log('startbutton is not visible.') }
  34  | 
  35  |   await expect(startbutton).toBeHidden
  36  | 
  37  |   if (await stopbutton.isVisible()) {
  38  |     await stopbutton.click()
  39  |   }
  40  |   else { console.log("there is no stop button") }
  41  | })
  42  | 
  43  | // Q3 What will you do if an element is intercepted by another element?
  44  | 
  45  | const intercepted_url = 'https://the-internet.herokuapp.com/dynamic_loading/1'
  46  | 
  47  | test('Q3 TC1 interception', async ({ page }) => {
  48  |   await page.goto(intercepted_url)
  49  |   await page.getByRole('button', { name: "start" }).click()
  50  |   const hiddenText = await page.locator('#finish').textContent()
  51  |   console.log(hiddenText)
  52  |   expect(page.locator('#finish')).toHaveText("Hello World!")
  53  | })
  54  | 
  55  | test('Q3 TC2 interception', async ({ page }) => {
  56  |   await page.goto(intercepted_url)
  57  |   const finish = await page.locator('#finish')
  58  |   await expect(finish).toBeHidden();
  59  |   console.log(await expect(finish).toHaveText("Hello World!"));
  60  |   await page.getByRole('button', { name: "start" }).click()
  61  |   await expect(finish).toBeHidden()
  62  |   expect(finish).toHaveText("Hello World!")
  63  | })
  64  | 
  65  | 
  66  | // Q4 How do you handle duplicate elements?
  67  | 
  68  | test('Q4 duplicate element', async ({ page }) => {
  69  |   await page.goto(Base_url)
  70  | 
  71  |   const submitButton = page.getByRole('button', { name: 'submit' })
  72  | 
  73  |   const count = await submitButton.count()
  74  | 
  75  |   console.log(`Submit_Button : ${count}`)
  76  |   expect(count).toBeGreaterThan(4)
  77  | 
  78  |   await submitButton.nth(2).click()
  79  | 
  80  |   const p1 = page.getByRole('button', { name: 'Primary Action' });
  81  |   await expect(p1).toBeVisible();
  82  |   await p1.click();
  83  | 
  84  | })
  85  | 
  86  | //Q5. How will you handle stale elements in Playwright?
  87  | 
  88  | test('Q5 Stale Element', async ({ page }) => {
  89  |   await page.goto('https://www.timeanddate.com/worldclock/')
  90  |   const chennaiClock = page.locator('#my-city__digitalClock')
  91  |   await page.waitForLoadState('domcontentloaded')
  92  |   await expect(chennaiClock).toBeVisible()
  93  |   const time = await chennaiClock.innerText()
  94  |   console.log('Time : 1 = ', time)
  95  |   await page.waitForTimeout(2000)
  96  |   console.log('Time : 2 = ', time)
  97  | })
  98  | 
  99  | // Q6 How will you handle a dropdown containing 10,000 records?
  100 | 
  101 | const scrolling_dd_url = 'https://testautomationpractice.blogspot.com/p/playwrightpractice.html#'
  102 | const native_dd_url = 'https://rahulshettyacademy.com/AutomationPractice/'
  103 | 
  104 | test('Q6, TC1 scrollingdropdown', async ({ page }) => {
  105 |   await page.goto(scrolling_dd_url)
  106 |   const scroll = page.getByPlaceholder('Select an item')
  107 |   await scroll.fill('item 199')
  108 |   await scroll.press('Enter')
  109 |   await expect(scroll).toHaveValue('item 199');
  110 | })
  111 | 
  112 | test('Q6, TC2 nativedropdown', async ({ page }) => {
  113 |   await page.goto(native_dd_url)
  114 |   const native = page.locator('#dropdown-class-example')
  115 |   await native.selectOption('option2')
  116 |   await expect(native).toHaveValue('option2');
  117 | })
  118 | 
  119 | //Q7 How will you validate a file download?
  120 | 
  121 | 
  122 | test('Q7 Validate Download file', async ({ page }) => {
  123 |   await page.goto(Base_url);
  124 |   await page.getByRole('link', { name: 'Download Files' }).click();
  125 |   await page.waitForLoadState('domcontentloaded');
  126 |   await page.locator('#inputText').fill('My name is Giri');
> 127 |   await page.getByRole('button', {name : 'txtDownloadLink'}).click()
      |                                                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  128 |   const download = await page.getByRole('link',{ name : 'Download Text File'})
  129 |   expect (download).toBeEnabled()
  130 |   await download.click()
  131 | 
  132 | 
  133 | });
  134 | 
  135 | // Q8 How do you handle multiple tabs or windows?
  136 | 
  137 | test('Q8, multiple tabs, windows', async ({ page }) => {
  138 |   await page.goto(Base_url)
  139 |   const newPagePromise = page.context().waitForEvent('page');
  140 |   await page.getByText('New Tab').click();
  141 |   const newPage = await newPagePromise;
  142 |   await newPage.waitForLoadState();
  143 |   console.log(await newPage.title());
  144 | })
```