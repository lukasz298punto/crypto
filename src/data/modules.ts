import interjectionsBeginner from './interjections-beginner.json';
import conjunctionsBeginner from './conjunctions-beginner.json';
import phrasalVerbsBeginner from './phrasalVerbs-beginner.json';
import prepositionsBeginner from './prepositions-beginner.json';
import adjectivesBeginner from './adjectives-beginner.json';
import sentencesBeginner from './sentences-beginner.json';
import articlesBeginner from './articles-beginner.json';
import pronounsBeginner from './pronouns-beginner.json';
import adverbsBeginner from './adverbs-beginner.json';
import phrasesBeginner from './phrases-beginner.json';
import idiomsBeginner from './idioms-beginner.json';
import Category from '@/constants/enums/category';
import nounsBeginner from './nouns-beginner.json';
import verbsBeginner from './verbs-beginner.json';
import Level from '@/constants/enums/level';

export default [
    [Category.Adjectives, Level.Beginner, adjectivesBeginner],
    [Category.Verbs, Level.Beginner, verbsBeginner],
    [Category.Nouns, Level.Beginner, nounsBeginner],
    [Category.Phrases, Level.Beginner, phrasesBeginner],
    [Category.Sentences, Level.Beginner, sentencesBeginner],
    [Category.Conjunctions, Level.Beginner, conjunctionsBeginner],
    [Category.Idioms, Level.Beginner, idiomsBeginner],
    [Category.Pronouns, Level.Beginner, pronounsBeginner],
    [Category.Prepositions, Level.Beginner, prepositionsBeginner],
    [Category.Articles, Level.Beginner, articlesBeginner],
    [Category.PhrasalVerbs, Level.Beginner, phrasalVerbsBeginner],
    [Category.Interjections, Level.Beginner, interjectionsBeginner],
    [Category.Adverbs, Level.Beginner, adverbsBeginner],
] as const;
