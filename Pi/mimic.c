/* *****************************************************************************
 * This program simply mimics the characters fed to standard input. It acts like
 * cat with no arguments. It's simple, but it's neat.
 * ****************************************************************************/
#include <stdio.h>

 int main() {
     int hc;

     while ((hc = getchar()) != EOF) {
         putchar(hc);
     }

     return 0;
}
