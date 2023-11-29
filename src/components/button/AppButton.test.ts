import { cleanup, fireEvent, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import AppButton from '@/components/button/AppButton.vue'

describe('appButton click events', () => {
  it('appButton emits component:click', async () => {
    const button = render(AppButton)
    const clickable = await button.findByRole('button')
    await fireEvent.click(clickable)
    expect(button.emitted('component:click')).toBeTruthy()
    cleanup()
  })

  it('appButton doesnt emit component:click when disabled', async () => {
    const button = render(AppButton, {
      props: {
        isDisabled: true,
      },
    })
    const clickable = await button.findByRole('button')
    await fireEvent.click(clickable)
    expect(button.emitted('component:click')).toBeFalsy()
    cleanup()
  })

  it('appButton doesnt emit component:click when loading', async () => {
    const button = render(AppButton, {
      props: {
        isLoading: true,
      },
    })
    const clickable = await button.findByRole('button')
    await fireEvent.click(clickable)

    expect(button.emitted('component:click')).toBeFalsy()
    cleanup()
  })
})
