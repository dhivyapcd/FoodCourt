# Cart-Hook


https://babeljs.io/docs/en/
What is Babel? · Babel
## Babel is a JavaScript compiler


https://flow.org/en/docs/react/


https://www.typescriptlang.org/docs/handbook/release-notes/overview.html

https://javascript.info/
flow
temporal dead zone-TDZ
object.freeze- cant add new property and modify
object.seal-cant add new property but modify-top level for nested 
use strict
prototype
arrow function- this keyword-parent scope not its own scope-lexical scope-arguments are not passed-constructor not allowed
rest operator-...params

----------------------------------------------------------------------------------------------------------------------------------------------------------------

Default Parameter-NAN error in Mathematical operations
Template literals -backtick' ${expression}
Naming Conventions
camelcase-javascript
dashed-CSS ex:nav-bar

Destructuring Array/object-unpack the array

Reusability-import and export
default and named export-{}

class-blueprint-template
object-instance
objects and arrays-allow duplicates

collections
datastructures-map and set
map-assign value to key ex:map.set(key,value); key can be anything not only string-no duplicates allowed
set-like array-no duplicates allowed ex.set.add(value);
automatic garbage collection-Javascript engine-WeakMap,WeakSet

Middleware
generator-place * after function keyword and yield keyword-stop, next-continue

object.create();
object.includes();-ES7
exponential operator-**
object.keys();
object.values();
object.entries(); key and values array

var obj={name:"dhivya",empid:"51930132"};
object.create(obj);

strings
-padStart
-withPadEnd

CallBack(hell)-ES5-nested timeout -depend one another
Promises(Chaining)-Es6--then-then-then
async & await-Es8

SharedArrayBuffer object-service worker and web worker-small file run in background while main thread is executing single threaded in js
multiple thread-race conditions-global object called atomics-lock
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics



The event loop is a process that waits for the Call Stack to be clear before pushing callbacks from the Task Queue to the Call Stack



-------------------------------------------------------------------------------------------------------------------------------------

https://www.npmjs.com/package/json-server


npm-node package manager
npm/yarn

node --version
npm --version

code .->VS code
npm <command> -h

local installation-npm install json-server
global packages  -g (npm install -g json-server)

mock server

npx json-server --watch db.json
change port =>json-server --watch db.json --port 8090
json-database-multiple tables-add array/object-light search ?q=A
GET/POST/PUT/PATCH/DELETE Method

Post-advanced Rest Client/postman/thunder client

XMLhttpRequest
axios
Ajax
Fetch

--------------------------------------------------
let id = 3;
let countDiv = document.createElement('div')
let body = document.getElementsByTagName('body')[0];
function loadUser() {
var xmlhttp;
if (window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest();
        } else {
// code for older browsers
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response));
            countDiv.innerHTML = JSON.parse(this.response).length;
          }
        };
        xmlhttp.open("GET", "http://localhost:8090/users", true);
        xmlhttp.send();
        body.appendChild(countDiv);
      }

function addUser() {
let obj = {
          firstName: 'ABC',
          lastName: 'XYZ',
          sapId: Math.random()
        }
var xmlhttp;
if (window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest();
        } else {
// code for older browsers
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response));
          }
        };
        xmlhttp.open("POST", "http://localhost:8090/users", true);
//xmlhttp.open("PUT", "http://localhost:8090/users/1", true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(obj));
      }

function deleteUser() {
var xmlhttp;
if (window.XMLHttpRequest) {
          xmlhttp = new XMLHttpRequest();
        } else {
// code for older browsers
          xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function () {
if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response));
          }
        };
        xmlhttp.open("DELETE", `http://localhost:8090/users/${id}`, true);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send();
      }
-----------------------------------------------------------------------------------------------------
Promises in api callS
Parellel calls

