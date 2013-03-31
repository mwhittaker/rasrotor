#ifndef POINT_H
#define POINT_H

#include <math.h>

/* *****************************************************************************
 * A point. 
 * ***************************************************************************/
typedef struct Point {
    int x;
    int y;
} Point;

/* *****************************************************************************
 * Constructs a point.
 * 
 * @param x: x coordinate.
 * @param y: y coordinate.
 * @return A point.
 * ***************************************************************************/
Point makePoint(int x, int y);

/* *****************************************************************************
 * Returns the sum of two points.
 *
 * @param a A point.
 * @param b A point.
 * @return The sum of two points.
 * ***************************************************************************/
Point addPoints(Point a, Point b);

#endif
