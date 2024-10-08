// @ts-nocheck
import { PureComponent } from 'preact/compat'
import { Data, I18n } from '../../config'
import Icons from '../../icons'

const THEME_ICONS = {
  light: 'outline',
  dark: 'solid',
}

export default class Navigation extends PureComponent {
  constructor() {
    super()

    console.log(Data.categories)

    this.frequentCategory = Data.categories.find(
      (category) => category.id === 'frequent',
    )

    console.log(this.frequentCategory)

    this.categories = Data.categories.filter((category) => {
      return !category.target && category.id !== 'frequent'
    })

    this.state = {
      categoryId: this.categories[0].id,
    }
  }

  renderIcon(category) {
    const { icon } = category
    if (icon) {
      if (icon.svg) {
        return (
          <span
            class="flex"
            dangerouslySetInnerHTML={{ __html: icon.svg }}
          ></span>
        )
      }

      if (icon.src) {
        return <img src={icon.src} />
      }
    }

    const categoryIcons =
      Icons.categories[category.id] || Icons.categories.custom

    const style =
      this.props.icons == 'auto'
        ? THEME_ICONS[this.props.theme]
        : this.props.icons
    return categoryIcons[style] || categoryIcons
  }

  renderFrequentIcon = () => {
    const title =
      this.frequentCategory.name || I18n.categories[this.frequentCategory.id]
    const selected =
      !this.props.unfocused && this.frequentCategory.id == this.state.categoryId

    return (
      <button
        aria-label={title}
        aria-selected={selected || undefined}
        title={title}
        type="button"
        class="flex flex-center"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {
          this.props.onClick({ category: this.frequentCategory, i: 0 })
        }}
      >
        {this.renderIcon(this.frequentCategory)}
      </button>
    )
  }

  render() {
    return (
      <nav
        id="nav"
        class={`${this.props.fixedNav ? 'fixed-nav' : ''}`}
        data-position={this.props.position}
        dir={this.props.dir}
        style={this.props?.style}
      >
        <div class="flex flex-middle flex-between relative">
          {this.props.renderSkinToneButton()}
          <hr className="category-separator" />
          {this.renderFrequentIcon()}
          {this.categories.map((category, i) => {
            const title = category.name || I18n.categories[category.id]
            const selected =
              !this.props.unfocused && category.id == this.state.categoryId

            return (
              <button
                aria-label={title}
                aria-selected={selected || undefined}
                title={title}
                type="button"
                class="flex flex-center"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  this.props.onClick({ category, i: i + 1 })
                }}
              >
                {this.renderIcon(category)}
              </button>
            )
          })}
        </div>
      </nav>
    )
  }
}
