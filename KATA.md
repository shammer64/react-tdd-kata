# TDD with React
 
During this kata, we will practice TDD in several different React development scenarios. Our objectives are:
 
* Testing tools and setup
 ** React
 ** Jest, React Testing Library, Axios (mock service)
* Test the general structure of an Application
* Test the visual elements of a Component
* Test passing data into a Component
* Test emitting events from a Component
* Test useState hooks in a Component
* BONUS Test useEffect hooks in a Component
* BONUS Test pure functions
* BONUS Test service and service mock
 
# To Do List Kata
 
Create a simple ToDo list app
1. Write structural and visual tests for a ToDoListEntry component
  * Create one without crashing
  * Contains a text entry field
  * Contains a submit button
2. Write structural and visual tests for a ToDoListItems component
  * Create one without crashing
  * Contains a list of ToDo items
3. Write structural and visual tests for a ToDoList component
  * Create one without crashing
  * Contains a title
  * Contains a ToDoListEntry component
  * Contains a ToDoListItems component
4. Write functional test for displaying the ToDoListItems
  * Renders a list of items passed from parent
5. Write functional tests for the ToDoListEntry component
  * Submit button disabled with no text
  * Submit button enabled with text
  * Calls a callback function when submit button pressed
6. Write functional tests for the ToDoList component
  * Handles callback from ToDoListEntry component
  * Passes updated ToDo items to ToDoListItems component
7. Add ToDoList component to App
  *  Contains a ToDoList component
 
BONUS
1. Write structural/functional tests for completing/cancelling the ToDoListItems component
  * Contains a cancel button
  * Contains a completed button
  * Calls a callback function when item is cancelled
  * Calls a callback function when item is completed
2. Write functional tests for completing/cancelling in ToDoList component
  * Handles callback when item is cancelled
  * Handles callback when item is completed
3. Write functional tests for a service that persists ToDo items in local storage
  * TBD