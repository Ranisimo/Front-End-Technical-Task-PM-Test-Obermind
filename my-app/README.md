# Front-End-Technical-Task-PM-Test-Obermind
Technical Task


CSS
I would've preferred to set up SASS styles to declutter the globals.css file, but instead I resorted to creating new hyphenated classes and applying them to the different elements. Using SASS to computerise the other reused and commonly used styles would've been far more scalable and further condensed the required classes. If given more time, I would use Bootstrap-React and SASS to be more efficient.

Components
There are a couple of cases where creating separate, reusable components for the different elements would've been beneficial. However, given the time constraints to return a completed static page from the Figma designs, I decided to go ahead with the solution I completed in this repo. As well, when looking across the different pages/navigation options, there wasn't a massive amount of components that I could've reused, such as the various banners, which are quite complex across the other pages and at least in this task, weren't something I wanted to spend time on doing, considering only the Home Page was requested.

Vectors and Icons
I downloaded the various icons from the Figma design instead of using a library such as Material Icons from Google, this was because given the scope of this project, I didn't want to locate the individual icons from Material Icons and import them, since in a real production environment you'd likely use a large proportion of the library across the site, meaning the implementation of certain icons would be far simpler and justify setting up the import for the icons.

Device Sizes
It is paramount in our current world of technology and website structure, that all sites are optimised to be used on a mobile or handheld device, not just a fixed width and height desktop/monitor. Libraries such as Bootstrap are a great open source way to make sure of such compatability. When building this static site I have made some adjustments to make it compatable on smaller devices, however many of the elements as they are presented on Figma are not mobile friendly. Such as the header and footer. I could take liberties in designing them myself, but of course in the real world this requires conversing with designs teams so coordinate and come up with a good alternative to display key information and navigation ability while still maintaing a cohesive and streamlined design in line with the primary design goals. For example, the section in the header that includes the "Trading, Discover, Promotions, Company, Partner with us" could be condesned into a dropdown named "Menu" or something similar to indicate that the user should utilise this dropdown to navigate to other pages, which gives the header more room on a smaller decive width and not have wrapping or overflowing content.
Similar situation with the footer

Some elements also have fixed widths to contain all of the visual information included in the Figma design, such as images in the "Seamless Withdrawals" section which could be condesned into the 3 interactable options on the left side ("Ultra-Fast Processing"...) allowing the critical content to still be visible when condensed.

What I Would've Done Differently
Used Bootstrap to ensure multi-device compatability. There is a Bootstrap-React framework that seemlessly integrates the two together and comes with default SASS selectors and configurations. This would've minimised the amount of time I spent trying to make some problematic elements compatable across devices by converting fixed widths into percentages to make them reactive to the available space. I used this framework on my own personal website portfolio which made my website responsive and hassle-free.