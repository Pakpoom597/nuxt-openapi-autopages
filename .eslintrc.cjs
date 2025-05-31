module.exports = {
 root: true,
 env: {
   browser: true,
   node: true,
 },
 extends: [
   "@nuxtjs/eslint-config-typescript",
   "plugin:vue/essential",
   "plugin:vue/vue3-essential",
   "plugin:vue/vue3-strongly-recommended",
   "plugin:prettier/recommended",
   "plugin:yml/recommended",
   "plugin:jsonc/recommended-with-json",
 ],
 plugins: [],
 // Add your rules here:
 rules: {
   "vue/multi-word-component-names": "off",
   "vue/no-v-model-argument": "off",
   "vue/no-export-in-script-setup": "off",
   "object-shorthand": "off",
   "no-console": "error",
   "vue/block-order": [
     "error",
     {
       order: ["template", "script", "style"],
     },
   ],
   "vue/html-self-closing": [
     "error",
     {
       html: {
         void: "always",
         normal: "always",
         component: "always",
       },
       svg: "always",
       math: "always",
     },
   ],
   "vue/block-lang": [
     "error",
     {
       script: {
         lang: "ts",
       },
     },
   ],
   "vue/no-restricted-html-elements": [
     "warn",
     { element: "UForm", message: "Prefer use <T1UForm> instead" },
     { element: "UCheckbox", message: "Prefer use <T1UCheckbox> instead" },
     { element: "UFormGroup", message: "Prefer use <T1UFormGroup> instead" },
     { element: "UInput", message: "Prefer use <T1UInput> instead" },
     { element: "UInputMenu", message: "Prefer use <T1UInputMenu> instead" },
     { element: "URadio", message: "Prefer use <T1URadio> instead" },
     { element: "URadioGroup", message: "Prefer use <T1URadioGroup> instead" },
     { element: "USelect", message: "Prefer use <T1USelect> instead" },
     { element: "USelectMenu", message: "Prefer use <T1USelectMenu> instead" },
     { element: "UTextarea", message: "Prefer use <T1UTextarea> instead" },
     { element: "UToggle", message: "Prefer use <T1UToggle> instead" },
     { element: "UAccordion", message: "Prefer use <T1UAccordion> instead" },
     { element: "UButton", message: "Prefer use <T1UButton> instead" },
     { element: "UDropdown", message: "Prefer use <T1UDropdown> instead" },
     { element: "UMeter", message: "Prefer use <T1UMeter> instead" },
     { element: "UModal", message: "Prefer use <T1UModal> instead" },
     { element: "UProgress", message: "Prefer use <T1UProgress> instead" },
     { element: "UCard", message: "Prefer use <T1UCard> instead" },
     { element: "USkeleton", message: "Prefer use <T1USkeleton> instead" },
     { element: "UBreadcrumb", message: "Prefer use <T1UBreadcrumb> instead" },
     { element: "ULink", message: "Prefer use <T1ULink> instead" },
     { element: "UPopover", message: "Prefer use <T1UPopover> instead" },
     { element: "UTooltip", message: "Prefer use <T1UTooltip> instead" },
   ],
 },
 overrides: [
   {
     files: [
       "./components/**/*.vue",
       "./pages/**/*.vue",
       "./packages/**/core/ui/**/*.vue",
     ],
     rules: {
       "vue/no-restricted-html-elements": "off",
       "vue/multi-word-component-names": "off",
       "vue/no-v-model-argument": "off",
       "vue/no-export-in-script-setup": "off",
       "object-shorthand": "off",
       "no-console": "error",
       "vue/block-order": [
         "error",
         {
           order: ["template", "script", "style"],
         },
       ],
       "vue/html-self-closing": [
         "error",
         {
           html: {
             void: "always",
             normal: "always",
             component: "always",
           },
           svg: "always",
           math: "always",
         },
       ],
       "vue/block-lang": [
         "error",
         {
           script: {
             lang: "ts",
           },
         },
       ],
     },
   },
 ],
};
