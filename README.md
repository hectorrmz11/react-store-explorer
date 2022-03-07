## Store Info Explorer

**TO GET STARTED, PLEASE FORK THIS REPO. DO NOT MAKE PRs DIRECTLY TO THIS REPO**

### Assignment
Please create a React UI that will allow users to explore Store information. This should have two routes, one for the homepage and one for detailed store view. The homepage should display a table and a search input component that will display all stores and allow the user to sort and filter stores in the list through table navigation components. The table columns will only display a subset of the stores' information (Namely, columns for the vanity name, banner, district number, division number, and store number). The user should be able perform update and delete operations on the table in place, as well as navigate to a Store Details page for each table row. The Store Details page will contain all associated information for a store and also the user should be able to update and delete the store from the Store Details page. 

As far as getting the Store information is concerned, we have provided you with a JSON file containing mock Store data which your app will pull from. 

We are expecting an application that is primarily displays clean code and knowledge of best practices. It does not necesssarily have to look great, but please try your best. We expect some kind of testing to be present in the application; the more coverage the better. Outside of anything mentioned inside the requirements section, you are free to use whichever modules or component modules you are comfortable with. 

### Requirements
Frontend
- Use Functional Components and Hooks
- Use TypeScript to create your components and utility classes
- Should display table view of store fetched from mock API endpoint
- Table should be filterable and sortable
- CRUD Operations - Should be able to update data in a location row, delete a location, or add a new one
	- Should only modify local state
	- Should be able to perform Updates in both Table view and detailed store view
- Columns for vanityName, banner, district, division, and storeNumber should be displayed on the table, with all other fields displayed within the detailed store view
- Clicking a "View More" link on a row will take you to a Detailed Store View which will display all data available for a Store. 
- Going to a detailed Store View should take you to a different route in the app
- text box search to filter by Store Name
- There should be some test coverage
- Stretch Goals
	- Textbox has autocomplete for Store Names
	- Mobile Friendly View for table
	- Find a way to implement a custom hook
	- Implementing any kind of way to make the app more accessible
Data
- Fill out the `fetchStoreData` function in `api.ts` to connect to the mock endpoint. 
- You must use the `fetch` module for this due to how the data is mocked. 
- You should not need to make any network requests to modify data. Just modify the data in local state. 

### Run / Start Instructions
- Make sure `nvm` is installed on your machine. See Part A of the instructions found via this link: https://github.com/nijicha/install_nodejs_and_yarn_homebrew
- Use `nvm use` to automatically install the version of node specified in the `.nvmrc` file
- Use `yarn` to install node modules
- Use `yarn start` to start the project. Project will start on port 3000. 
- Run your unit tests with `yarn test`
