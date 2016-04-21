using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SharpShapes
{
    public class Cube : Shape
    {
        public Cube ()
        {
            name = "Cube";
            prompt = "Enter width, height, and depth";
            numOfInputs = 3;
            resultText = "Cube Area:";
            numOfSides = 6;
            units = "square inches";
        }
        // circle version with area equation
        public override double calculateOutput(int[] inputs)
        {
            return inputs[0] * inputs[1] * inputs[2];
        }
    }
}
