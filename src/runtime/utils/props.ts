export interface Props {
  showLabel?: boolean
  showPercentage?: boolean
  dark?: boolean
  colored?: boolean
}

export default {
  /**
   * If you need the remaining time label close to the battery icon
   * @type boolean
   */
  showLabel: {
    type: Boolean,
    default: false
  },
  /**
   * If you need to show percentage in battery icon (and label)
   * @type boolean
   */
  showPercentage: {
    type: Boolean,
    default: false
  },
  /**
   * Default battery icn border is white, choose dark if you need black
   * @type boolean
   */
  dark: {
    type: Boolean,
    default: false
  },
  /**
   * If you need to show green, yellow and red color in battery icon
   * @type boolean
   */
  colored: {
    type: Boolean,
    default: true
  }
}
