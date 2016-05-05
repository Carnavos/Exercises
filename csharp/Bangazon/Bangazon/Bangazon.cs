using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace Bangazon
{
    class Bangazon
    {
        // temporary menu text storage
        static string mainMenuString =
            "*********************************************************\n" +
            "**  Welcome to Bangazon! Command Line Ordering System  **\n" +
            "*********************************************************\n" +
            "1. Create an account\n" +
            "2. Create a payment option\n" +
            "3. Order a product\n" +
            "4. Complete an order\n" +
            "5. See product popularity\n" +
            "6. Leave Bangazon!";

        // declare all menus with strings
        // main menu with string argument and affirmative single key read
        Menu mainMenu = new Menu(mainMenuString, true);
        //Menu accountMenu = new Menu(accountMenuString, false);

        // private variable for running prompt loops
        private bool _programRun { get; set; }

        // public constructor method for Bangazon
        public Bangazon ()
        {
            _programRun = true;
            // run program as last part of class instance construction
            OrderingSystem();
        }

        // main program run method
        public void OrderingSystem()
        {
            while (_programRun)
            {
                // screen clear to accomodate for remaining content from other menus
                Console.Clear();

                // initial screen prompt method with options
                screenPrompt(mainMenu.menuText, mainMenu.singleKeyRead, mainMenuHandler);


                // validation/user input method applicable to all input cases
                //acceptUserEntry(callbackMethod);

                // menuSystem.mainMenu();
                // menuSystem.accountMenu();
                    // menuSystem.accountMenu.
            }
        }


        public void screenPrompt (string menuString, bool singleKeyRead, Action<string> callback)
        {
            Console.WriteLine(menuString);

            // accept user entry and chain into corresponding submenu
            acceptUserEntry(mainMenuHandler, singleKeyRead);
        }

        // method to universally accept user entry for menu prompts
        public virtual void acceptUserEntry (Action<string> callback, bool singleKeyRead)
        {
            // accept user input
            string userInput = singleKeyRead ? Console.ReadKey().KeyChar.ToString() : Console.ReadLine();

            // invoke callback method with locally stored userInput (to be converted to desired type within callback if needed)
            callback(userInput);
        }

        // converts to number and runs input through switch statement and invokes corresponding menu method
        public void mainMenuHandler (string input)
        {
            int inputToNum = Convert.ToInt32(input);
            //if (inputToNum >= 0 && inputToNum <= 6)
            //{
            //    // one way of simply validating input instead of switch statement
            //    menuChoice(inputToNum);
            //}
            switch (inputToNum)
            {
                case 1:
                    // Account Creation Menu Method (should include the clear lines within method)
                    Console.Clear();
                    Console.WriteLine("Create an account menu");
                    Console.ReadKey();
                    break;
                case 2:
                    // Payment Option Menu Method
                    Console.WriteLine("Create a payment option menu");
                    break;
                case 3:
                    // Order Option Menu Method
                    Console.WriteLine("Order a product option menu");
                    break;
                case 4:
                    // Complete Order Menu Method
                    Console.WriteLine("Complete an order option menu");
                    break;
                case 5:
                    // Product Popularity Menu Method
                    Console.WriteLine("See product popularity option menu");
                    break;
                case 6:
                    // End program
                    Console.Clear();
                    _programRun = false;
                    Console.WriteLine("Thank you for visiting Bangazon");
                    Thread.Sleep(1000);
                    break;
                default:
                    Console.WriteLine("default");
                    break;
            }
        }

        public void accountMenuHandler (string input)
        {
            // account menu prompts
        }
    }
}
