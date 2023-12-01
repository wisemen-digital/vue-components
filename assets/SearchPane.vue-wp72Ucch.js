import { d as defineComponent, o as openBlock, b as createElementBlock, a9 as renderSlot, n as normalizeClass, m as withKeys, c as computed, q as createBlock, f as unref, I as Icon, e as createVNode, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, r as ref, a1 as toRefs, a5 as useRouter, w as withCtx, Y as markRaw, k as watch, bq as useFocus, br as refDebounced, y as withDirectives, aa as vModelText, a8 as withModifiers, _ as __vitePreload, bs as flexsearch_bundleExports } from "./vendor-KTSXO9NW.js";
import { u as useStoryStore } from "./story-SPcucq5P.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-VtIf8wpZ.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-_EJC8eS0.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-mlq3Uyff.js";
import "./GenericMountStory.vue2-uhrgi-qz.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[àáâãäå]"), regex_e = regex("[èéêë]"), regex_i = regex("[ìíîï]"), regex_o = regex("[òóôõöő]"), regex_u = regex("[ùúûüű]"), regex_y = regex("[ýŷÿ]"), regex_n = regex("ñ"), regex_c = regex("[çc]"), regex_s = regex("ß"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", ß: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
const charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
const language = { filter, stemmer, matcher };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseListItem",
  props: {
    isActive: { type: Boolean }
  },
  emits: ["navigate"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleNavigate() {
      emit("navigate");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(["istoire-base-list-ite htw-flex htw-items-center htw-gap-2 htw-text-gray-900 dark:htw-text-gray-100", [
          _ctx.$attrs.class,
          _ctx.isActive ? "active htw-bg-primary-500 hover:htw-bg-primary-600 htw-text-white dark:htw-text-black" : "hover:htw-bg-primary-100 dark:hover:htw-bg-primary-900"
        ]]),
        onClick: _cache[0] || (_cache[0] = ($event) => handleNavigate()),
        onKeyup: [
          _cache[1] || (_cache[1] = withKeys(($event) => handleNavigate(), ["enter"])),
          _cache[2] || (_cache[2] = withKeys(($event) => handleNavigate(), ["space"]))
        ]
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 34);
    };
  }
});
const _hoisted_1$3 = ["src", "alt"];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "BaseIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    const isUrl = computed(() => props.icon.startsWith("http") || props.icon.startsWith("data:image") || props.icon.startsWith(".") || props.icon.startsWith("/"));
    return (_ctx, _cache) => {
      return isUrl.value ? (openBlock(), createElementBlock("img", {
        key: 0,
        src: _ctx.icon,
        alt: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, _hoisted_1$3)) : (openBlock(), createBlock(unref(Icon), {
        key: 1,
        icon: _ctx.icon,
        class: "histoire-base-icon"
      }, null, 8, ["icon"]));
    };
  }
});
const BaseIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-74182813"]]);
const _hoisted_1$2 = { class: "htw-flex-1" };
const _hoisted_2 = { class: "htw-flex" };
const _hoisted_3 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_4 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SearchItemContent",
  props: {
    result: {},
    selected: { type: Boolean }
  },
  setup(__props) {
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant",
      command: "Command"
    };
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(BaseIcon, {
          icon: _ctx.result.icon ?? defaultIcons[_ctx.result.kind],
          class: normalizeClass(["htw-w-4 htw-h-4", [
            !_ctx.selected ? [
              _ctx.result.iconColor ? "bind-icon-color" : {
                "htw-text-primary-500": _ctx.result.kind === "story",
                "htw-text-gray-500": _ctx.result.kind === "variant"
              }
            ] : [],
            {
              "colorize-black": _ctx.selected
            }
          ]])
        }, null, 8, ["icon", "class"]),
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2, [
            createTextVNode(toDisplayString(_ctx.result.title) + " ", 1),
            createBaseVNode("span", _hoisted_3, toDisplayString(kindLabels[_ctx.result.kind]), 1)
          ]),
          ((_a = _ctx.result.path) == null ? void 0 : _a.length) ? (openBlock(), createElementBlock("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.result.path, (p, index) => {
              return openBlock(), createElementBlock("div", {
                key: index,
                class: "htw-flex htw-items-center htw-gap-0.5"
              }, [
                index > 0 ? (openBlock(), createBlock(unref(Icon), {
                  key: 0,
                  icon: "carbon:chevron-right",
                  class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                })) : createCommentVNode("", true),
                createBaseVNode("span", null, toDisplayString(p), 1)
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 64);
    };
  }
});
const _hoisted_1$1 = ["data-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "a8c1277e": __props.result.iconColor
    }));
    const props = __props;
    const emit = __emit;
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      action();
    });
    function action(fromClick = false) {
      if ("route" in props.result && !fromClick) {
        router.push(props.result.route);
      }
      if ("onActivate" in props.result) {
        props.result.onActivate();
      }
      emit("close");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        class: "histoire-search-item",
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        "route" in __props.result ? (openBlock(), createBlock(BaseListItemLink, {
          key: 0,
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["to", "is-active"])) : createCommentVNode("", true),
        "onActivate" in __props.result ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[1] || (_cache[1] = ($event) => action(true))
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2, {
              result: __props.result,
              selected: unref(selected)
            }, null, 8, ["result", "selected"])
          ]),
          _: 1
        }, 8, ["is-active"])) : createCommentVNode("", true)
      ], 8, _hoisted_1$1);
    };
  }
});
const SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6c8e9661"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"k":[0,1,29],"ko":[0,1],"kol":[0,1],"kolo":[0,1],"kolor":[0,1],"a":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],"ap":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],"e":[28],"em":[28],"emt":[28],"emtr":[28],"emtro":[28],"emtrot":[28],"emtroto":[28],"emtrotok":[28],"emtrotokt":[28],"emtrotokte":[28],"emtrotokteo":[28],"emtrotokteom":[28],"ka":[29],"kam":[29],"kamk":[29],"kamke":[29],"kamkes":[29],"kamkese":[29],"kamkeset":[29],"m":[30],"ma":[30],"mak":[30],"make":[30],"makem":[30],"makemk":[30],"r":[31],"re":[31],"rek":[31],"reke":[31],"rekes":[31],"rekest":[31],"rekeste":[31],"rekester":[31],"rekestere":[31],"rekesterem":[31],"rekesteremk":[31],"t":[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"ta":[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"tal":[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"talf":[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"talfe":[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"talfem":[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],"talfemt":[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]},{"ke":[0,1],"kem":[0,1],"keme":[0,1],"kemer":[0,1],"kemera":[0,1],"kemerat":[0,1],"kemerato":[0,1],"kemerator":[0,1],"p":[2,3,16,17,33,35,36,44,45],"po":[2,3,16,17,35,44,45],"pot":[2,3],"poto":[2,3],"potom":[2,3],"k":[4,5,30,31],"ka":[4,5],"kar":[4,5],"kart":[4,5],"e":[6,7,12,13,47],"ek":[6,7,47],"eko":[6,7],"ekom":[6,7],"f":[8,9,10,11,18,19,22,23,38,39,40,46,48],"fo":[8,9,10,11,18,19,22,23,38,39,40,48],"for":[8,9,10,11,18,19,22,23],"form":[8,9,10,11,18,19,22,23],"em":[12,13],"emp":[12,13],"empo":[12,13],"empot":[12,13],"m":[14,15,37],"mo":[14,15],"mot":[14,15],"mota":[14,15],"motal":[14,15],"pop":[16,17],"popo":[16,17],"popof":[16,17],"popofe":[16,17],"popofer":[16,17],"s":[20,21,24,25],"se":[20,21],"sel":[20,21],"sele":[20,21],"selek":[20,21],"selekt":[20,21],"sf":[24,25],"sfe":[24,25],"sfet":[24,25],"sfetk":[24,25],"t":[26,27],"te":[26,27,34],"tes":[26,27,34],"test":[26,27,34],"ko":[30,31],"kom":[30,31],"komp":[30,31],"kompo":[30,31],"kompom":[30,31],"kompome":[30,31],"kompomem":[30,31],"kompomemt":[30,31],"kompomemts":[30,31],"pa":[33,36],"pak":[33],"pakr":[33],"pakro":[33],"pakrom":[33],"pakromt":[33],"por":[35,44,45],"port":[35,44,45],"porte":[35,44,45],"porter":[35,44,45],"pat":[36],"pate":[36],"patem":[36],"patemk":[36],"ma":[37],"mar":[37],"mark":[37],"marke":[37],"markem":[37],"fom":[38,39,40],"fomt":[38,39,40],"l":[41,42],"le":[41,42],"let":[41],"lete":[41],"leter":[41],"lem":[42],"leme":[42],"tr":[43],"tro":[43],"trop":[43],"fe":[46],"fet":[46],"ekt":[47],"fol":[48]},{"t":[1,3,5,7,10,11,13,15,17,21,25],"te":[1,3,5,7,10,11,13,15,17,21,25],"tef":[1,3,5,7,13,15,17,21,25,27],"tefa":[1,3,5,7,13,15,17,21,25,27],"tefao":[1,3,5,7,13,15,17,21,25,27],"tefaol":[1,3,5,7,13,15,17,21,25,27],"tefaolt":[1,3,5,7,13,15,17,21,25,27],"e":[8,9,42],"em":[8,9],"emp":[8,9],"empo":[8,9],"empot":[8,9],"tes":[10,11],"test":[10,11],"testa":[10,11],"testar":[10,11],"testare":[10,11],"testarea":[10,11],"s":[18,19,22,23,38,41,43],"se":[18,19,38],"sel":[18,19],"sele":[18,19],"selek":[18,19],"selekt":[18,19],"sf":[22,23],"sfe":[22,23],"sfet":[22,23],"sfetk":[22,23],"k":[33,34,35,48],"ko":[33,34,35,48],"kol":[33,34,35],"kolo":[33,34,35],"kolor":[33,34,35],"ses":[38],"sese":[38],"fe":[39,45],"fek":[39],"fekt":[39],"fa":[40],"fam":[40],"fame":[40],"famel":[40],"famele":[40],"sp":[41],"spa":[41],"spak":[41],"spake":[41],"spakem":[41],"spakemk":[41],"ek":[42],"ekt":[42],"sa":[43],"sat":[43],"sato":[43],"satof":[43],"r":[44],"ra":[44],"rat":[44],"rate":[44],"rateo":[44],"rateos":[44],"f":[45],"fet":[45],"kom":[48],"komf":[48],"komfe":[48],"komfek":[48]},{"t":[9,19,23],"te":[9,19,23],"tef":[9,11,19,23],"tefa":[9,11,19,23],"tefao":[9,11,19,23],"tefaol":[9,11,19,23],"tefaolt":[9,11,19,23]},{},{},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-color-generator-views-colorgenerator-story-vue", "kind": "story" }, "1": { "id": "src-color-generator-views-colorgenerator-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-button-appbutton-story-vue", "kind": "story" }, "3": { "id": "src-components-button-appbutton-story-vue:src-components-button-appbutton-story-vue-0", "kind": "variant" }, "4": { "id": "src-components-card-appcard-story-vue", "kind": "story" }, "5": { "id": "src-components-card-appcard-story-vue:src-components-card-appcard-story-vue-0", "kind": "variant" }, "6": { "id": "src-components-icon-appicon-story-vue", "kind": "story" }, "7": { "id": "src-components-icon-appicon-story-vue:src-components-icon-appicon-story-vue-0", "kind": "variant" }, "8": { "id": "src-components-input-appforminput-story-vue", "kind": "story" }, "9": { "id": "src-components-input-appforminput-story-vue:src-components-input-appforminput-story-vue-0", "kind": "variant" }, "10": { "id": "src-components-input-appformtextarea-story-vue", "kind": "story" }, "11": { "id": "src-components-input-appformtextarea-story-vue:src-components-input-appformtextarea-story-vue-0", "kind": "variant" }, "12": { "id": "src-components-input-appinput-story-vue", "kind": "story" }, "13": { "id": "src-components-input-appinput-story-vue:src-components-input-appinput-story-vue-0", "kind": "variant" }, "14": { "id": "src-components-modal-appmodal-story-vue", "kind": "story" }, "15": { "id": "src-components-modal-appmodal-story-vue:src-components-modal-appmodal-story-vue-0", "kind": "variant" }, "16": { "id": "src-components-popover-apppopover-story-vue", "kind": "story" }, "17": { "id": "src-components-popover-apppopover-story-vue:src-components-popover-apppopover-story-vue-0", "kind": "variant" }, "18": { "id": "src-components-select-appformselect-story-vue", "kind": "story" }, "19": { "id": "src-components-select-appformselect-story-vue:src-components-select-appformselect-story-vue-0", "kind": "variant" }, "20": { "id": "src-components-select-appselect-story-vue", "kind": "story" }, "21": { "id": "src-components-select-appselect-story-vue:src-components-select-appselect-story-vue-0", "kind": "variant" }, "22": { "id": "src-components-switch-appformswitch-story-vue", "kind": "story" }, "23": { "id": "src-components-switch-appformswitch-story-vue:src-components-switch-appformswitch-story-vue-0", "kind": "variant" }, "24": { "id": "src-components-switch-appswitch-story-vue", "kind": "story" }, "25": { "id": "src-components-switch-appswitch-story-vue:src-components-switch-appswitch-story-vue-0", "kind": "variant" }, "26": { "id": "src-components-text-apptext-story-vue", "kind": "story" }, "27": { "id": "src-components-text-apptext-story-vue:src-components-text-apptext-story-vue-0", "kind": "variant" }, "28": { "id": "docs-introduction-story-js", "kind": "story" }, "29": { "id": "docs-contributing-changeset-story-js", "kind": "story" }, "30": { "id": "docs-contributing-components-story-js", "kind": "story" }, "31": { "id": "docs-contributing-registering-story-js", "kind": "story" }, "32": { "id": "tailwind", "kind": "story" }, "33": { "id": "tailwind:background-color", "kind": "variant" }, "34": { "id": "tailwind:text-color", "kind": "variant" }, "35": { "id": "tailwind:border-color", "kind": "variant" }, "36": { "id": "tailwind:padding", "kind": "variant" }, "37": { "id": "tailwind:margin", "kind": "variant" }, "38": { "id": "tailwind:font-size", "kind": "variant" }, "39": { "id": "tailwind:font-weight", "kind": "variant" }, "40": { "id": "tailwind:font-family", "kind": "variant" }, "41": { "id": "tailwind:letter-spacing", "kind": "variant" }, "42": { "id": "tailwind:line-height", "kind": "variant" }, "43": { "id": "tailwind:drop-shadow", "kind": "variant" }, "44": { "id": "tailwind:border-radius", "kind": "variant" }, "45": { "id": "tailwind:border-width", "kind": "variant" }, "46": { "id": "tailwind:width", "kind": "variant" }, "47": { "id": "tailwind:height", "kind": "variant" }, "48": { "id": "tailwind:full-config", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
function useSelection(list) {
  const selectedIndex = ref(0);
  watch(list, () => {
    selectedIndex.value = 0;
  });
  function selectNext() {
    selectedIndex.value++;
    if (selectedIndex.value > list.value.length - 1) {
      selectedIndex.value = 0;
    }
  }
  function selectPrevious() {
    selectedIndex.value--;
    if (selectedIndex.value < 0) {
      selectedIndex.value = list.value.length - 1;
    }
  }
  return {
    selectedIndex: computed(() => selectedIndex.value),
    selectNext,
    selectPrevious
  };
}
const _hoisted_1 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit: __emit }) {
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-jn5HBd17.js"), true ? __vite__mapDeps([0,1]) : void 0);
    const props = __props;
    const emit = __emit;
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundleExports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...story.file.path ?? [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor
      };
    }
    const commandResults = computed(() => {
      return [];
    });
    useCommandStore();
    const results = computed(() => {
      const list = [
        ...commandResults.value,
        ...titleResults.value
      ];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const {
      selectedIndex,
      selectNext,
      selectPrevious
    } = useSelection(results);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "histoire-search-pane htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => unref(selectNext)(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => unref(selectPrevious)(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !results.value.length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            createTextVNode(" No results ")
          ]),
          _: 1
        })) : results.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(results.value, (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === unref(selectedIndex),
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/search-docs-data-jn5HBd17.js","assets/vendor-KTSXO9NW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}