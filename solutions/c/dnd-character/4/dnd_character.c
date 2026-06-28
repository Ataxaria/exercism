#include "dnd_character.h"

static bool seeded = false;  // avoid seeding for each call

int ability(void)
{
    if (!seeded)
    {
        srand(time(NULL));
        seeded = true;
    }
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
    return score / 2 - 5;  // nicer than the spec because it avoids the math.floor function
}


/* 
    pointer to struct typecasted to type of first member
    this holds because pointer to struct is equal to pointer to its first member
*/
dnd_character_t make_dnd_character(void)
{
    dnd_character_t c = { 0 };
    for (uint8_t i = 0; i < 6; i++)
    {
        *((int *)&c + i) = ability();
    }

    c.hitpoints = 10 + modifier(c.constitution);

    return c;
}