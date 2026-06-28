#include "dnd_character.h"

int ability(void)
{
    srand(time(NULL));
    uint8_t lowest = 6;
    int score = 0;
    for (uint8_t i = 0; i < 4; i++)
    {
        uint8_t d6 = (rand() % 6) + 1;
        lowest = d6 < lowest ? d6 : lowest;
        score += d6;
    }

    return score - lowest;
}

int modifier(int score)
{
    return floor((score - 10) / 2.0);
}

dnd_character_t make_dnd_character(void)
{
    dnd_character_t c = { 0 };
    for (uint8_t i = 0; i < 6; i++)
    {
        *((int *)&c + i) = ability();  // pointer to struct typecasted to type of first member
    }

    c.hitpoints = 10 + modifier(c.constitution);

    return c;
}