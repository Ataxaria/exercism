#ifndef RAINDROPS_H
#define RAINDROPS_H

#include <stdio.h>
#include <string.h>

#define SOUND_NAME_LENGTH 6

typedef struct {
    unsigned int divisor;
    char sound[SOUND_NAME_LENGTH];
} drop_t;

void convert(char result[], int drops);

#endif
