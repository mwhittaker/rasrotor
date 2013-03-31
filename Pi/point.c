#include "point.h"

/* *****************************************************************************
 * Constructs a point.
 * 
 * @param x: x coordinate.
 * @param y: y coordinate.
 * @return A point.
 * ***************************************************************************/
Point makePoint(int x, int y) {
    Point p;
    p.x = x;
    p.y = y;
    return p;
}

/* *****************************************************************************
 * Returns the sum of two points.
 *
 * @param a A point.
 * @param b A point.
 * @return The sum of two points.
 * ***************************************************************************/
Point addPoints(Point a, Point b) {
    Point p;
    p.x = a.x + b.x;
    p.y = a.y + b.y;
    return p;
}
