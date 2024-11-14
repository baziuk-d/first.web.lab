## Сьома і Восьма Лабораторна робота з дисципліни "Web-технології та Web-дизайн"
## Виконав: Базюк Дамян(ІР-22)
### Лабораторна робота №7-8 (Варіант 2)

####                    7) React.js: Catalog page
Description: Continue work on your React App by adding a page with Items list (see the link to wireframe of Catalog page above).

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)


Requirements:

All of the requirements for previous React.js works should be kept.
Code style:
Use array.map() method for rendering your items list
Routing (switching between pages) should work now.
Use react-router-dom library: https://reactrouter.com/web/guides/quick-start
All UI elements (buttons / select) should have corresponding React components (PrimaryButton.jsx / Select.jsx  etc.)
Functionality (filter / search / view more) is still not required (you have to complete it on next works)


####                    8) React.js: Item page
Description: Continue work on your React App by adding a page for  your Item (see the link to wireframe of Item page above). Also, now, you have to make all your previous pages (Home & Catalog) more interactive.

Variants -  (products that you are ‘selling’) the same as for previous works. (see the description to 3rd work)


Requirements:

All of the requirements for previous React.js works should be kept.
Code style:
Your items should be stored inside the state or context (your choice) of your page
https://uk.reactjs.org/docs/hooks-state.html
https://uk.reactjs.org/docs/hooks-reference.html#usecontext
For your state management use useState() inside Functional Component  instead of this.state and Class component
If you decided to use context, use useContext() hook instead of Context.Consumer
https://www.robinwieruch.de/react-usecontext-hook
Functionality (IMPORTANT):
Home page: “View more” button should display more elements on the same page Tip: Elements can be just random paragraph & heading, use your imagination ;)
Catalog page: You should be able to filter your items list, by applying different filters by item's properties (i.e size/color/type)
Catalog page: Search by any text property option should also work
Catalog & Item pages: “View more” action on every item should refer to corresponding Item page, with correct information about item (get the info from your state/context)