promise.all-wait all to response if any one will fail all fails-displays error-all response
promise.allSettled-displays status for every response seperately without error message-all response-ES11
promise.any-wait for all response and displays which one resolved first.-one response
promise.race-First call which is resolved/rejected-one response

let req = [
    new Promise((resolve, reject)=> setTimeout(()=> resolve(1), 30000)),
    new Promise((resolve, reject)=> setTimeout(()=> resolve(2), 4000)),
    new Promise((resolve, reject)=> setTimeout(()=> resolve(3), 10000))
]
Promise.any(req).then((res)=> {
    console.log(res)
}).catch((err)=> {
    console.log(err)
});

------------------------------------------------------------------------------------------------------
let urls = [
    "http://localhost:8090/users/1",
    "http://localhost:8090/users/2",
    "http://localhost:8090/users/3"
]
 
let req = urls.map((url)=> fetch(url));
 
Promise(req).then((response)=> {
    console.log(response)
}).catch(error=> {
    console.log(error)
})
--------------------------------------------------------------------------------------------------------
regular expression=> /([]{})/=>validation-passed->output Failed->null

exec method

simple/complex Regular Expression

arrayindex to check each group of expression and can do manipulations-called number captured group-simple regular expression-group undefined

.groups.year to access groups-named regular expression-complex Regular Expression=>/(?<>[]{})/-group defined with name-ES9
using .groups.year to access groups


test method-to check expression
In regular expression two words with dot operator /./s match also \n or other symbols
----------------------------------------------------------------------------------------------------------------
lookaround assertions in regular expressions
Positive lookahead: (?=«pattern»)
Negative lookahead: (?!«pattern»)
Positive lookbehind: (?<=«pattern»)
Negative lookbehind: (?<!«pattern»)
before/after
follow/precede
/g -globally

Notations
*->0 or more=>displays no one match
+->1 or more=>displays only 1 or more match
?->0 or 1 time
{n}->Exactly n times
{n,}->atleast n times
{n,m}->atleast ntimes but not more than m times

'how "are" "you" doing'.match(/(?<=")[a-z]+(?=")/g)
/\d+(?![a-z]+)/g

https://support.smartbear.com/alertsite/docs/appendixes/regular-expressions.html
--------------------------------------------------------------------------------------------------------------------
ES10 features

Bigint
Dynamic import-imports modules at runtime
Array.FlatMap-Nested array flatten to single array depth is one but flat -multidimensional array -deoth is multiple
String.trimStart,trimEnd,function.toString()

object.fromEntries-from object to array

optional catch binding
Well formed JSON.Stringify-unicode also

platform independent in previous versions
windows
self
frames
this

Standerdized globalThis-access global context 
-----------------------------------------------------------
ES11 Features

Optional Chaining
?.-nested array
var userObj = {
    firstName: 'ABC',
    lastName: 'XYZ',
    address: {
        state: 'KA',
        city: 'BNG',
        location: {
            latitude: 213456,
            longitude: 234567
        }
    }
}

userObj?.firstName
userObj?.firstName ||'Default Value'

Nullish coalesing
??-undefined and null
userObj?.firstName ?? 'Default Value'


Private Fields-># symbol used
Static Fields->staticv keyword
promise.allSettled
---------------------------------------------------------------
image alt-alternative/nullish coalescing
html-include-reusability

custom Id's in HTML
data-id
event.target.dataset
_expand---->refer parent table into child table---(inside child)
_embed----->refer child table into parent table----(inside parent)

semantic elements
-------------------------------------------------------------------

React
------
Facebook

UI Interface

Web/Mobile

MVC ----->V

front end library

Component based libraries

Bulilding blocks---->individual components

Features:-

JSX-Javascript XML

Native Approach

Reusabe Components

Unidirectional data flow

Virtual DOM


Advantages:-

*Easy to learn

*Native Approach

*virtual dom-faster than real dom

*Reusable components

*Client side and server side rendering


https://create-react-app.dev/docs/getting-started


