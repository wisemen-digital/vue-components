import { d as defineComponent, o as openBlock, b as createElementBlock, a9 as renderSlot, n as normalizeClass, m as withKeys, c as computed, q as createBlock, f as unref, I as Icon, e as createVNode, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, h as createCommentVNode, u as useCssVars, r as ref, a1 as toRefs, a5 as useRouter, w as withCtx, Y as markRaw, k as watch, bN as useFocus, bO as refDebounced, y as withDirectives, aa as vModelText, a8 as withModifiers, _ as __vitePreload, bP as flexsearch_bundleExports } from "./vendor-tldIp9D4.js";
import { u as useStoryStore } from "./story-3Pl9P1co.js";
import { B as BaseEmpty } from "./BaseEmpty.vue-m6CUi0rQ.js";
import { o as onKeyboardShortcut, u as useCommandStore } from "./bundle-main-cOk23vYy.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.vue2-fzJQt6ia.js";
import "./GenericMountStory.vue2-FwUlWIGx.js";
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
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"k":[0,1,42],"ko":[0,1],"kol":[0,1],"kolo":[0,1],"kolor":[0,1],"a":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"ap":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"e":[41],"em":[41],"emt":[41],"emtr":[41],"emtro":[41],"emtrot":[41],"emtroto":[41],"emtrotok":[41],"emtrotokt":[41],"emtrotokte":[41],"emtrotokteo":[41],"emtrotokteom":[41],"ka":[42],"kam":[42],"kamk":[42],"kamke":[42],"kamkes":[42],"kamkese":[42],"kamkeset":[42],"m":[43],"ma":[43],"mak":[43],"make":[43],"makem":[43],"makemk":[43],"r":[44],"re":[44],"rek":[44],"reke":[44],"rekes":[44],"rekest":[44],"rekeste":[44],"rekester":[44],"rekestere":[44],"rekesterem":[44],"rekesteremk":[44],"t":[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"ta":[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"tal":[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"talf":[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"talfe":[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"talfem":[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61],"talfemt":[45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61]},{"ke":[0,1],"kem":[0,1],"keme":[0,1],"kemer":[0,1],"kemera":[0,1],"kemerat":[0,1],"kemerato":[0,1],"kemerator":[0,1],"p":[2,3,22,23,46,48,49,57,58],"po":[2,3,22,23,48,57,58],"pot":[2,3],"poto":[2,3],"potom":[2,3],"k":[4,5,43,44],"ka":[4,5],"kar":[4,5],"kart":[4,5],"t":[6,7,8,9,33,34,35,36,37,38,39,40],"ta":[6,7,8,9,33,34],"tat":[6,7,8,9],"tate":[6,7,8,9],"tatep":[6,7],"tatepe":[6,7],"tatepek":[6,7],"tatepeke":[6,7],"tatepeker":[6,7],"f":[10,11,14,15,16,17,24,25,28,29,51,52,53,59,61],"fo":[10,11,14,15,16,17,24,25,28,29,51,52,53,61],"for":[10,11,14,15,16,17,24,25,28,29],"form":[10,11,14,15,16,17,24,25,28,29],"e":[12,13,18,19,60],"ek":[12,13,60],"eko":[12,13],"ekom":[12,13],"em":[18,19],"emp":[18,19],"empo":[18,19],"empot":[18,19],"m":[20,21,50],"mo":[20,21],"mot":[20,21],"mota":[20,21],"motal":[20,21],"pop":[22,23],"popo":[22,23],"popof":[22,23],"popofe":[22,23],"popofer":[22,23],"s":[26,27,30,31,32],"se":[26,27],"sel":[26,27],"sele":[26,27],"selek":[26,27],"selekt":[26,27],"sf":[30,31,32],"sfe":[30,31,32],"sfet":[30,31,32],"sfetk":[30,31,32],"tap":[33,34],"taps":[33,34],"te":[35,36,47],"tes":[35,36,47],"test":[35,36,47],"to":[37,38,39,40],"toa":[37,38],"toas":[37,38],"toast":[37,38],"tol":[39,40],"tolt":[39,40],"tolte":[39,40],"toltep":[39,40],"ko":[43,44],"kom":[43,44],"komp":[43,44],"kompo":[43,44],"kompom":[43,44],"kompome":[43,44],"kompomem":[43,44],"kompomemt":[43,44],"kompomemts":[43,44],"pa":[46,49],"pak":[46],"pakr":[46],"pakro":[46],"pakrom":[46],"pakromt":[46],"por":[48,57,58],"port":[48,57,58],"porte":[48,57,58],"porter":[48,57,58],"pat":[49],"pate":[49],"patem":[49],"patemk":[49],"ma":[50],"mar":[50],"mark":[50],"marke":[50],"markem":[50],"fom":[51,52,53],"fomt":[51,52,53],"l":[54,55],"le":[54,55],"let":[54],"lete":[54],"leter":[54],"lem":[55],"leme":[55],"tr":[56],"tro":[56],"trop":[56],"fe":[59],"fet":[59],"ekt":[60],"fol":[61]},{"t":[1,3,5,10,11,13,16,17,19,21,23,27,31],"te":[1,3,5,7,13,16,17,19,21,23,27,31,34,38,40],"tef":[1,3,5,7,13,19,21,23,27,31,34,36,38,40],"tefa":[1,3,5,7,13,19,21,23,27,31,34,36,38,40],"tefao":[1,3,5,7,13,19,21,23,27,31,34,36,38,40],"tefaol":[1,3,5,7,13,19,21,23,27,31,34,36,38,40],"tefaolt":[1,3,5,7,13,19,21,23,27,31,34,36,38,40],"s":[8,9,24,25,28,29,51,54,56],"se":[8,9,24,25,51],"sel":[8,9,24,25],"sele":[8,9,24,25],"selek":[8,9,24,25],"selekt":[8,9,24,25],"selekto":[8,9],"selektor":[8,9],"ta":[10,11],"tat":[10,11],"tate":[10,11],"e":[14,15,55],"em":[14,15],"emp":[14,15],"empo":[14,15],"empot":[14,15],"tes":[16,17],"test":[16,17],"testa":[16,17],"testar":[16,17],"testare":[16,17],"testarea":[16,17],"sf":[28,29],"sfe":[28,29],"sfet":[28,29],"sfetk":[28,29],"k":[32,46,47,48,61],"ko":[32,46,47,48,61],"kos":[32],"kost":[32],"kosto":[32],"kostom":[32],"kol":[46,47,48],"kolo":[46,47,48],"kolor":[46,47,48],"ses":[51],"sese":[51],"fe":[52,58],"fek":[52],"fekt":[52],"fa":[53],"fam":[53],"fame":[53],"famel":[53],"famele":[53],"sp":[54],"spa":[54],"spak":[54],"spake":[54],"spakem":[54],"spakemk":[54],"ek":[55],"ekt":[55],"sa":[56],"sat":[56],"sato":[56],"satof":[56],"r":[57],"ra":[57],"rat":[57],"rate":[57],"rateo":[57],"rateos":[57],"f":[58],"fet":[58],"kom":[61],"komf":[61],"komfe":[61],"komfek":[61]},{"te":[9,15,25,29],"tef":[9,15,17,25,29],"tefa":[9,15,17,25,29],"tefao":[9,15,17,25,29],"tefaol":[9,15,17,25,29],"tefaolt":[9,15,17,25,29],"p":[10,11],"pe":[10,11],"pek":[10,11],"peke":[10,11],"peker":[10,11],"t":[15,25,29]},{"te":[11],"tef":[11],"tefa":[11],"tefao":[11],"tefaol":[11],"tefaolt":[11]},{},{},{},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "src-color-generator-views-colorgenerator-story-vue", "kind": "story" }, "1": { "id": "src-color-generator-views-colorgenerator-story-vue:_default", "kind": "variant" }, "2": { "id": "src-components-button-appbutton-story-vue", "kind": "story" }, "3": { "id": "src-components-button-appbutton-story-vue:src-components-button-appbutton-story-vue-0", "kind": "variant" }, "4": { "id": "src-components-card-appcard-story-vue", "kind": "story" }, "5": { "id": "src-components-card-appcard-story-vue:src-components-card-appcard-story-vue-0", "kind": "variant" }, "6": { "id": "src-components-datepicker-appdatepicker-story-vue", "kind": "story" }, "7": { "id": "src-components-datepicker-appdatepicker-story-vue:src-components-datepicker-appdatepicker-story-vue-0", "kind": "variant" }, "8": { "id": "src-components-datepicker-appdateselector-story-vue", "kind": "story" }, "9": { "id": "src-components-datepicker-appdateselector-story-vue:src-components-datepicker-appdateselector-story-vue-0", "kind": "variant" }, "10": { "id": "src-components-datepicker-appformdatepicker-story-vue", "kind": "story" }, "11": { "id": "src-components-datepicker-appformdatepicker-story-vue:src-components-datepicker-appformdatepicker-story-vue-0", "kind": "variant" }, "12": { "id": "src-components-icon-appicon-story-vue", "kind": "story" }, "13": { "id": "src-components-icon-appicon-story-vue:src-components-icon-appicon-story-vue-0", "kind": "variant" }, "14": { "id": "src-components-input-appforminput-story-vue", "kind": "story" }, "15": { "id": "src-components-input-appforminput-story-vue:src-components-input-appforminput-story-vue-0", "kind": "variant" }, "16": { "id": "src-components-input-appformtextarea-story-vue", "kind": "story" }, "17": { "id": "src-components-input-appformtextarea-story-vue:src-components-input-appformtextarea-story-vue-0", "kind": "variant" }, "18": { "id": "src-components-input-appinput-story-vue", "kind": "story" }, "19": { "id": "src-components-input-appinput-story-vue:src-components-input-appinput-story-vue-0", "kind": "variant" }, "20": { "id": "src-components-modal-appmodal-story-vue", "kind": "story" }, "21": { "id": "src-components-modal-appmodal-story-vue:src-components-modal-appmodal-story-vue-0", "kind": "variant" }, "22": { "id": "src-components-popover-apppopover-story-vue", "kind": "story" }, "23": { "id": "src-components-popover-apppopover-story-vue:src-components-popover-apppopover-story-vue-0", "kind": "variant" }, "24": { "id": "src-components-select-appformselect-story-vue", "kind": "story" }, "25": { "id": "src-components-select-appformselect-story-vue:src-components-select-appformselect-story-vue-0", "kind": "variant" }, "26": { "id": "src-components-select-appselect-story-vue", "kind": "story" }, "27": { "id": "src-components-select-appselect-story-vue:src-components-select-appselect-story-vue-0", "kind": "variant" }, "28": { "id": "src-components-switch-appformswitch-story-vue", "kind": "story" }, "29": { "id": "src-components-switch-appformswitch-story-vue:src-components-switch-appformswitch-story-vue-0", "kind": "variant" }, "30": { "id": "src-components-switch-appswitch-story-vue", "kind": "story" }, "31": { "id": "src-components-switch-appswitch-story-vue:src-components-switch-appswitch-story-vue-0", "kind": "variant" }, "32": { "id": "src-components-switch-appswitch-story-vue:src-components-switch-appswitch-story-vue-1", "kind": "variant" }, "33": { "id": "src-components-tabs-apptabs-story-vue", "kind": "story" }, "34": { "id": "src-components-tabs-apptabs-story-vue:src-components-tabs-apptabs-story-vue-0", "kind": "variant" }, "35": { "id": "src-components-text-apptext-story-vue", "kind": "story" }, "36": { "id": "src-components-text-apptext-story-vue:src-components-text-apptext-story-vue-0", "kind": "variant" }, "37": { "id": "src-components-toast-apptoast-story-vue", "kind": "story" }, "38": { "id": "src-components-toast-apptoast-story-vue:src-components-toast-apptoast-story-vue-0", "kind": "variant" }, "39": { "id": "src-components-tooltip-apptooltip-story-vue", "kind": "story" }, "40": { "id": "src-components-tooltip-apptooltip-story-vue:src-components-tooltip-apptooltip-story-vue-0", "kind": "variant" }, "41": { "id": "docs-introduction-story-js", "kind": "story" }, "42": { "id": "docs-contributing-changeset-story-js", "kind": "story" }, "43": { "id": "docs-contributing-components-story-js", "kind": "story" }, "44": { "id": "docs-contributing-registering-story-js", "kind": "story" }, "45": { "id": "tailwind", "kind": "story" }, "46": { "id": "tailwind:background-color", "kind": "variant" }, "47": { "id": "tailwind:text-color", "kind": "variant" }, "48": { "id": "tailwind:border-color", "kind": "variant" }, "49": { "id": "tailwind:padding", "kind": "variant" }, "50": { "id": "tailwind:margin", "kind": "variant" }, "51": { "id": "tailwind:font-size", "kind": "variant" }, "52": { "id": "tailwind:font-weight", "kind": "variant" }, "53": { "id": "tailwind:font-family", "kind": "variant" }, "54": { "id": "tailwind:letter-spacing", "kind": "variant" }, "55": { "id": "tailwind:line-height", "kind": "variant" }, "56": { "id": "tailwind:drop-shadow", "kind": "variant" }, "57": { "id": "tailwind:border-radius", "kind": "variant" }, "58": { "id": "tailwind:border-width", "kind": "variant" }, "59": { "id": "tailwind:width", "kind": "variant" }, "60": { "id": "tailwind:height", "kind": "variant" }, "61": { "id": "tailwind:full-config", "kind": "variant" } } };
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
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data-s-H8gOeU.js"), true ? __vite__mapDeps([0,1]) : void 0);
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
    __vite__mapDeps.viteFileDeps = ["assets/search-docs-data-s-H8gOeU.js","assets/vendor-tldIp9D4.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
