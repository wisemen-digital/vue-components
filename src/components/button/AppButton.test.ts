import { cleanup, fireEvent, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppButton from '@/components/button/AppButton.vue'

describe('appButton click events', () => {
  it('appButton emits click', async () => {
    const button = render(AppButton)
    const clickable = await button.findByRole('button') as HTMLButtonElement
    await fireEvent.click(clickable)
    expect(button.emitted('click')).toBeTruthy()
    expect(clickable.disabled).toBe(false)
    cleanup()
  })

  it('appButton doesnt emit click when disabled', async () => {
    const button = render(AppButton, {
      props: {
        isDisabled: true,
      },
    })
    const clickable = await button.findByRole('button') as HTMLButtonElement
    expect(clickable.disabled).toBe(true)
    cleanup()
  })

  it('appButton doesnt emit click when loading', async () => {
    const button = render(AppButton, {
      props: {
        isLoading: true,
      },
    })
    const clickable = await button.findByRole('button') as HTMLButtonElement
    expect(clickable.disabled).toBe(true)
    cleanup()
  })
})
