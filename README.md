# ShoppingList
Creating and managing a shopping list

This React website provides the user a shopping list, in which the inputed items can be added to the list, can be deleted one by one or deleted entirely from the list. 
The main component contains the list, which uses a random color picker, located in another component. When the 
user is typing in the input area, the color picker is activated and changes all the colors of the containers in which the items are located. Also, an item can be deleted by
clicking the checkbox in the container coresponding of an item. All the items can be deleted by clicking the Delete everything button.

When the list is empty, the big list container contains only a messsage specifying that the list is currently empty. Moreover, if the user tries to type in the
input area unavailable items, like the empty string or spaces, they get a warning through a pop-up, due to the fact that our item must contain at least a letter. This thing
is checked in our main component by a separate function.

The main component (ListAlerts imports our secondary component - ColorPicker) and this app component is exported into our app component, the one which directly communicates with the React server.



https://github.com/DragosTrandafir/ShoppingList/assets/62999548/319e854e-4ca9-422e-b8cf-66d73dc3ca4a

To run the server and view the website, install the React working environment ( instructions provided in the following video, 5:06 - 9:15): https://youtu.be/SqcY0GlETPk?si=4pgRQw2NKLe2CeIe
Then, replace the src folder with the one attached in this repository.

Alternatively, you can download the archived file attached.