https://create-react-app.dev/docs/adding-custom-environment-variables

https://www.npmjs.com/package/react-scripts

------------------------------------------------------
DOM--->Document object Model
VDOM---->copy of real DOM
diffing algorithm--compare previous VDOM with VDOM
reconcilation algorithm-integrating into real DOM

Fragments
More than one element addin render method
unnecessary div -react.fragment 3 ways
 // <React.Fragment></React.Fragment>
            // <Fragment></Fragment>
            // <></>



without jSX-----react.createElement

className instead of class in react

HtmlFor instead of for in label

-------------------------------------------
Block level Elements<div>
inline Elements<span>
Empty Elements<input><img><br><hr>
-----------------------------------------------
React Router

Static Router
Memory Router

Browser Router-html5 history api
Hash router-window.location.hash---not supports in all browser


-----------------------------------------------
https://www.npmjs.com/package/axios


onClick={redirectToDetails} - without param
onClick={()=>redirectToDetails(id)} - with params


props.match.params.id


conditional rendering

callback functions


Environment Variable
.env
process.env

REACT_APP_BASE_URL
---------------------------------------------------

Forms in React
--------------

controlled components
state
uncontrolled components
ref
React.createRef()--DOM render directly--disadvantage--new instance every time--->useRef hook

onchange event for inputs

event.target.name
event.target.value


extract from object-object destructuring----freeze
so setState



document.getElementbyId instead ref

npm install formik yup--validations

https://formik.org/docs/overview

synthectic events
-----------------------------------------------------------------------------------------------------


Dynamic import
https://reactjs.org/docs/code-splitting.html
Component based splitting
Route based Splitting----React.lazy(()=>import())
suspense fallback -communicate with component that data is not yet ready bcz bundling and minifying takes time--Loading or some other fallback content in suspense

code splitting-components into chuncks-small small modules


use modals,snackbars

portals-reactdom.createportal-2 arguments


--------------------------------------------------------------------------------------------------------
Relation
---------
parent-child=props
child-parent=event/callback functions
nested hierarchy/parent-child-grandchild-context api


No relation
----------
Redux-state management library

react-view  <------react-redux----->   redux-data
                     bridge

connect(mapStateToProps,mapDispatchToprops)



---------------------------------------------------------------
Hooks-16.8 version
2 Rules
Top level only
Hooks not used with javascript functions
start with use keyword

ShouldComponentUpdate-React.memo[useMemo,useCallBack]


performance optimization-for complexity use only since it costs again
react.memo-it will avoid unnecessary rerender	
useMemo-avoid unnecessary recomputation
useCallback-memorizes call back function if there is no change in dependencies-avoid new instance on each render
useContext
useReducer
useStore

Routing
useHistory
useParams
useRef

Redux
useSelector-(mapStateToProps)
useDispatch-mapDispatchToprops

customHooks


context Api---only for parent-child not siblings
create context-React.createContext

context.provider-value
context\.consumer-value/useContext(hook)

Middleware

Redux-thunk-dispatch,getstate as parameters-action creators as functions/objects
Redux-logger

Redux-saga

worker saga
watcher saga


Unit Test
Bug free product
early find before deployment
scenarios-test cases-postive/negative
two techniques
Test Driven Developent-write failing Test->make it pass->refactor
Behavioural Development Approach

https://jestjs.io/docs/expect


 axios   
npm i axios-mock-adapter
globals
beforeEach
beforeAll

afterEach
afterAll


test saga
two approaches
step by step-redux-saga-test,redux-saga-testing
whole saga

https://redux-saga.js.org/docs/advanced/Testing/

https://wanago.io/2018/09/03/javascript-testing-tutorial-part-two-introducing-enzyme-and-testing-react-components/


npm i enzyme @wojtekmaj/enzyme-adapter-react-17

https://redux.js.org/tutorials/fundamentals/part-4-store#middleware


npm run test -- --coverage .