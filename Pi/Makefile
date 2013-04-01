all: hello.out mimic.out point_sample.out 

hello.out: hello.c
	gcc -g3 -Wall -o hello.out hello.c 

mimic.out: mimic.c
	gcc -g3 -Wall -o mimic.out mimic.c

point_sample.out: point_sample.c point.c
	gcc -g3 -Wall -o point_sample.out point_sample.c point.c -I. -lm
