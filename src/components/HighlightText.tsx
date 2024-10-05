import Highlighter from 'react-highlight-words';
import { Typography } from '@mui/material';
import flatMap from 'lodash/flatMap';
import compact from 'lodash/compact';
import toLower from 'lodash/toLower';
import reduce from 'lodash/reduce';
import split from 'lodash/split';
import size from 'lodash/size';
import trim from 'lodash/trim';
import uniq from 'lodash/uniq';
import map from 'lodash/map';
import nlp from 'compromise';

interface VerbForms {
    Infinitive?: string;
    PastTense?: string;
    Gerund?: string;
    Participle?: string;
    PresentTense?: string;
    FutureTense?: string;
}

function cartesianProductAsStrings(arrays: string[][]): string[] {
    return reduce(
        arrays,
        (acc, curr) => flatMap(acc, (a) => map(curr, (b) => trim(`${a} ${b}`))),
        ['']
    );
}

function generateForms(word: string) {
    const base = toLower(word);
    const verbForms = nlp(base).verbs().conjugate();

    const forms = [base];

    if (verbForms && verbForms[0]) {
        const conjugations: VerbForms = verbForms[0];

        forms.push(conjugations?.Infinitive || base);
        forms.push(conjugations?.PastTense || base);
        forms.push(conjugations?.FutureTense || base);
        forms.push(conjugations?.Gerund || base);
        forms.push(conjugations?.Participle || base);
        forms.push(conjugations?.PresentTense || base);
    }

    return compact(uniq(forms));
}

export default function HighlightText({
    trans,
    text,
}: {
    trans: string;
    text: string;
}) {
    const baseWords = map(split(trans, ' '), toLower);

    return (
        <Typography
            variant="body1"
            align="center"
            sx={{
                '& .highlight': {
                    color: 'primary.main',
                    backgroundColor: 'transparent',
                },
            }}
        >
            <Highlighter
                highlightClassName="highlight underline"
                searchWords={
                    size(baseWords) === 1
                        ? generateForms(trans)
                        : cartesianProductAsStrings(
                              map(baseWords, (w) => generateForms(w))
                          )
                }
                autoEscape={true}
                textToHighlight={text}
            />
        </Typography>
    );
}
