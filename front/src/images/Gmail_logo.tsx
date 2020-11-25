import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Gmail_logo() {
  return (
    <Svg width={71} height={71} viewBox="0 0 71 71" fill="none">
      <Path
        d="M12.176 55.768h8.618V34.874l-12.326-9.17V52.11c0 2.004 1.653 3.658 3.708 3.658z"
        fill="#4285F4"
      />
      <Path
        d="M50.256 55.768h8.618a3.7 3.7 0 003.708-3.708V25.704l-12.276 9.22v20.844h-.05z"
        fill="#34A853"
      />
      <Path
        d="M50.256 18.94v15.984l12.276-9.22v-4.91c0-4.56-5.21-7.165-8.869-4.41l-3.407 2.556z"
        fill="#FBBC04"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.744 34.874V18.94l14.73 11.073L50.207 18.94v15.984L35.525 45.947 20.744 34.874z"
        fill="#EA4335"
      />
      <Path
        d="M8.468 20.744v4.91l12.276 9.22V18.94l-3.457-2.606c-3.608-2.705-8.82-.1-8.82 4.41z"
        fill="#C5221F"
      />
    </Svg>
  );
}

export default Gmail_logo;
