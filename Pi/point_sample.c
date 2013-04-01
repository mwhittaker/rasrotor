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
    Point unita = unitPoint(a);
    Point unitb = unitPoint(b);

    printf("a.x     = %.2f, a.y     = %.2f\n", a.x, a.y);
    printf("b.x     = %.2f, b.y     = %.2f\n", b.x, b.y);
    printf("p.x     = %.2f, p.y     = %.2f\n", p.x, p.y);
    printf("unita.x = %.2f, unita.y = %.2f\n", unita.x, unita.y);
    printf("unitb.x = %.2f, unitb.y = %.2f\n", unitb.x, unitb.y);
    return 0;
}
