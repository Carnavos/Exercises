using System;
using System.Collections.Generic;
using System.Linq;
using BagOLoot;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BagOLootTests
{
    [TestClass]
    public class UnitTest1
    {
        // bag
            // Dictionary with keys as children's names, values as Lists of Toys (with name, owner)
        [TestMethod]
        //Items can be added to bag.
        public void IsItemAddedToBag()
        {
            Bag testBag = new Bag();
            testBag.AddToy("toyFrog", "Jeffy");
            Assert.AreEqual(testBag.Toys["Jeffy"].First(), "toyFrog");
        }

        [TestMethod]
        //Items can be removed from bag, per child only.Removing ball from the bag should not be allowed.A child's name must be specified.
        public void IsItemRemovedFromBag()
        {
            Bag testBag = new Bag();
            testBag.AddToy("toyPlane", "Reggie");
            testBag.RemoveToy("Reggie", "toyPlane");
            Assert.IsFalse(testBag.Toys["Reggie"].Contains("toyPlane"));
        }

        [TestMethod]
        //Must be able to list all children who are getting a toy.
        public void AreChildrenListable()
        {
            // some code to be able
            Bag testBag = new Bag();
            testBag.AddToy("DinosaursLegoSet", "Harold");
            // actually tests amount of children, contrary to appearance of Toys.Count (keys are child names)
            Assert.IsTrue(testBag.Toys.Count > 0); 
        }

        [TestMethod]
        //Must be able to list all toys for a given child's name.
        public void AreEachChildsToysListable()
        {
            // writing the test to prove that a child's toy list longer than 1 returns more than one string
            Bag testBag = new Bag();
            testBag.AddToy("toyPlane", "Reggie");
            testBag.AddToy("DinosaursLegoSet", "Reggie");
            Assert.IsTrue(testBag.Toys["Reggie"].Count == 2);
        }

        [TestMethod]
        //Must be able to set the delivered property of a child, which defaults to false to true.
        public void IsChildDeliveryPropertyAccessible()
        {
            // some code to be able 
            Bag testBag = new Bag();
            testBag.AddToy("blueHat", "Arnold");
            testBag.ChangeDeliveredStatus("Arnold", true);
            Assert.IsTrue(testBag.IsChildDelivered("Arnold"));
        }
    }
}
