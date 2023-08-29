const html = '<h1 id="making-components" tabindex="-1">Making components <a class="header-anchor" href="#making-components" aria-hidden="true">#</a></h1>\n<h2 id="vue-component" tabindex="-1">Vue component <a class="header-anchor" href="#vue-component" aria-hidden="true">#</a></h2>\n<h3 id="guidelines" tabindex="-1">Guidelines <a class="header-anchor" href="#guidelines" aria-hidden="true">#</a></h3>\n<h4 id="base-component" tabindex="-1">Base component <a class="header-anchor" href="#base-component" aria-hidden="true">#</a></h4>\n<p>Whenver possible, try to use <a href="https://headlessui.com/" target="_blank">Headless UI</a> as a base for the component.\nIf it is not present in that package, try to find an implementation on the <a href="https://www.radix-vue.com/" target="_blank">Radix Vue</a> package. If neither has an implementation, you will have to write it fully from scratch.</p>\n<h4 id="location" tabindex="-1">Location <a class="header-anchor" href="#location" aria-hidden="true">#</a></h4>\n<p>Inside the <code>root</code> folder, add your relevant components / composables / other dependencies.<br>\n<b>Important!</b> All imports should use the <code>@</code> alias, since that is used to replace the import names.</p>\n<h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4>\n<p>Props will use the new destructing syntax.</p>\n<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">interface</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">Props</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">isDisabled</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">isLoading</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">isRounded</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">boolean</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">variant</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ButtonProps</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;variant&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">size</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">ButtonProps</span><span style="color: #C9D1D9">[</span><span style="color: #A5D6FF">&#39;size&#39;</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">prefixIcon</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">Icon</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">suffixIcon</span><span style="color: #FF7B72">?:</span><span style="color: #C9D1D9"> </span><span style="color: #FFA657">Icon</span></span>\n<span class="line"><span style="color: #C9D1D9">}</span></span>\n<span class="line"></span>\n<span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> {</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">variant</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;default&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">size</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #A5D6FF">&#39;default&#39;</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">isDisabled</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">false</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">isLoading</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">false</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">prefixIcon</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #79C0FF">suffixIcon</span><span style="color: #C9D1D9">,</span></span>\n<span class="line"><span style="color: #C9D1D9">} </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">defineProps</span><span style="color: #C9D1D9">&lt;</span><span style="color: #FFA657">Props</span><span style="color: #C9D1D9">&gt;()</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n<h4 id="emits" tabindex="-1">Emits <a class="header-anchor" href="#emits" aria-hidden="true">#</a></h4>\n<p>Emits will use the new 3.3 syntax.</p>\n<pre><code class="language-ts"><div class="htw-relative htw-not-prose __histoire-code"><div class="htw-absolute htw-top-0 htw-right-0 htw-text-xs htw-text-white/40">ts</div><pre class="shiki github-dark" style="background-color: #0d1117"><code><span class="line"><span style="color: #FF7B72">const</span><span style="color: #C9D1D9"> </span><span style="color: #79C0FF">emits</span><span style="color: #C9D1D9"> </span><span style="color: #FF7B72">=</span><span style="color: #C9D1D9"> </span><span style="color: #D2A8FF">defineEmits</span><span style="color: #C9D1D9">&lt;{</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">click</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> [</span><span style="color: #FFA657">event</span><span style="color: #C9D1D9">: </span><span style="color: #FFA657">HTMLClickEvent</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">  </span><span style="color: #FFA657">approve</span><span style="color: #FF7B72">:</span><span style="color: #C9D1D9"> [</span><span style="color: #FFA657">approvedItem</span><span style="color: #C9D1D9">: </span><span style="color: #FFA657">ApprovedItem</span><span style="color: #C9D1D9">]</span></span>\n<span class="line"><span style="color: #C9D1D9">}&gt;</span></span>\n<span class="line"></span></code></pre></div></code></pre>\n<h4 id="naming" tabindex="-1">Naming <a class="header-anchor" href="#naming" aria-hidden="true">#</a></h4>\n<ul>\n<li><b>Booleans</b>\n<ul>\n<li>Booleans will never be negative. E.g. isButtonNotHidden =&gt; isButtonShown.</li>\n<li>Default value of boolean props will always be false.</li>\n<li>Whenever possible, prefix a boolean with is / has / ... .</li>\n</ul>\n</li>\n<li><b>Emits</b>\n<ul>\n<li>Names will simply be what it is. E.g approve / decline / ... .</li>\n<li>Whenever an event is native, try to handle it like it natively would.</li>\n</ul>\n</li>\n<li><b>Files</b>\n<ul>\n<li>Style ts files will be suffixed with <code>.style.ts</code></li>\n<li>Story files will be suffixed with <code>.story.vue</code></li>\n<li>Test files will be suffixed with <code>.test.ts</code></li>\n</ul>\n</li>\n</ul>\n<h3 id="styling-with-cva-and-twmerge" tabindex="-1">Styling with cva and twMerge <a class="header-anchor" href="#styling-with-cva-and-twmerge" aria-hidden="true">#</a></h3>\n<p>Whenever a component has style variants, they should be made in a <code>.style.ts</code> file with cva. E.g. <code>appButton.style.ts</code>.\nLook at the <a href="https://beta.cva.style/docs/getting-started/whats-new" target="_blank">documentation</a> and already existing components. Using it correctly will manage typing and merging your tailwind classes.</p>\n<h2 id="story" tabindex="-1">Story <a class="header-anchor" href="#story" aria-hidden="true">#</a></h2>\n<p>Every component should have a <code>.story.vue</code> file associated with it. This story should be a single component with controls where you can select every variant.</p>\n<h2 id="tests" tabindex="-1">Tests <a class="header-anchor" href="#tests" aria-hidden="true">#</a></h2>\n<p>Writing tests is optional for now. Next quarter we are looking at it more closely, though if you want to experiment and try it, you are always welcome. Tests will be written in <code>vitest</code>.</p>\n';
const frontmatter = { "group": "contributing", "icon": "carbon:document-add", "title": "Making Components" };
const relativePath = "docs/contributing/Components.story.md";
export {
  frontmatter,
  html,
  relativePath
};
