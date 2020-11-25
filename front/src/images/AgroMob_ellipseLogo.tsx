import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

interface logoProps {
  height?: number;
  width?: number;
}

function EllipseLogo(props: logoProps) {
  return (
    <Svg
      width={props.width ?? 412}
      height={props.height ?? 240}
      viewBox={`0 0 ${props.width ?? 360} ${props.height ?? 156}`}
      fill="none"
    >
      <Ellipse cx={183} cy={39} rx={212} ry={117} fill="#526FD5" />
      <Path
        d="M91.095 78.264c-6.728 0-12.2 5.922-12.2 13.202 0 7.278 5.472 13.2 12.2 13.2 6.727 0 12.198-5.922 12.198-13.2 0-7.28-5.472-13.202-12.198-13.202zm0 19.802c-3.365 0-6.1-2.96-6.1-6.6 0-3.64 2.735-6.601 6.1-6.601 3.363 0 6.099 2.96 6.099 6.6 0 3.64-2.736 6.6-6.1 6.6zM49.413 78.264c-6.727 0-12.2 5.922-12.2 13.202 0 7.278 5.473 13.2 12.2 13.2 6.727 0 12.2-5.922 12.2-13.2 0-7.28-5.473-13.202-12.2-13.202zm0 19.802c-3.364 0-6.1-2.96-6.1-6.6 0-3.64 2.736-6.601 6.1-6.601 3.363 0 6.1 2.96 6.1 6.6 0 3.64-2.736 6.6-6.1 6.6zM99.31 40.479c-.519-1.114-1.573-1.817-2.726-1.817H80.521v6.6h14.182l8.304 17.874 5.452-2.966-9.15-19.691z"
        fill="#0D130F"
      />
      <Path
        d="M81.945 88.275H58.868v6.6h23.077v-6.6zM40.264 88.275H29.69c-1.684 0-3.05 1.478-3.05 3.3 0 1.823 1.366 3.3 3.05 3.3h10.573c1.684 0 3.05-1.477 3.05-3.3 0-1.823-1.366-3.3-3.05-3.3zM114.141 68.1l-5.999-8.36c-.576-.806-1.466-1.277-2.409-1.277H83.571V35.36c0-1.823-1.365-3.3-3.05-3.3h-50.83c-1.684 0-3.05 1.478-3.05 3.3 0 1.823 1.366 3.3 3.05 3.3h47.78v23.102c0 1.823 1.366 3.3 3.05 3.3h23.719l4.442 6.191v17.02h-8.438c-1.685 0-3.05 1.478-3.05 3.3 0 1.824 1.365 3.301 3.05 3.301h11.488c1.684 0 3.049-1.477 3.049-3.3V70.124a3.48 3.48 0 00-.64-2.024zM40.06 71.554H26.031c-1.684 0-3.05 1.477-3.05 3.3 0 1.823 1.366 3.3 3.05 3.3h14.03c1.684 0 3.049-1.477 3.049-3.3 0-1.823-1.365-3.3-3.05-3.3zM47.075 58.573H21.05c-1.685 0-3.05 1.477-3.05 3.3 0 1.823 1.365 3.3 3.05 3.3h26.025c1.685 0 3.05-1.477 3.05-3.3 0-1.822-1.365-3.3-3.05-3.3z"
        fill="#0D130F"
      />
      <Path
        d="M52.056 45.592H26.032c-1.684 0-3.05 1.477-3.05 3.3 0 1.823 1.366 3.3 3.05 3.3h26.026c1.684 0 3.05-1.477 3.05-3.3 0-1.823-1.366-3.3-3.05-3.3z"
        fill="#0D130F"
      />
      <Path
        d="M142.657 83.136h-11.82l-1.895 5.591h-8.076l11.46-31.654h8.933l11.459 31.654h-8.166l-1.895-5.591zm-1.985-5.952l-3.925-11.588-3.88 11.588h7.805zm25.098-13.978c1.775 0 3.324.36 4.647 1.082 1.354.722 2.392 1.668 3.113 2.84v-3.561h7.715v25.115c0 2.315-.466 4.404-1.398 6.268-.903 1.894-2.301 3.397-4.196 4.509-1.865 1.112-4.196 1.668-6.993 1.668-3.73 0-6.752-.886-9.068-2.66-2.317-1.743-3.64-4.119-3.971-7.124h7.625c.241.962.812 1.713 1.714 2.254.903.571 2.015.857 3.339.857 1.594 0 2.858-.466 3.79-1.398.962-.902 1.443-2.36 1.443-4.374V85.12c-.751 1.172-1.789 2.134-3.113 2.886-1.323.721-2.872 1.082-4.647 1.082-2.075 0-3.955-.526-5.639-1.578-1.685-1.082-3.023-2.6-4.015-4.554-.963-1.984-1.444-4.269-1.444-6.854s.481-4.855 1.444-6.809c.992-1.954 2.33-3.457 4.015-4.509 1.684-1.052 3.564-1.578 5.639-1.578zm7.76 12.94c0-1.923-.541-3.441-1.624-4.553-1.053-1.112-2.346-1.669-3.88-1.669-1.534 0-2.842.556-3.925 1.669-1.053 1.082-1.579 2.585-1.579 4.509 0 1.924.526 3.457 1.579 4.6 1.083 1.111 2.391 1.668 3.925 1.668 1.534 0 2.827-.557 3.88-1.669 1.083-1.112 1.624-2.63 1.624-4.554zm21.011-8.386c.903-1.383 2.031-2.465 3.384-3.247 1.354-.811 2.858-1.217 4.512-1.217v8.161h-2.121c-1.924 0-3.368.421-4.331 1.263-.963.812-1.444 2.255-1.444 4.329v11.678h-7.714v-25.16h7.714v4.193zm23.043 21.328c-2.467 0-4.692-.526-6.677-1.578-1.955-1.052-3.505-2.555-4.647-4.51-1.113-1.953-1.669-4.238-1.669-6.853 0-2.585.571-4.855 1.714-6.809 1.142-1.984 2.707-3.502 4.692-4.554 1.985-1.052 4.21-1.578 6.677-1.578 2.466 0 4.692.526 6.677 1.578 1.986 1.052 3.549 2.57 4.693 4.554 1.142 1.954 1.714 4.224 1.714 6.809s-.587 4.87-1.76 6.854a11.6 11.6 0 01-4.737 4.509c-1.985 1.052-4.211 1.578-6.677 1.578zm0-6.673c1.474 0 2.722-.541 3.745-1.624 1.052-1.082 1.579-2.63 1.579-4.644 0-2.014-.512-3.562-1.534-4.644-.993-1.083-2.226-1.624-3.7-1.624-1.504 0-2.752.541-3.744 1.624-.993 1.052-1.489 2.6-1.489 4.644 0 2.014.481 3.562 1.444 4.644.992 1.083 2.225 1.624 3.699 1.624z"
        fill="#4DD674"
      />
      <Path
        d="M270.718 57.073v31.654h-7.715V69.744l-7.083 18.983h-6.226L242.565 69.7v19.028h-7.715V57.073h9.114l8.888 21.915 8.797-21.915h9.069zm17.007 32.015c-2.466 0-4.692-.526-6.677-1.578-1.955-1.052-3.504-2.555-4.647-4.51-1.113-1.953-1.669-4.238-1.669-6.853 0-2.585.572-4.855 1.714-6.809 1.143-1.984 2.707-3.502 4.692-4.554 1.985-1.052 4.211-1.578 6.677-1.578 2.467 0 4.692.526 6.677 1.578 1.986 1.052 3.55 2.57 4.692 4.554 1.144 1.954 1.715 4.224 1.715 6.809s-.587 4.87-1.76 6.854a11.588 11.588 0 01-4.737 4.509c-1.985 1.052-4.21 1.578-6.677 1.578zm0-6.673c1.474 0 2.722-.542 3.745-1.624 1.053-1.082 1.579-2.63 1.579-4.644 0-2.014-.511-3.562-1.534-4.645-.993-1.082-2.226-1.623-3.7-1.623-1.503 0-2.752.541-3.744 1.623-.993 1.053-1.489 2.6-1.489 4.645 0 2.014.481 3.562 1.443 4.644.993 1.082 2.226 1.624 3.7 1.624zm24.982-15.286c.722-1.173 1.759-2.12 3.113-2.841 1.353-.721 2.902-1.082 4.647-1.082 2.075 0 3.955.526 5.639 1.578 1.684 1.052 3.008 2.555 3.971 4.51.992 1.953 1.488 4.223 1.488 6.808s-.496 4.87-1.488 6.854c-.963 1.954-2.287 3.472-3.971 4.554-1.684 1.052-3.564 1.578-5.639 1.578-1.775 0-3.324-.345-4.647-1.037-1.324-.722-2.361-1.669-3.113-2.84v3.516h-7.715V55.36h7.715v11.769zm11.008 8.973c0-1.924-.541-3.427-1.624-4.51-1.053-1.111-2.361-1.668-3.925-1.668-1.534 0-2.842.556-3.925 1.669-1.053 1.112-1.579 2.63-1.579 4.554 0 1.924.526 3.442 1.579 4.554 1.083 1.112 2.391 1.668 3.925 1.668 1.534 0 2.842-.556 3.925-1.668 1.083-1.142 1.624-2.675 1.624-4.6z"
        fill="#0D130F"
      />
    </Svg>
  );
}

export default EllipseLogo;
