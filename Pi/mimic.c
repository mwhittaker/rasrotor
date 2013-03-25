/* *****************************************************************************
 * This program simply mimics the characters fed to standard input. It acts like
 * cat with no arguments. It's simple, but it's neat.
 * ****************************************************************************/
#include <stdio.h>

 int main() {
     int c;

     while ((c = getchar()) != EOF) {
         putchar(c);
     }

     return 0;
}
