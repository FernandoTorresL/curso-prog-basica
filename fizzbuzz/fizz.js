var numeros = 100;
var divisible = false;

for(i = 1; i <=100; i++)
{
   divisible = false;
   if (i % 3 == 0)
   {
      document.write("Fizz");
      divisible = true;
   }

   if (i % 5 == 0)
   {
      document.write("Buzz");
      divisible = true;
   }

   if (i % 3 != 0 && i % 5 != 0)
   {
      document.write(i);
   }
   document.write("<br />")
}
