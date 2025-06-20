import { memo, forwardRef, useRef, useState, useLayoutEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { clsx } from "clsx";

const MobileMenu = forwardRef(
  ({ open, children, className, ariaLabel = "Mobile menu", ...props }, ref) => {
    const innerRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useLayoutEffect(() => {
      if (innerRef.current) {
        setContentHeight(innerRef.current.scrollHeight);
      }
    }, [children, open]);
    const styles = useSpring({
      height: open ? contentHeight : 0,
      opacity: open ? 1 : 0,
      config: { tension: 250, friction: 30 },
    });
    return (
      <animated.nav
        ref={ref}
        style={styles}
        className={clsx("overflow-hidden", className)}
        aria-label={ariaLabel}
        {...props}
      >
        <div ref={innerRef} className="divide-y divide-GrayishViolet">{children}</div>
      </animated.nav>
    );
  }
);

export default memo(MobileMenu);
