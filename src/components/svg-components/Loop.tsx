import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={512}
    height={512}
    enableBackground = "new 0 0 513.749 513.749"
    viewBox="0 0 513.749 513.749"
    {...props}
    >
    <path d="m504.352 459.061-99.435-99.477c74.402-99.427 54.115-240.344-45.312-314.746S119.261-9.277 44.859 90.15-9.256 330.494 90.171 404.896c79.868 59.766 189.565 59.766 269.434 0l99.477 99.477c12.501 12.501 32.769 12.501 45.269 0 12.501-12.501 12.501-32.769 0-45.269l.001-.043zm-278.635-73.365c-88.366 0-160-71.634-160-160s71.634-160 160-160 160 71.634 160 160c-.094 88.326-71.673 159.906-160 160z" 
    fill="currentColor"
    />
  </svg>
)
export default SvgComponent;