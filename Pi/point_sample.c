#include <stdio.h>
#include "point.h"

/* *****************************************************************************
 * A program to practice structs, typedef, header files, and makefiles. These 
 * will all be useful for networking and for using C in general.
 *
 * @author : Michael Whittaker
 * @email  : mjw297@cornell.edu
 * @date   : 2013-03-30
 * ****************************************************************************/
int main (int arg, char **argv) {
    Point a = makePoint(1, 2);
    Point b = makePoint(3, 4);
    Point p = addPoints(a, b);

    printf("a.x = %d, a.y = %d\n", a.x, a.y);
    printf("b.x = %d, b.y = %d\n", b.x, b.y);
    printf("p.x = %d, p.y = %d\n", p.x, p.y);

    return 0;
}
