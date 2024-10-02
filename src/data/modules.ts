import adjectivesBeginner from './adjectives-beginner.json';
import sentencesBeginner from './sentences-beginner.json';
import nounsBeginner from './adjectives-beginner.json';
import phrasesBeginner from './phrases-beginner.json';
import Category from '@/constants/enums/category';
import verbsBeginner from './nouns-beginner.json';
import Level from '@/constants/enums/level';

export default [
    [Category.Adjectives, Level.Beginner, adjectivesBeginner],
    [Category.Verbs, Level.Beginner, verbsBeginner],
    [Category.Nouns, Level.Beginner, nounsBeginner],
    [Category.Phrases, Level.Beginner, phrasesBeginner],
    [Category.Sentences, Level.Beginner, sentencesBeginner],
] as const;
