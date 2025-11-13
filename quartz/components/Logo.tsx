import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <a href={baseDir} class={classNames(displayClass, "logo")}>
      <img src="/static/logo.png" />
    </a>
  )
}

PageTitle.css = `
.logo, .logo > img {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
