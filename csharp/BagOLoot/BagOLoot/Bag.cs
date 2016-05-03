using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BagOLoot
{
    public class Bag
    {
        // public method which houses Dictionary
        public Dictionary<string, List<string>> Toys
        {
            get { return _toys; }
        }
        // Dictionary to log child's list of toys (string sequence)
        private Dictionary<string, List<string>> _toys { get; set; }

        // Dictionary to log child's delivery status
        public Dictionary<string, bool> ChildrenDeliveredStatus { get; set; }

        public Bag()
        {
            _toys = new Dictionary<string, List<string>>();
            ChildrenDeliveredStatus = new Dictionary<string, bool>();
        }

        // Add toy to the Toys dictionary, then initialize in delivery status as false (not delivered)
        public void AddToy (string toyName, string owner)
        {   
            // check if current list exists for owner, initialize new one if not
            if (_toys.ContainsKey(owner))
            {
                _toys[owner].Add(toyName);
            }
            else
            {
                _toys.Add(owner, new List<string>());
                _toys[owner].Add(toyName);
            }
            Console.WriteLine("{0} added to {1}'s toy list.", toyName, owner);
            ChildrenDeliveredStatus[owner] = false; 
        }

        public void RemoveToy (string owner, string toyName)
        {
            if (_toys.ContainsKey(owner))
            {
                _toys[owner].Remove(toyName);
                Console.WriteLine("{0} removed from {1}'s toy list.", toyName, owner);
            }
            else
            {
                Console.WriteLine("Child does not exist in current bag!");
            }
        }

        // check if a child's status is delivered
        public bool IsChildDelivered (string child)
        {
            return ChildrenDeliveredStatus[child];
        }

        // change child's delivery status
        public void ChangeDeliveredStatus (string childName, bool status)
        {
            ChildrenDeliveredStatus[childName] = status;
        }

        // Lists all toys associated with child, log if none
        public void ListAllToys (string chosenChild)
        {
            List<string> chosenChildList = _toys[chosenChild];
            if (chosenChildList.Count > 0)
            {
                Console.WriteLine("{0}'s Toys:", chosenChild);
                foreach (string toy in chosenChildList)
                {
                    Console.WriteLine("{0}. {1}", chosenChildList.IndexOf(toy), toy);
                }
            }
            else
            {
                Console.WriteLine("No toys listed");
            }
        }

        public bool doesChildHaveToys (string chosenChild)
        {
            List<string> chosenChildList = _toys[chosenChild];
            return chosenChildList.Count > 0;
        }

        public void ListAllChildrenWithToys ()
        {
            if (_toys.Count > 0)
            {
                foreach( string child in _toys.Keys)
                {
                    if (doesChildHaveToys(child))
                    {
                        Console.WriteLine(child);
                    }
                }
            }
            else
            {
                Console.WriteLine("No children currently logged in bag");
            }
        }

        // validState and errorText to handle error printing in the console loop
        public bool validState { get; set; }
        public string errorText { get; set; }

        // user input setter with validation
        private string _userInput; 
        public string userInput
        {
            get { return _userInput; }
            set
            {
                //if (value)
                //{
                //    throw new ArgumentException("Character entered not a letter");
                //}
                validState = true;
                _userInput = value;
            }
        } 
    }
}
