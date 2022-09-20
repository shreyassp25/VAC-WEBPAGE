        // Prompt the user for a number in the range 0...100. If the number is out of range, display an error message and prompt again until a valid number is entered. Assume the user enters a number each time.
        // Solution 1: Put the test in the while statement.
        var n = prompt("Please enter a number in the range 0...100");
        while (n<0 || n>100)
        {
              alert(n +" is out of range.  Try again.");
              n = prompt("Please enter a number in the range 0...100");
                
             }
                // Solution 2: Put the test inside the loop.
                     while (true)
             {
              }
          var n = prompt("Please enter a number in the range 0...100");
            if (n>=0 && n<=100) break;
              alert(n +" is out of range.  Try again.");












        //Prompt the user for a number in the range 0...100. If the number is out of range, display an error message and prompt again until a valid number is entered. Assume the user enters a number each time.

        // Solution 1: put the test in the while statement.
        var n = prompt("Please enter a number in the range 0...100");
        while (isNaN(n) || n<0 || n>100)
        {
              alert(n +" is out of range or not a number. Try again.");
              n = prompt("Please enter a number in the range 0...100");
        }
        // Solution 2: put the test inside the loop.
        while (true)
        {
              var n = prompt("Please enter a number in the range 0...100");
              if (!isNaN(n) && n>=0 && n<=100) break;
              alert(n +" is out of range or not a number. Try again.");
}
