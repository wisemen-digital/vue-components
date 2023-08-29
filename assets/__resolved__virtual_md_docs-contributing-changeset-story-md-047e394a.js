const html = `<h1 id="changeset" tabindex="-1">Changeset <a class="header-anchor" href="#changeset" aria-hidden="true">#</a></h1>
<h2 id="what-is-changeset" tabindex="-1">What is changeset? <a class="header-anchor" href="#what-is-changeset" aria-hidden="true">#</a></h2>
<p>Changeset is a tool to control versioning of a package and maintain it's <a href="http://CHANGELOG.md" target="_blank">CHANGELOG.md</a> file.</p>
<h2 id="when-to-use-changeset" tabindex="-1">When to use changeset? <a class="header-anchor" href="#when-to-use-changeset" aria-hidden="true">#</a></h2>
<p>The intention is that every commit has a changeset entry, so before you commit changes to your branch, you run the command <code>pnpm changeset</code>. This will ask you if the change is a patch / minor / major.</p>
<p>Whenever small changes happen, it will be a <b>patch</b>. E.g. Changed the variant design of the AppButton component.<br>
Whenever you make a new component, it will be a mi<b>minor</b>. E.g. Made the AppButton component.<br>
The <b>major</b> version will only be relevant whenever we release the 1.0 version at the end of the quarter.</p>
<p>When you are done with your branch and make a pull request, you run the command <code>pnpm changeset version</code><br>
This will automatically update the <a href="http://CHANGELOG.md" target="_blank">CHANGELOG.md</a> file and update the version of the package.</p>
`;
const frontmatter = { "group": "contributing", "icon": "carbon:commit", "title": "Changeset" };
const relativePath = "docs/contributing/Changeset.story.md";
export {
  frontmatter,
  html,
  relativePath
};
