using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using SharpShapes;

namespace UnitTesting
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Shape testShape = new Shape();
            Assert.IsInstanceOfType(testShape, typeof(Shape));
        }

        [TestMethod]
        public void TestShapeArea()
        {
            Shape simple = new Shape();
            simple.width = 2;
            simple.height = 2;
            Assert.IsTrue(simple.calculateArea() == 4);
        }

        [TestMethod]
        public void TestShapeVolume()
        {
            Shape simple = new Shape();
            simple.width = 2;
            simple.height = 3;
            simple.depth = 5;
            Assert.IsTrue(simple.calculateVolume() == 30);
        }

        [TestMethod]
        public void TestCircleRadius()
        {
            Circle testCircle = new Circle();
            Assert.IsTrue(testCircle.calculateOutput(new[] { 2 }) == 12.56);
        }
        [TestMethod]
        public void TestSquareArea()
        {
            Square testSquare = new Square();
            Assert.IsTrue(testSquare.calculateOutput(new[] { 2, 4 }) == 8.00);
        }
        [TestMethod]
        public void TestCubeRadius()
        {
            Cube testCube = new Cube();
            Assert.IsTrue(testCube.calculateOutput(new[] { 2, 3, 4 }) == 24.00);
        }
    }
}
