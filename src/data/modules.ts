import conjunctionsBeginner from './conjunctions-beginner.json';
import phrasalVerbsBeginner from './phrasalVerbs-beginner.json';
import prepositionsBeginner from './prepositions-beginner.json';
import mostPopularBeginner from './mostPopular-beginner.json';
import adjectivesBeginner from './adjectives-beginner.json';
import sentencesBeginner from './sentences-beginner.json';
import pronounsBeginner from './pronouns-beginner.json';
import adverbsBeginner from './adverbs-beginner.json';
import phrasesBeginner from './phrases-beginner.json';
import pastSimpleBeginner from './past-beginner.json';
import idiomsBeginner from './idioms-beginner.json';
import Category from '@/constants/enums/category';
import nounsBeginner from './nouns-beginner.json';
import verbsBeginner from './verbs-beginner.json';
import Level from '@/constants/enums/level';
import { Word } from '@/types/database';

interface Content {
    version: string;
    words: Word[];
}

export default [
    [Category.Adjectives, Level.Beginner, adjectivesBeginner as Content[]],
    [Category.Verbs, Level.Beginner, verbsBeginner as Content[]],
    [Category.Nouns, Level.Beginner, nounsBeginner as Content[]],
    [Category.Phrases, Level.Beginner, phrasesBeginner as Content[]],
    [Category.Sentences, Level.Beginner, sentencesBeginner as Content[]],
    [Category.Conjunctions, Level.Beginner, conjunctionsBeginner as Content[]],
    [Category.Idioms, Level.Beginner, idiomsBeginner as Content[]],
    [Category.Pronouns, Level.Beginner, pronounsBeginner as Content[]],
    [Category.Prepositions, Level.Beginner, prepositionsBeginner as Content[]],
    [Category.PhrasalVerbs, Level.Beginner, phrasalVerbsBeginner as Content[]],
    [Category.Adverbs, Level.Beginner, adverbsBeginner as Content[]],
    [Category.PastSimple, Level.Beginner, pastSimpleBeginner as Content[]],
    [Category.MostPopular, Level.Beginner, mostPopularBeginner as Content[]],
] as const;
