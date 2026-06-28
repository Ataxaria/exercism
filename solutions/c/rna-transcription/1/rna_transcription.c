#include "rna_transcription.h"

char *to_rna(const char *dna)
{
    char *rna = calloc(strlen(dna), sizeof(char));
    char *ptr = rna;
    while (*dna)
    {
        switch (*dna)
        {
            case 'G':
                *ptr = 'C';
                break;
            case 'C':
                *ptr = 'G';
                break;
            case 'T':
                *ptr = 'A';
                break;
            case 'A':
                *ptr = 'U';
                break;
        }
        dna++; ptr++;
    }
    return rna;
}
