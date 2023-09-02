---
group: 'contributing'
icon: 'carbon:commit'
title: 'Changeset'
---

# Changeset


## What is changeset?

Changeset is a tool to control versioning of a package and maintain it's CHANGELOG.md file.

## When to use changeset?

The intention is that every commit has a changeset entry, so before you commit changes to your branch, you run the command ```pnpm changeset```. This will ask you if the change is a patch / minor / major.

Whenever small changes happen, it will be a <b>patch</b>. E.g. Changed the variant design of the AppButton component.\
Whenever you make a new component, it will be a mi<b>minor</b>. E.g. Made the AppButton component.\
The <b>major</b> version will only be relevant whenever we release the 1.0 version at the end of the quarter.

When you are done with your branch and make a pull request, you run the command ```pnpm changeset version```\
This will automatically update the CHANGELOG.md file and update the version of the package.
