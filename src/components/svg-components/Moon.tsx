// import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M22.386 12.003a1 1 0 0 0-1.151.28c-.928 1.105-2.506 1.62-4.968 1.62-3.814 0-6.179-1.03-6.179-6.158 0-2.397.532-4.019 1.626-4.957a1 1 0 0 0 .269-1.149.979.979 0 0 0-1.015-.604A10.952 10.952 0 0 0 1 11.978c0 6.062 4.944 10.993 11.022 10.993 5.72 0 10.438-4.278 10.973-9.951a.999.999 0 0 0-.609-1.017Z" />
  </svg>
)
export default SvgComponent
