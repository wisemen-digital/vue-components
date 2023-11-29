<ComboboxButton
v-else
key="button"
:disabled="isDisabled"
class="relative w-full overflow-hidden truncate whitespace-nowrap rounded border border-border bg-input px-4 py-2 text-left placeholder:transition-all placeholder:duration-300 focus:placeholder:translate-x-1 focus:placeholder:opacity-0"
>
{{ hasValue ? getDisplayValue(model) : t('labels.select') }}
</ComboboxButton>
