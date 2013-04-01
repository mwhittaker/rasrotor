#ifndef POINT_H
#define POINT_H

#include <math.h>

/* *****************************************************************************
 * A point. 
 * ***************************************************************************/
typedef struct Point {
    float x;
    float y;
} Point;

/* *****************************************************************************
 * Constructs a point.
 * 
 * @param x: x coordinate.
 * @param y: y coordinate.
 * @return A point.
 * ***************************************************************************/
Point makePoint(float x, float y);

/* *****************************************************************************
 * Returns the sum of two points.
 *
 * @param a A point.
 * @param b A point.
 * @return The sum of two points.
 * ***************************************************************************/
Point addPoints(Point a, Point b);

/* *****************************************************************************
 * Returns a point in the same direction at a length 1 from the origin.
 * ****************************************************************************/
 Point unitPoint(Point p);

#endif
