import { computed } from 'vue'
import { BTN_SIZE, BTN_VARIANT } from '@/enums/btn'

interface IProps {
  variant: BTN_VARIANT
  size: BTN_SIZE
  stretch?: boolean
  loading?: boolean
}

export default function useBtnClass(props: IProps) {
  const btnClass = computed(() => {
    return [
      typeClass(props),
      sizeClass(props),
      'flex flex-row items-center justify-center',
      'rounded-[8px] py-8 transition-all relative',
      'disabled:cursor-not-allowed',
      'cursor-pointer',
    ]
  })

  const btnContentClass = computed(() => [
    'flex flex-row items-center justify-center',
    contentClass(props),
  ])

  return {
    btnClass,
    btnContentClass,
  }
}

function typeClass(props: IProps) {
  switch (props.variant) {
    case BTN_VARIANT.SECONDARY:
      return secondaryClass()
    case BTN_VARIANT.TERTIARY:
      return tertiaryClass()
    case BTN_VARIANT.GREEN:
      return greenClass()
    case BTN_VARIANT.TRANSPARENT:
      return transparentClass()
    case BTN_VARIANT.PRIMARY:
    default:
      return primaryClass()
  }
}

function primaryClass() {
  return 'bg-lich-700 text-lich-100 hover:bg-lich-500 hover:text-lich-100 active:bg-lich-500 active:text-lich-100 disabled:bg-moss-400 disabled:text-lich-100 disabled:opacity-50'
}

function secondaryClass() {
  return 'border border-[2px] border-moss-400 text-moss-400 hover:bg-moss-300 hover:text-lich-100 active:bg-moss-300 active:text-lich-100 disabled:bg-moss-400 disabled:text-lich-100 disabled:opacity-50'
}

function tertiaryClass() {
  return 'bg-moss-600 text-moss-200 hover:bg-moss-500 hover:text-lich-100 active:bg-moss-500 active:text-lich-100 disabled:bg-moss-600 disabled:text-lich-100 disabled:opacity-50'
}

function greenClass() {
  return 'bg-green-600 text-moss-700 hover:bg-green-500 hover:text-moss-700 active:bg-green-500 active:text-moss-700 disabled:bg-moss-400 disabled:text-lich-100 disabled:opacity-50'
}

function transparentClass() {
  return 'text-moss-200 hover:text-lich-100 hover:bg-moss-600 active:text-lich-100 disabled:bg-transparent disabled:text-lich-100 disabled:opacity-50'
}

function sizeClass({ stretch, size }: IProps) {
  return [
    stretch ? 'w-full' : 'w-fit',
    size === BTN_SIZE.LARGE ? 'px-[24px] h-[48px] text-[24px] font-bold' : '',
    size === BTN_SIZE.MEDIUM
      ? 'px-[12px] h-[40px] text-[14px] font-bold'
      : '',
    size === BTN_SIZE.SMALL ? 'px-[10px] h-[32px] text-[12px] font-bold' : '',
  ]
}

function contentClass({ size }: IProps) {
  switch (size) {
    case BTN_SIZE.LARGE:
      return 'gap-8'
    case BTN_SIZE.MEDIUM:
    case BTN_SIZE.SMALL:
    default:
      return 'gap-4'
  }
}
