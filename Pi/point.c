#include "point.h"

/* *****************************************************************************
 * Constructs a point.
 * 
 * @param x: x coordinate.
 * @param y: y coordinate.
 * @return A point.
 * ***************************************************************************/
Point makePoint(float x, float y) {
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

/* *****************************************************************************
 * Returns a point in the same direction at a length 1 from the origin.
 * ****************************************************************************/
Point unitPoint(Point p) {
    float distance = sqrt(pow(p.x,2) + pow(p.y,2));
    return makePoint(p.x/distance, p.y/distance);
}
