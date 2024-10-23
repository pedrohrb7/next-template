import {
  UserConfig,
  RuleConfigCondition,
  RuleConfigSeverity,
} from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'common',
        'lib',
        'lang',
      ],
    ] as [RuleConfigSeverity, RuleConfigCondition, string[]],
  },
  prompt: {
    questions: {
      type: {
        description: 'Select the type of change that you\'re committing',
        enum: {
          common: {
            description:
              'Use this when need commit something that does not match the other types',
            title: 'Common',
            emoji: '✨',
          },
          lib: {
            description: 'Use this when change, install or update a lib',
            title: 'Library',
            emoji: '✨',
          },
          lang: {
            description: 'Use this when change or add text language.',
            title: 'Language',
            emoji: '✨',
          },
        },
      },
    },
  },
};

export default Configuration;
// See config example for config-conventional
// https://github.com/conventional-changelog/commitlint/blob/master/@commitlint/config-conventional/src/index.ts
// https://www.conventionalcommits.org/en/v1.0.0/
