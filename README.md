# Description of project

 This food ordering application can be used in small restaurants by customers to order food
 
 The application has Three main modules
   1. appetizers
   2. entrees
   3. desserts

#### force-app/main/default/lwc
All the LWC(Lightning Web Components) modules are in ```force-app/main/default/lwc``` folder and the above three components(modules) contain particular food items and their brief information

#### menu
These three modules are child components of ```menu``` component and the menu component is the child component of ```itemSelector``` component.
So all the components(modules) loading in ```itemSelector``` parent component.

#### itemDetails component
When the user clicks on a particular food item it loads in ```itemDetails``` component. This component shows detailed information on selected items i.e. id, photo, name, price
We can select the food item quantity and add it to ```cart``` component.

#### cart component
```cart``` component contains information on selected food items i.e. the price and quantity and total amount to be paid
After placing an order the order gets created in ```Order``` salesforce object which is created in the Salesforce CRM

#### Message Channels
Message Channels in Salesforce are used to send information to different components in the app
This app has two message channels
 - AddFoodItemToCart.messageChannel-meta.xml
 - FoodItem.messageChannel-meta.xml
As the name says ```AddFoodItemToCart.messageChannel-meta.xml``` is used to send selected food items to ```cart``` component
and ```FoodItem.messageChannel-meta.xml``` is used to send a selected food item from ```itemSelector``` component to ```itemDetails``` component. 

#### Salesforce CRM objects
There are four CRM objects
  - appetizers
  - entrees
  - dessert
  - orders

App admin adds different food items to ```appetizers, entrees, dessert``` objects, and ```orders``` object keeps a record of placed orders

#### classes
 There are three APEX classes are created
  ```Appetizers.cls, Entrees.cls, Desserts.cls``` are used to extract records from salesforce objects and put that records in LWC components
  ```CreateOrders.cls``` class is used to create order records and put them in ```orders``` object of salesforce CRM
  
#### Programming Languages used
  - JavaScript
  - Salesforce Apex
  - SOQL (Salesforce Structured Query Language)
  - CSS
  - HTML and lightning web components

#### Tools And Technologies used
 - VS code editor
 - Salesforce CRM
